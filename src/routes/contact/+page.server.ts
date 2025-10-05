// src/routes/contact/+page.server.ts
import type { Actions } from './$types';
import { env } from '$env/dynamic/private';
import nodemailer from 'nodemailer';

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

// Build a transporter from env (runtime, via PM2/.env)
function createTransport() {
  const host = env.SMTP_HOST;
  const port = env.SMTP_PORT ? Number(env.SMTP_PORT) : 587;
  const user = env.SMTP_USER;
  const pass = env.SMTP_PASS;

  if (!host || !port || !user || !pass) {
    console.error('Missing SMTP env vars (SMTP_HOST/SMTP_PORT/SMTP_USER/SMTP_PASS)');
    throw new Error('Email transport is not configured.');
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465, // true for 465, false for other ports
    auth: { user, pass }
  });
}

export const actions: Actions = {
  default: async ({ request, getClientAddress }) => {
    const formData = await request.formData();

    // Honeypot anti-spam (hidden field in the form)
    const robot = String(formData.get('website') || '').trim();
    if (robot) {
      // Pretend success (don’t hint bots)
      return { success: true };
    }

    const name = String(formData.get('name') || '').trim();
    const company = String(formData.get('company') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const phone = String(formData.get('phone') || '').trim();
    const details = String(formData.get('details') || '').trim();

    const errors: Record<string, string> = {};
    if (!name) errors.name = 'Please enter your name.';
    if (!email || !isEmail(email)) errors.email = 'Please enter a valid email.';
    if (!details) errors.details = 'Please add load details.';

    if (Object.keys(errors).length) {
      return { success: false, errors, values: { name, company, email, phone, details } };
    }

    const TO_EMAIL = env.TO_EMAIL || 'info@oguzhanllc.com';
    const FROM_EMAIL = env.FROM_EMAIL || `OGUZHAN LLC <no-reply@${(env.MAIL_DOMAIN || 'oguzhanllc.com')}>`;

    const html = `
      <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;font-size:14px;line-height:1.5">
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company || '-'}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || '-'}</p>
        <p><strong>IP:</strong> ${getClientAddress()}</p>
        <hr/>
        <p><strong>Details:</strong></p>
        <pre style="white-space:pre-wrap">${details}</pre>
      </div>
    `;
    const text =
`New Quote Request
Name: ${name}
Company: ${company || '-'}
Email: ${email}
Phone: ${phone || '-'}
IP: ${getClientAddress()}

Details:
${details}
`;

    try {
      const transporter = createTransport();
      await transporter.sendMail({
        to: TO_EMAIL,
        from: FROM_EMAIL,
        replyTo: `"${name}" <${email}>`,
        subject: `New Quote Request from ${name}`,
        text,
        html
      });
      return { success: true };
    } catch (err) {
      console.error('Email send failed:', err);
      return {
        success: false,
        error: 'We could not send your request right now. Please try again shortly.',
        values: { name, company, email, phone, details }
      };
    }
  }
};
