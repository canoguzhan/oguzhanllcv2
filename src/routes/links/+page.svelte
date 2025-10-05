<script lang="ts">
  // Data
  const phones = [
    { label: "Main",     display: "+1 (227) 250-2476", tel: "+12272502476" },
    { label: "Alternative", display: "+1 (929) 928-5805", tel: "+19299285805" },
    { label: "Alternative",      display: "+1 (917) 502-8424", tel: "+19175028424" }
  ];

  const socials = [
    { name: "Instagram", href: "https://instagram.com/oguzhanllc",        icon: "instagram" },
    { name: "Facebook",  href: "https://www.facebook.com/Oguzhanllc/",    icon: "facebook"  }
  ];

  // Runes state for copy feedback
  let copied = $state<string>("");

  async function copyToClipboard(text: string) {
    try {
      await navigator.clipboard.writeText(text);
      copied = text;
      setTimeout(() => (copied = ""), 1400);
    } catch { /* noop */ }
  }

  function icon(name: string) {
    if (name === "mail") return `
      <svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.7">
        <path d="M4 6h16v12H4z"/><path d="M22 6l-10 7L2 6"/>
      </svg>`;
    if (name === "phone") return `
      <svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.7">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.51 19.51 0 0 1-6-6A19.8 19.8 0 0 1 2.09 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.89.31 1.76.57 2.6a2 2 0 0 1-.45 2.11L8 9a16 16 0 0 0 7 7l.57-1.23a2 2 0 0 1 2.11-.45c.84.26 1.71.45 2.6.57A2 2 0 0 1 22 16.92z"/>
      </svg>`;
    if (name === "arrow") return `
      <svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.7">
        <path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`;
    if (name === "copy") return `
      <svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.7">
        <rect x="9" y="9" width="13" height="13" rx="2"/><rect x="2" y="2" width="13" height="13" rx="2"/>
      </svg>`;
    if (name === "instagram") return `
      <svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.7">
        <rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="3.5"/><circle cx="17" cy="7" r="1"/>
      </svg>`;
    if (name === "facebook") return `
      <svg viewBox="0 0 24 24" class="h-5 w-5" fill="currentColor">
        <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.7-1.6 1.5V12h2.7l-.4 2.9h-2.3v7A10 10 0 0 0 22 12"/>
      </svg>`;
    return "";
  }
</script>

<section class="relative min-h-screen overflow-x-hidden bg-gradient-to-b from-white via-slate-50 to-slate-100 py-14 sm:py-18">
  <!-- Decorative background -->
  <div class="pointer-events-none absolute inset-0 -z-10">
    <!-- Keep blobs inside the page by clipping X overflow on the section above -->
    <div class="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-brand/10 blur-3xl"></div>
    <div class="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-sky-300/20 blur-3xl"></div>
  </div>

  <div class="mx-auto w-full max-w-md sm:max-w-lg px-5">
    <!-- Header / Avatar -->
    <div class="flex flex-col items-center text-center">
      <div class="relative">
        <div class="h-24 w-24 rounded-full bg-white shadow-lg ring-1 ring-slate-200 grid place-items-center overflow-hidden">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2Fe8cf38e3baf04f94a1f5f6a7714c5a89%2F74cb5897bd0a4e58b69dfa6f40d820e5?format=webp&width=800"
            alt="OGUZHAN LLC logo"
            class="h-16 w-16 object-contain"
            loading="eager"
            decoding="async"
          />
        </div>
        <div class="absolute -inset-1 -z-10 rounded-full bg-gradient-to-tr from-brand/30 via-brand/0 to-brand/30 blur-xl"></div>
      </div>

      <h1 class="mt-4 font-heading text-2xl sm:text-3xl font-bold text-slate-900">OGUZHAN LLC</h1>
      <p class="mt-1 text-sm text-slate-600">All the ways to reach our team — fast.</p>
    </div>

    <!-- Primary action -->
    <div class="mt-8">
      <a
        href="mailto:info@oguzhanllc.com"
        class="group block w-full rounded-xl bg-brand px-5 py-4 text-white shadow-lg ring-1 ring-brand/50 transition hover:bg-brand-600"
      >
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            {@html icon('mail')}
            <span class="text-lg font-semibold">Email us</span>
          </div>
          <div class="opacity-90 transition group-hover:translate-x-0.5">
            {@html icon('arrow')}
          </div>
        </div>
        <p class="mt-1 text-xs text-white/80">info@oguzhanllc.com</p>
      </a>
    </div>

    <!-- Phone cards -->
    <div class="mt-5 grid gap-4">
      {#each phones as p}
        <div class="rounded-xl bg-white/80 backdrop-blur shadow-sm ring-1 ring-slate-200 transition hover:shadow-md">
          <div class="flex items-center justify-between gap-3 px-4 py-3">
            <a href={`tel:${p.tel}`} class="flex min-w-0 flex-1 items-center gap-3">
              <div class="rounded-md bg-slate-100 p-2 text-slate-700">{@html icon('phone')}</div>
              <div class="min-w-0">
                <div class="text-sm font-medium text-slate-900">{p.label}</div>
                <div class="truncate text-sm text-slate-600">{p.display}</div>
              </div>
            </a>

            <div class="flex items-center gap-2">
              <a
                href={`tel:${p.tel}`}
                class="inline-flex items-center rounded-md bg-slate-900 px-3 py-2 text-xs font-semibold text-white hover:bg-slate-800"
              >
                Call
              </a>
              <button
                class="inline-flex items-center gap-1 rounded-md border border-slate-200 px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50"
                on:click={() => copyToClipboard(p.display)}
                aria-label={`Copy ${p.display}`}
              >
                {@html icon('copy')}
                <span>Copy</span>
              </button>
            </div>
          </div>
        </div>
      {/each}
    </div>

    <!-- Copy toast -->
    {#if copied}
      <div class="pointer-events-none fixed inset-x-0 bottom-4 z-50 mx-auto w-fit rounded-full bg-slate-900 px-4 py-2 text-xs font-medium text-white shadow-lg">
        Copied: {copied}
      </div>
    {/if}

    <!-- Socials -->
    <div class="mt-6 grid gap-3 sm:grid-cols-2">
      {#each socials as s}
        <a
          href={s.href}
          target="_blank"
          rel="noopener"
          class="group flex items-center justify-between rounded-xl bg-white/80 px-4 py-3 text-slate-900 shadow-sm ring-1 ring-slate-200 transition hover:shadow-md"
        >
          <span class="flex items-center gap-3">
            <span class="text-slate-700">{@html icon(s.icon)}</span>
            <span class="font-medium">{s.name}</span>
          </span>
          <span class="opacity-60 transition group-hover:translate-x-0.5">{@html icon('arrow')}</span>
        </a>
      {/each}
    </div>

    <!-- Footer -->
    <div class="mt-10 text-center text-xs text-slate-500">
      © {new Date().getFullYear()} OGUZHAN LLC. All rights reserved.
    </div>
  </div>
</section>
