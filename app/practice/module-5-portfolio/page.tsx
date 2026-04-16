'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Module5Portfolio() {
  const [isDark, setIsDark] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const projects = [
    {
      title: 'E-commerce Platform',
      description:
        'A modern online store with a seamless checkout flow, inventory management, and responsive shopping experience.',
      image: '/ecomm/3d-isometric-e-commerce-concept-online-store/2128.jpg',
      githubUrl: 'https://github.com/hannamitri/nft-marketplace-starter',
      liveUrl: 'https://yarie-internship.vercel.app/',
    },
    {
      title: 'Mobile Productivity App',
      description:
        'A mobile-first task manager that helps users stay organized with offline support and real-time notifications.',
      image: '/mobil/4635743.jpg',
      githubUrl: 'https://github.com/ddiambb/diet-decision-assistant',
      liveUrl: 'https://diet-decision-assistant.onrender.com',
    },
    {
      title: 'Design System Library',
      description:
        'A comprehensive design system with reusable components, documentation, and theming capabilities for consistent UI.',
      image:
        '/designs/fluid-neon-holographic-abstract-design-elements-cards-collection-six-vertical-compositions-with-grad/27379.jpg',
      githubUrl: 'https://github.com/ddiambb/fes-final-project',
      liveUrl: 'https://ddiambb.github.io/fes-final-project/',
    },
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const isFormValid = formData.name.trim() && formData.email.trim() && formData.message.trim()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (!isFormValid) {
      e.preventDefault()
    }
  }

  return (
    <div className={isDark ? 'dark scroll-smooth' : 'scroll-smooth'}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        {/* Header */}
        <header className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-10 transition-colors duration-300">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex-shrink-0">
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">Portfolio</h1>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link
                    href="/"
                    className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ease-in-out"
                  >
                    Home
                  </Link>
                  <a
                    href="#projects"
                    className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    Projects
                  </a>
                  <a
                    href="#about"
                    className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    About
                  </a>
                  <a
                    href="#contact"
                    className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    Contact
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setIsDark(!isDark)}
                  className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  aria-label="Toggle dark mode"
                  title="Toggle dark mode"
                >
                  {isDark ? (
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 3v1m0 16v1m9-9h-1m-16 0H1m15.364 1.636l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  ) : (
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                    </svg>
                  )}
                </button>
                <div className="md:hidden">
                  <button
                    className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white p-2 transition-colors"
                    aria-label="Toggle menu"
                    title="Toggle menu"
                  >
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </nav>
        </header>

        {/* Hero Section */}
        <section
          id="hero"
          className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20 animate-fade-in"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm Yarie Leake</h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Building elegant web experiences that connect people and ideas.
              </p>
              <p className="text-lg mb-8 max-w-2xl mx-auto">
                I design and build polished front-end applications with thoughtful UX, performance,
                and responsive layouts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="py-20 bg-slate-50 dark:bg-gray-800 transition-colors duration-300"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                About Me
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-10">
                I blend design thinking with front-end development to build intuitive web products.
                My work focuses on performance, accessibility, and delightful user experiences.
              </p>
            </div>
            <div className="grid gap-12 lg:grid-cols-[280px_minmax(0,1fr)] items-center">
              <div className="mx-auto w-72 overflow-hidden rounded-3xl shadow-lg">
                <Image
                  src="/profile.jpg"
                  alt="Portrait of Yarie Leake"
                  width={288}
                  height={288}
                  className="w-full h-72 object-cover"
                />
              </div>
              <div className="mx-auto max-w-2xl">
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  As a developer, I enjoy turning ideas into polished interfaces that feel fast and
                  simple to use. I collaborate closely with teams to bridge design and development,
                  delivering projects that are both beautiful and functional.
                </p>
                <div className="rounded-3xl border border-slate-200 dark:border-gray-700 bg-white dark:bg-gray-700 p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Skills
                  </h3>
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                    <span className="rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 text-sm font-medium">
                      React
                    </span>
                    <span className="rounded-full bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-3 py-1 text-sm font-medium">
                      TypeScript
                    </span>
                    <span className="rounded-full bg-violet-50 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 px-3 py-1 text-sm font-medium">
                      Tailwind CSS
                    </span>
                    <span className="rounded-full bg-slate-50 dark:bg-slate-900/30 text-slate-700 dark:text-slate-300 px-3 py-1 text-sm font-medium">
                      Next.js
                    </span>
                    <span className="rounded-full bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 px-3 py-1 text-sm font-medium">
                      UI Design
                    </span>
                    <span className="rounded-full bg-cyan-50 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 px-3 py-1 text-sm font-medium">
                      Accessibility
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section
          id="projects"
          className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                My Projects
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Here are some of the projects I've worked on recently. Each one represents a unique
                challenge and learning experience.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="group bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-gray-950 overflow-hidden hover:shadow-lg dark:hover:shadow-gray-950 transition-shadow"
                >
                  <div className="relative">
                    <Image
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      width={600}
                      height={240}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                    <div className="flex gap-4">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
                      >
                        GitHub →
                      </a>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 font-medium"
                      >
                        Live Demo →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="py-20 bg-slate-50 dark:bg-gray-800 transition-colors duration-300"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Get In Touch
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Have a project in mind? Let's connect and build something great together.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8 md:p-12">
              {submitted && (
                <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-lg">
                  ✓ Thank you for your message! I'll get back to you soon.
                </div>
              )}

              <form
                action="https://www.google.com"
                method="GET"
                target="_blank"
                rel="noreferrer noopener"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-900 dark:text-white mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-900 dark:text-white mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-900 dark:text-white mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors resize-none"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={!isFormValid}
                  className={`w-full px-6 py-3 rounded-lg font-semibold transition-colors ${
                    isFormValid
                      ? 'bg-blue-600 hover:bg-blue-700 text-white cursor-pointer'
                      : 'bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed'
                  }`}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 dark:bg-black text-white py-12 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Yarie Leake</h3>
                <p className="text-gray-400 dark:text-gray-500 mb-4">
                  Full Stack Developer passionate about crafting polished, responsive web
                  experiences.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#hero"
                      className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors duration-200 ease-in-out"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#projects"
                      className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors duration-200 ease-in-out"
                    >
                      Projects
                    </a>
                  </li>
                  <li>
                    <a
                      href="#about"
                      className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors duration-200 ease-in-out"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors duration-200 ease-in-out"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Connect</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/yarieleake"
                    className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors"
                    aria-label="GitHub"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                  <a
                    href="https://linkedin.com/in/yarie-leake"
                    className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors"
                    aria-label="LinkedIn"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a
                    href="https://twitter.com/yarieleake"
                    className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors"
                    aria-label="Twitter"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 dark:border-gray-700 mt-8 pt-8 text-center">
              <p className="text-gray-400 dark:text-gray-500">
                © 2026 Yarie Leake. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
