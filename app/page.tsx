import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.15),_transparent_25%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.12),_transparent_30%)]" />
        <div className="relative max-w-7xl mx-auto px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80 mb-6">
              Personal portfolio
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight">
              Hi, I’m <span className="text-cyan-300">Yarie Leake</span>, a front-end developer
              building elegant web experiences.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl">
              I create polished, responsive websites and apps with thoughtful UI, strong
              performance, and modern design.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/practice/module-5-portfolio"
                className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-300"
              >
                Portfolio
              </Link>
              <a
                href="mailto:ddiambb@gmail.com"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/20"
              >
                ddiambb@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-500 mb-3">Projects</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900">Selected work</h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              Projects built with React, Next.js, Tailwind, and modern front-end best practices.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-lg">
              <span className="inline-flex rounded-full bg-cyan-50 px-3 py-1 text-sm font-semibold text-cyan-700">
                E-commerce
              </span>
              <h3 className="mt-6 text-2xl font-semibold text-slate-900">Online storefront</h3>
              <p className="mt-4 text-slate-600">
                A responsive shopping experience with product discovery, checkout flow, and modern
                UI interactions.
              </p>
            </article>

            <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-lg">
              <span className="inline-flex rounded-full bg-cyan-50 px-3 py-1 text-sm font-semibold text-cyan-700">
                Mobile App
              </span>
              <h3 className="mt-6 text-2xl font-semibold text-slate-900">Productivity tool</h3>
              <p className="mt-4 text-slate-600">
                A mobile-first app concept designed to keep users organized with offline support and
                elegant visuals.
              </p>
            </article>

            <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-lg">
              <span className="inline-flex rounded-full bg-cyan-50 px-3 py-1 text-sm font-semibold text-cyan-700">
                Design System
              </span>
              <h3 className="mt-6 text-2xl font-semibold text-slate-900">Reusable UI library</h3>
              <p className="mt-4 text-slate-600">
                A polished component library with consistent theming, responsive layouts, and design
                tokens.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-slate-950 text-white py-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto rounded-3xl border border-white/10 bg-white/5 p-10 shadow-2xl shadow-slate-900/10">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300 mb-3">Let’s connect</p>
            <h2 className="text-3xl sm:text-4xl font-semibold">
              Ready to build something great together?
            </h2>
            <p className="mt-4 text-slate-300">
              Reach out for collaboration, consulting, or to see more of my work.
            </p>
          </div>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              Explore Projects
            </a>
            <a
              href="mailto:ddiambb@gmail.com"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
            >
              Email Me
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
