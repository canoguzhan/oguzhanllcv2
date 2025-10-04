<!-- src/routes/+page.svelte -->

<!-- HERO -->
<div class="absolute inset-0 -z-10 overflow-hidden">
  <!-- Fallback for users who prefer reduced motion -->
  <img
    src="/media/hero-fallback.jpg"
    alt=""
    aria-hidden="true"
    class="hidden absolute inset-0 h-full w-full object-cover motion-reduce:block"
    loading="eager"
    decoding="async"
  />

  <!-- Background video (cover) -->
  <video
    class="absolute inset-0 h-full w-full object-cover motion-reduce:hidden"
    autoplay
    muted
    loop
    playsinline
    preload="metadata"
    poster="/media/hero-fallback.jpg"
  >
    <!-- If you also have WebM, list it first for better compression -->
    <!-- <source src="/media/oguzhanllc.webm" type="video/webm" /> -->
    <source src="/media/oguzhanllc.mp4" type="video/mp4" />
  </video>

  <!-- Overlays -->
  <div class="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/35 via-black/25 to-black/45"></div>
  <div class="pointer-events-none absolute top-0 left-0 h-[12%] w-full bg-gradient-to-b from-black/70 to-transparent"></div>
</div>


      <!-- Content -->
      <div class="relative z-10 grid h-full place-items-center">
        <div class="container mx-auto px-4">
          <div class="mx-auto max-w-5xl text-center text-white">
            <h1 class="font-heading font-extrabold tracking-tight drop-shadow text-[clamp(1.4rem,6vw,2.4rem)]">
              Reliable capacity. <span class="whitespace-nowrap">Modern operations.</span>
            </h1>

            <p class="mt-3 text-[clamp(.95rem,3.4vw,1.1rem)] text-white/90 drop-shadow">
              OGUZHAN LLC combines experienced drivers, modern telematics, and a safety-first culture
              to deliver predictable, scalable trucking solutions.
            </p>

<div class="mt-5 hidden sm:flex items-center justify-center gap-3">
  <a href="/contact" class="inline-flex items-center rounded-md bg-brand px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-brand-600">
    Get a Quote
  </a>
  <a href="#partners" class="inline-flex items-center rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-white/90 hover:bg-white/10">
    Our Partners
  </a>
</div>

          </div>
        </div>
      </div>
      <!-- /Content -->
    </div>
  </div>
</section>

<!-- PARTNERS -->
<section id="partners" class="py-12 bg-gradient-to-b from-slate-50 to-white">
  <div class="container mx-auto px-4">
    <div class="mx-auto max-w-4xl text-center">
      <p class="text-sm font-medium uppercase tracking-wide text-slate-500">Trusted by</p>

      <div class="mt-8 flex items-center justify-center">
        <div class="flex h-16 w-52 items-center justify-center rounded-lg bg-transparent transition hover:scale-[1.02] hover:bg-slate-50/20">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
            alt="Amazon"
            class="h-10 w-auto object-contain grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition"
          />
        </div>
      </div>
    </div>
  </div>
</section>

