<section class="container mx-auto max-w-3xl px-4 py-16 md:py-20">
	<h1 class="font-heading text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Request a quote</h1>
	<p class="mt-3 text-slate-600">Tell us about your lanes and requirements. Our dispatch team will get back to you quickly.</p>
	<form class="mt-8 space-y-6">
		<div class="grid gap-6 sm:grid-cols-2">
			<div>
				<label for="name" class="mb-1 block text-sm font-medium text-slate-700">Name</label>
				<input id="name" name="name" type="text" class="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand" required />
			</div>
			<div>
				<label for="company" class="mb-1 block text-sm font-medium text-slate-700">Company</label>
				<input id="company" name="company" type="text" class="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand" />
			</div>
		</div>
		<div class="grid gap-6 sm:grid-cols-2">
			<div>
				<label for="email" class="mb-1 block text-sm font-medium text-slate-700">Email</label>
				<input id="email" name="email" type="email" class="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand" required />
			</div>
			<div>
				<label for="phone" class="mb-1 block text-sm font-medium text-slate-700">Phone</label>
				<input id="phone" name="phone" type="tel" class="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand" />
			</div>
		</div>
		<div>
			<label for="details" class="mb-1 block text-sm font-medium text-slate-700">Load details</label>
			<textarea id="details" name="details" rows="5" class="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand" placeholder="Origin, destination, weight, equipment, timing" required></textarea>
		</div>
		<div class="flex items-center justify-between">
			<p class="text-xs text-slate-500">By submitting, you agree to be contacted by OGUZHAN LLC.</p>
			<button type="submit" class="inline-flex items-center rounded-md bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2">Submit</button>
		</div>
	</form>
</section>
