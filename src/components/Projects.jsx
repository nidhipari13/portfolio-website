import React, { useState } from 'react'
import Reveal from './Reveal'
import portfolio from '../assets/portfolio.png';
import ecomm from '../assets/ecomm.png';
import resturant from '../assets/resturant.png';
import foodweb from '../assets/foodweb.png';
import trafficmanag from '../assets/trafficmanag.png';
import shoWeb from '../assets/shoWeb.png';



const IMG = {
  one: portfolio,
  two: ecomm,
  three: resturant,
  four: foodweb,
  five: trafficmanag,
  six: shoWeb,
}

const projects = [
  {
    title: 'Portfolio Website',
    description: 'Personal portfolio built with React + Vite + Tailwind, smooth scroll and subtle motion.',
    image: IMG.one,
    tech: ['React', 'Vite', 'Tailwind'],
    live: 'https://magnificent-sunburst-657d6f.netlify.app/',
    code: 'https://github.com/nidhipari13/portfolio-website.git',
  },
  {
    title: 'E-commerce UI',
    description: 'Product listing, filters, and cart UI with responsive grid and animations.',
    image: IMG.two,
    tech: ['React', 'Vite', 'Tailwind'],
    live: 'https://velvety-salamander-9f7aa4.netlify.app',
    code: 'https://github.com/nidhipari13/ecommerce-website.git',
  },
  {
    title: 'Restaurant Website',
    description: 'Modern restaurant website with menu, reservations, and reviews.',
    image: IMG.three,
    tech: ['HTML', 'CSS', 'Javascript'],
    live: 'https://vocal-parfait-4080fc.netlify.app/',
    code: 'https://github.com/nidhipari13/restaurantWeb.git',
  },
  {
    title: 'For a Street Food Site',
    description: 'A delicious journey through flavors, recipes, and food experiences.',
    image: IMG.four,
    tech: ['React', 'Vite', 'Tailwind'],
    live: 'https://68cefdbe800311eba8a831fc--imaginative-cat-176a0a.netlify.app/',
    code: 'https://github.com/nidhipari13/FoodWeb.git',
  },
  {
    title: 'Traffic Management System',
    description: 'Real-time traffic monitoring and management for safer, smoother, and smarter roads.',
    image: IMG.five,
    tech: ['React', 'Vite', 'Tailwind', 'NodeJs'],
    live: 'https://68cefaa3e58c8506d49aa181--melodic-meringue-27cabd.netlify.app/',
    code: 'https://github.com/nidhipari13/traffic-management.git',
  },
   {
    title: 'Shoe Website Template',
    description: 'A stylish and modern shoe e-commerce website template.',
    image: IMG.six,
    tech: ['HTML', 'CSS', 'JavaScript'],
    live: 'https://playful-faloodeh-e103a9.netlify.app',
    code: 'https://github.com/nidhipari13/show-website.git',
  }
]

const Projects = () => {
  const [showAll, setShowAll] = useState(false)
  const visibleProjects = showAll ? projects : projects.slice(0, 3)

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-50 text-primary-700 ring-1 ring-primary-100 dark:bg-primary-900/30 dark:text-primary-300 dark:ring-primary-800/50">Projects</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">Selected work</h2>
          <p className="mt-3 max-w-2xl mx-auto text-gray-600 dark:text-gray-400">A few recent projects. I can share more on request.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((p, i) => (
            <Reveal key={p.title} delay={i * 90}>
              <article className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-md dark:bg-gray-800 dark:border-gray-700">
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{p.title}</h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{p.description}</p>

                  {/* Tech badges */}
                  {p.tech?.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {p.tech.map((t) => (
                        <span key={t} className="px-2.5 py-1 text-xs rounded-full bg-gray-100 text-gray-700 ring-1 ring-gray-200 dark:bg-gray-700/60 dark:text-gray-300 dark:ring-gray-700">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Actions */}
                  <div className="mt-4 flex items-center gap-3">
                    {p.live && (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center rounded-lg bg-primary-600 px-3 py-1.5 text-sm text-white hover:bg-primary-700 transition-colors"
                      >
                        Live
                        <svg className="ml-1 h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                          <path fillRule="evenodd" d="M12.293 2.293a1 1 0 011.414 0l4 4a1 1 0 01.293.707V8a1 1 0 11-2 0V7.414L9.707 13.707a1 1 0 01-1.414-1.414L14.586 6H12a1 1 0 110-2h.293z" clipRule="evenodd" />
                        </svg>
                      </a>
                    )}
                    {p.code && (
                      <a
                        href={p.code}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center rounded-lg px-3 py-1.5 text-sm text-primary-700 ring-1 ring-primary-200 hover:bg-primary-50 transition-colors dark:text-primary-300 dark:ring-primary-800/60 dark:hover:bg-gray-800"
                      >
                        Code
                        <svg className="ml-1 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                          <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => setShowAll((v) => !v)}
            className="inline-flex items-center rounded-lg px-4 py-2 text-sm text-primary-700 ring-1 ring-primary-200 hover:bg-primary-50 transition-colors dark:text-primary-300 dark:ring-primary-800/60 dark:hover:bg-gray-800"
          >
            {showAll ? 'View less' : 'View more'}
            <svg className="ml-2 h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
              <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.585l3.71-3.354a.75.75 0 111.02 1.1l-4.22 3.814a.75.75 0 01-1.02 0L5.25 8.29a.75.75 0 01-.02-1.08z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Projects