<!-- FEATURES -->
<section class="container mx-auto px-4 py-16">
  <div class="mx-auto max-w-5xl">
    <h2 class="text-2xl font-bold text-slate-900">What sets us apart</h2>
    <p class="mt-2 text-slate-600">
      A concise view of our core strengths that keep your freight moving smoothly.
    </p>

    <div class="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <!-- Card -->
      <article
        class="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-white to-slate-50/70 p-6 shadow-sm ring-1 ring-slate-200/60 transition hover:shadow-lg hover:ring-slate-300"
      >
        <div class="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-brand/70 via-brand to-brand/60 opacity-80"></div>

        <div class="flex items-start gap-4">
          <div
            class="flex h-14 w-14 items-center justify-center rounded-xl bg-brand text-white shadow-md ring-1 ring-white/20 transition group-hover:scale-105"
          >
            <svg class="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M3 13l4 4L21 3" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>

          <div>
            <h3 class="text-lg font-semibold text-slate-900">Safety first</h3>
            <p class="mt-2 text-sm leading-6 text-slate-600">
              Comprehensive maintenance programs, driver training, and industry-leading compliance to protect your shipments and reputation.
            </p>
          </div>
        </div>
      </article>

      <!-- Card -->
      <article
        class="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-white to-slate-50/70 p-6 shadow-sm ring-1 ring-slate-200/60 transition hover:shadow-lg hover:ring-slate-300"
      >
        <div class="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-slate-300 via-slate-400 to-slate-300 opacity-80"></div>

        <div class="flex items-start gap-4">
          <div
            class="flex h-14 w-14 items-center justify-center rounded-xl bg-slate-100 text-slate-800 shadow-sm ring-1 ring-slate-200 transition group-hover:scale-105"
          >
            <svg class="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M3 12h18M3 6h18M3 18h18" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>

          <div>
            <h3 class="text-lg font-semibold text-slate-900">Real-time visibility</h3>
            <p class="mt-2 text-sm leading-6 text-slate-600">
              Live GPS tracking, ETA updates, and proactive alerts integrated into your workflow for full transparency.
            </p>
          </div>
        </div>
      </article>

      <!-- Card -->
      <article
        class="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-white to-slate-50/70 p-6 shadow-sm ring-1 ring-slate-200/60 transition hover:shadow-lg hover:ring-slate-300"
      >
        <div class="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-sky-300 via-sky-500 to-sky-300 opacity-80"></div>

        <div class="flex items-start gap-4">
          <div
            class="flex h-14 w-14 items-center justify-center rounded-xl bg-sky-100 text-sky-800 shadow-sm ring-1 ring-sky-200 transition group-hover:scale-105"
          >
            <svg class="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M3 7h18M3 12h18M3 17h18" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>

          <div>
            <h3 class="text-lg font-semibold text-slate-900">Scalable capacity</h3>
            <p class="mt-2 text-sm leading-6 text-slate-600">
              Flexible modes, dedicated lanes, and surge coverage through our vetted network — scaled to meet your peaks.
            </p>
          </div>
        </div>
      </article>
    </div>
  </div>
</section>

