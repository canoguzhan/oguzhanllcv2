<script lang="ts">
  import "../app.css";

  const { children } = $props();

  // --- Runes state ---
  let mobileOpen = $state(false);
  let panelEl = $state<HTMLDivElement | null>(null);

  // --- Close with Esc ---
  function onKey(e: KeyboardEvent) {
    if (e.key === "Escape") mobileOpen = false;
  }

  // --- Manage scroll lock & focus using $effect ---
  $effect(() => {
    if (mobileOpen) {
      document.body.classList.add("overflow-hidden");
      window.addEventListener("keydown", onKey);
      queueMicrotask(() => panelEl?.focus());
    } else {
      document.body.classList.remove("overflow-hidden");
      window.removeEventListener("keydown", onKey);
    }

    // cleanup
    return () => {
      document.body.classList.remove("overflow-hidden");
      window.removeEventListener("keydown", onKey);
    };
  });
</script>

<div class="min-h-screen bg-gradient-to-b from-white via-slate-50 to-slate-100 text-slate-900">
  <!-- HEADER -->
  <header class="sticky top-0 z-50 border-b border-slate-200/60 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/50">
    <div class="container mx-auto flex items-center justify-between px-4 py-3 md:py-2">
      <!-- Logo -->
      <a href="/" class="flex items-center gap-2">
<img src="https://cdn.builder.io/api/v1/image/assets%2Fe8cf38e3baf04f94a1f5f6a7714c5a89%2F74cb5897bd0a4e58b69dfa6f40d820e5?format=webp&width=800" alt="OGUZHAN LLC logo" style="display:block;height:320px;max-width:320px;margin-top: -90px;margin-bottom: -120px;object-fit:contain;" />
      </a>

      <!-- Desktop nav -->
      <nav class="hidden md:flex items-center gap-6">
        <a href="/" class="text-sm font-medium text-slate-700 hover:text-brand">Home</a>
        <a href="/links" class="text-sm font-medium text-slate-700 hover:text-brand">Links</a>
        <a href="/contact" class="text-sm font-medium text-slate-700 hover:text-brand">Contact</a>
        <a
          href="/contact"
          class="inline-flex items-center rounded-md bg-brand px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-600"
        >
          Get a Quote
        </a>
      </nav>

      <!-- Mobile hamburger -->
      <button
        class="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100"
        aria-label="Open menu"
        aria-expanded={mobileOpen}
        on:click={() => (mobileOpen = true)}
      >
        <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
          <path d="M4 6h16M4 12h16M4 18h16" stroke-linecap="round" />
        </svg>
      </button>
    </div>

    <!-- Mobile menu panel -->
{#if mobileOpen}
  <div
    class="fixed inset-0 z-[9999] md:hidden bg-slate-900 text-white
           w-screen h-[100dvh] min-h-[100svh]
           overflow-hidden overscroll-none"
    role="dialog"
    aria-modal="true"
    tabindex="-1"
    bind:this={panelEl}
  >
    <div class="flex h-full flex-col">
      <!-- Top bar -->
      <div class="flex items-center justify-between px-4 pt-[max(env(safe-area-inset-top),1rem)]">
        <a href="/" class="flex items-center gap-2" on:click={() => (mobileOpen = false)}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets%2Fe8cf38e3baf04f94a1f5f6a7714c5a89%2F74cb5897bd0a4e58b69dfa6f40d820e5?format=webp&width=800"
        alt="OGUZHAN LLC logo"
        class="h-64 sm:h-56 md:h-64 w-auto object-contain shrink-0"
      />


        </a>
        <button
          class="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white/10
                 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          aria-label="Close menu"
          on:click={() => (mobileOpen = false)}
        >
          <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
            <path d="M6 6l12 12M18 6L6 18" stroke-linecap="round" />
          </svg>
        </button>
      </div>

      <!-- Centered links -->
      <nav class="flex flex-1 flex-col items-center justify-center gap-8 text-lg font-medium">
        <a href="/"        on:click={() => (mobileOpen = false)} class="hover:text-brand transition">Home</a>
        <a href="/links"   on:click={() => (mobileOpen = false)} class="hover:text-brand transition">Links</a>
        <a href="/contact" on:click={() => (mobileOpen = false)} class="hover:text-brand transition">Contact</a>
      </nav>

      <!-- Bottom CTA -->
      <div class="px-6 pb-[max(env(safe-area-inset-bottom),1rem)]">
        <a
          href="/contact"
          class="block w-full rounded-md bg-brand px-6 py-4 text-center text-base font-semibold text-white shadow-md hover:bg-brand-600 transition"
          on:click={() => (mobileOpen = false)}
        >
          Get a Quote
        </a>
      </div>
    </div>
  </div>
{/if}


  </header>

  <!-- MAIN -->
  <main id="main" class="isolate">
    {@render children()}
  </main>

  <!-- FOOTER -->
  <footer class="border-t border-slate-200/60 bg-white/70">
    <div class="container mx-auto grid grid-cols-1 gap-6 px-4 py-10 text-sm text-slate-600 md:grid-cols-3">
      <div>
        <div class="flex items-center gap-3">
          <div
            class="h-64 w-64 bg-slate-900/60 -mt-[90px] -mb-[90px]
                   [mask-image:url('https://cdn.builder.io/api/v1/image/assets%2Fe8cf38e3baf04f94a1f5f6a7714c5a89%2F74cb5897bd0a4e58b69dfa6f40d820e5?format=webp&width=800')]
                   [mask-repeat:no-repeat] [mask-size:contain] [mask-position:left_center]"
            role="img"
            aria-label="OGUZHAN LLC logo"
          ></div>
        </div>
        <div class="mt-2">© {new Date().getFullYear()} OGUZHAN LLC. All rights reserved.</div>
      </div>

      <div>
        <div class="text-sm font-medium text-slate-800">Company</div>
        <ul class="mt-2 space-y-2">
          <li><a href="/about" class="hover:text-brand">About</a></li>
          <li><a href="/careers" class="hover:text-brand">Careers</a></li>
          <li><a href="/links" class="hover:text-brand">Links</a></li>
        </ul>
      </div>

      <div class="flex flex-col">
        <div class="text-sm font-medium text-slate-800">Legal</div>
        <ul class="mt-2 space-y-2">
          <li><a href="/privacy" class="hover:text-brand">Privacy Policy</a></li>
          <li><a href="/terms" class="hover:text-brand">Terms of Service</a></li>
          <li><a href="/contact" class="hover:text-brand">Support</a></li>
        </ul>
      </div>
    </div>
  </footer>
</div>
