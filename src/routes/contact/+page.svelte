<!-- src/routes/contact/+page.svelte -->
<script lang="ts">
  import { enhance } from '$app/forms';
  export let form: { 
    success?: boolean; 
    error?: string; 
    errors?: Record<string,string>; 
    values?: Record<string,string>; 
  } | undefined;
</script>

<section class="container mx-auto max-w-3xl px-4 py-16 md:py-20">
  <h1 class="font-heading text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Request a quote</h1>
  <p class="mt-3 text-slate-600">Tell us about your lanes and requirements. Our dispatch team will get back to you quickly.</p>

  {#if form?.success}
    <div class="mt-8 rounded-md border border-emerald-200 bg-emerald-50 p-4 text-emerald-800">
      <p><strong>Thank you!</strong> Your request has been sent. We’ll contact you soon.</p>
    </div>
  {:else}
    <form method="post" class="mt-8 space-y-6" use:enhance>
      <!-- Honeypot (hidden) -->
      <input type="text" name="website" class="hidden" tabindex="-1" autocomplete="off" />

      <div class="grid gap-6 sm:grid-cols-2">
        <div>
          <label for="name" class="mb-1 block text-sm font-medium text-slate-700">Name</label>
          <input id="name" name="name" type="text"
            class="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand"
            value={form?.values?.name ?? ''} required />
          {#if form?.errors?.name}
            <p class="mt-1 text-xs text-rose-600">{form.errors.name}</p>
          {/if}
        </div>

        <div>
          <label for="company" class="mb-1 block text-sm font-medium text-slate-700">Company</label>
          <input id="company" name="company" type="text"
            class="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand"
            value={form?.values?.company ?? ''} />
        </div>
      </div>

      <div class="grid gap-6 sm:grid-cols-2">
        <div>
          <label for="email" class="mb-1 block text-sm font-medium text-slate-700">Email</label>
          <input id="email" name="email" type="email"
            class="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand"
            value={form?.values?.email ?? ''} required />
          {#if form?.errors?.email}
            <p class="mt-1 text-xs text-rose-600">{form.errors.email}</p>
          {/if}
        </div>

        <div>
          <label for="phone" class="mb-1 block text-sm font-medium text-slate-700">Phone</label>
          <input id="phone" name="phone" type="tel"
            class="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand"
            value={form?.values?.phone ?? ''} />
        </div>
      </div>

      <div>
        <label for="details" class="mb-1 block text-sm font-medium text-slate-700">Load details</label>
        <textarea id="details" name="details" rows="5"
          class="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand"
          placeholder="Origin, destination, weight, equipment, timing" required>{form?.values?.details ?? ''}</textarea>
        {#if form?.errors?.details}
          <p class="mt-1 text-xs text-rose-600">{form.errors.details}</p>
        {/if}
      </div>

      {#if form?.error}
        <div class="rounded-md border border-rose-200 bg-rose-50 p-3 text-rose-700">{form.error}</div>
      {/if}

      <div class="flex items-center justify-between">
        <p class="text-xs text-slate-500">By submitting, you agree to be contacted by OGUZHAN LLC.</p>
        <button type="submit"
          class="inline-flex items-center rounded-md bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2">
          Submit
        </button>
      </div>
    </form>
  {/if}
</section>