<!-- ABOUT -->
<section id="about" class="container mx-auto px-4 py-16 md:py-24">
  <div class="mx-auto max-w-4xl">
    <h2 class="font-heading text-3xl font-bold text-slate-900">About OGUZHAN LLC Logistics</h2>
    <p class="mt-4 text-slate-600">
      Your Trusted Transportation Partner. With the knowledge and experience we have gained over the years, the aim of our logistics service is your unconditional customer satisfaction and by creating long-term cooperation, we offer a holistic service approach with our current technologies used in logistics service. OGUZHAN LLC Logistics continues to be a corporate logistics company that offers flawless Land Transportation service domestically and has brought countless innovations to the sector.
    </p>

    <div class="mt-8 grid gap-8 md:grid-cols-2">
      <div>
        <h3 class="text-xl font-semibold text-slate-900">Our Mission</h3>
        <p class="mt-3 text-slate-600">
          OGUZHAN LLC Logistics has set out with a mission to add value to our customers by bringing together excellence and trust in logistics solutions. We aim to be a pioneer in the sector with our customer-oriented approach, innovative solutions and sustainability principles. We contribute to optimizing our customers' business processes and their growth by ensuring reliability and operational excellence at every step.
        </p>
      </div>
      <div>
        <h3 class="text-xl font-semibold text-slate-900">Our Vision</h3>
        <p class="mt-3 text-slate-600">
          Our vision is to maximize our customer satisfaction and offer our service to you with a strong organization, the use of the latest technology and environmentally sensitive approaches.
        </p>
      </div>
    </div>

    <div class="mt-8">
      <h3 class="text-xl font-semibold text-slate-900">Our Goals</h3>
      <p class="mt-3 text-slate-600">In line with our mission and vision, we focus on the following strategic priorities:</p>

      <div class="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <!-- Goal Card -->
        <div class="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow transition hover:-translate-y-1 hover:shadow-lg">
          <div class="flex items-start gap-4">
            <div class="flex h-12 w-12 items-center justify-center rounded-none bg-brand text-white shadow-md">
              <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <rect x="6" y="6" width="12" height="12" rx="2"/>
                <path d="M9 3v2M15 3v2M9 21v-2M15 21v-2M3 9h2M3 15h2M21 9h-2M21 15h-2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div>
              <h4 class="text-lg font-semibold text-slate-900">Technological Leadership</h4>
              <p class="mt-1 text-sm text-slate-600">Optimizing logistics operations using innovative technologies to increase efficiency and customer satisfaction.</p>
              <div class="mt-3">
                <span class="inline-block rounded-sm bg-slate-100 px-2 py-1 text-xs text-slate-600">Innovation</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Goal Card -->
        <div class="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow transition hover:-translate-y-1 hover:shadow-lg">
          <div class="flex items-start gap-4">
            <div class="flex h-12 w-12 items-center justify-center rounded-none bg-emerald-100 text-emerald-700 shadow-sm">
              <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M3 21s4-4 9-4 9 4 9 4-4-9-9-9-9 9-9 9z" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div>
              <h4 class="text-lg font-semibold text-slate-900">Sustainability</h4>
              <p class="mt-1 text-sm text-slate-600">Becoming a leader in sustainability by developing environmentally sensitive solutions across our operations.</p>
              <div class="mt-3">
                <span class="inline-block rounded-sm bg-slate-100 px-2 py-1 text-xs text-slate-600">Eco focus</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Goal Card -->
        <div class="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow transition hover:-translate-y-1 hover:shadow-lg">
          <div class="flex items-start gap-4">
            <div class="flex h-12 w-12 items-center justify-center rounded-none bg-sky-100 text-sky-700 shadow-sm">
              <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M12 2a10 10 0 100 20 10 10 0 000-20z"/>
                <path d="M2 12h20M12 2v20" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div>
              <h4 class="text-lg font-semibold text-slate-900">Global Impact</h4>
              <p class="mt-1 text-sm text-slate-600">Expanding our reach and becoming a strong brand in international logistics solutions.</p>
              <div class="mt-3">
                <span class="inline-block rounded-sm bg-slate-100 px-2 py-1 text-xs text-slate-600">Growth</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Goal Card -->
        <div class="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow transition hover:-translate-y-1 hover:shadow-lg">
          <div class="flex items-start gap-4">
            <div class="flex h-12 w-12 items-center justify-center rounded-none bg-indigo-100 text-indigo-700 shadow-sm">
              <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 10-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 000-7.78z" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div>
              <h4 class="text-lg font-semibold text-slate-900">Customer Satisfaction</h4>
              <p class="mt-1 text-sm text-slate-600">Supporting customers' logistics processes by understanding needs and offering flexible solutions.</p>
              <div class="mt-3">
                <span class="inline-block rounded-sm bg-slate-100 px-2 py-1 text-xs text-slate-600">Satisfaction</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Goal Card -->
        <div class="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow transition hover:-translate-y-1 hover:shadow-lg">
          <div class="flex items-start gap-4">
            <div class="flex h-12 w-12 items-center justify-center rounded-none bg-amber-100 text-amber-700 shadow-sm">
              <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M17 21v-2a4 4 0 00-4-4H9a4 4 0 00-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
            </div>
            <div>
              <h4 class="text-lg font-semibold text-slate-900">Employee Development</h4>
              <p class="mt-1 text-sm text-slate-600">Supporting employees' professional and personal development and fostering strong team spirit.</p>
              <div class="mt-3">
                <span class="inline-block rounded-sm bg-slate-100 px-2 py-1 text-xs text-slate-600">People first</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>
