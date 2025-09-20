import React from 'react'
import Reveal from './Reveal'

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-primary-50/60 to-white dark:from-gray-950 dark:to-gray-900">
      {/* Subtle background illustration */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10">
        <svg
          className="w-full h-40 text-primary-100/60 dark:text-primary-900/30"
          viewBox="0 0 1440 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            fill="currentColor"
            d="M0,160L60,144C120,128,240,96,360,80C480,64,600,64,720,96C840,128,960,192,1080,192C1200,192,1320,128,1380,96L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          />
        </svg>
      </div>

      {/* Decorative blur orbs */}
      <div aria-hidden className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-primary-400/20 blur-3xl dark:bg-primary-700/20" />
      <div aria-hidden className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-primary-300/20 blur-3xl dark:bg-primary-600/20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="flex flex-col items-center gap-12">
          {/* Text block only */}
          <div className="w-full">
            <Reveal>
              <div className="text-center max-w-3xl mx-auto">
                <h1 className="mt-2 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
                  <span className="block text-xs sm:text-sm md:text-base font-medium text-gray-500 dark:text-gray-500">Hi, I'm</span>
                  <span
                    className="block mt-1 typewriter text-primary-700 dark:text-primary-300"
                    style={{ ['--tw-type-ch']: '13ch', ['--tw-type-steps']: 13, ['--tw-type-duration']: '3s' }}
                  >
                    Nidhi Parihar
                  </span>
                </h1>
                <p className="mt-4 text-xl text-gray-800 dark:text-gray-200">I build modern, accessible web experiences</p>
                <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
                  Frontend-focused developer crafting clean UIs with React, Vite, and Tailwind. I love subtle motion and thoughtful design.
                </p>

                <div className="mt-8 flex gap-4 justify-center">
                  <a
                    href="#projects"
                    className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-primary-600 to-primary-500 px-5 py-3 text-white shadow-lg shadow-primary-500/20 hover:from-primary-700 hover:to-primary-600 transition-colors"
                  >
                    View Projects
                    <svg className="ml-2 h-5 w-5 opacity-90" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 11-1.414-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <button
                    onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="inline-flex items-center justify-center rounded-lg px-5 py-3 text-primary-700 ring-1 ring-primary-200 hover:bg-primary-50 transition-colors dark:text-primary-300 dark:ring-primary-800/60 dark:hover:bg-gray-800"
                  >
                    Get in touch
                    <svg className="ml-2 h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                    </svg>
                  </button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero
