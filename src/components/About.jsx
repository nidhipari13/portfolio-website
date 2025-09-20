import React from 'react'
import profile from '../assets/my-img.png'
import Reveal from './Reveal'
import { useSpring, animated, config } from '@react-spring/web'

const About = () => {
  // Entrance animation: fade in + scale up + slight rotation
  const mountSpring = useSpring({
    from: { opacity: 0, scale: 0.8, rotateZ: -5 },
    to: { opacity: 1, scale: 1, rotateZ: 0 },
    config: config.wobbly,
  })

  // Hover animation: 3D tilt + wobble + scale
  const [hoverSpring, api] = useSpring(() => ({
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: '0deg',
    skewY: '0deg',
    config: { mass: 1, tension: 300, friction: 15 },
  }))

  // Handlers for mouse move to create tilt effect
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left // x position within element
    const y = e.clientY - rect.top // y position within element
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    // Calculate rotation relative to center (max 15deg)
    const rotateX = ((y - centerY) / centerY) * 15 * -1 // invert rotation
    const rotateY = ((x - centerX) / centerX) * 15

    // Skew for extra wobble effect (max 5deg)
    const skewX = ((x - centerX) / centerX) * 5 + 'deg'
    const skewY = ((y - centerY) / centerY) * 5 + 'deg'

    api.start({ rotateX, rotateY, scale: 1.05, skewX, skewY })
  }

  const handleMouseLeave = () => {
    api.start({ rotateX: 0, rotateY: 0, scale: 1, skewX: '0deg', skewY: '0deg' })
  }

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-50 text-primary-700 ring-1 ring-primary-100 dark:bg-primary-900/30 dark:text-primary-300 dark:ring-primary-800/50">
            About
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            A bit about me
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
            Frontend-focused developer crafting clean, accessible UIs with React, Vite, and Tailwind.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Image side */}
          <Reveal>
            <animated.div
              style={{
                ...mountSpring,
                transform: mountSpring.scale
                  .to((s) => `scale(${s})`)
                  .to((scale) =>
                    hoverSpring.rotateX
                      .to((rx) => `rotateX(${rx}deg)`)
                      .to((rotX) =>
                        hoverSpring.rotateY
                          .to((ry) => `rotateY(${ry}deg)`)
                          .to((rotY) =>
                            hoverSpring.skewX
                              .to((skX) =>
                                hoverSpring.skewY.to(
                                  (skY) =>
                                    `${scale} ${rotX} ${rotY} skewX(${skX}) skewY(${skY})`
                                )
                              )
                          )
                      )
                  ),
                opacity: mountSpring.opacity,
                willChange: 'transform',
                cursor: 'pointer',
              }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative rounded-3xl overflow-hidden border border-gray-100 bg-white shadow-lg ring-1 ring-black/5 dark:bg-gray-800 dark:border-gray-700 dark:ring-white/5 max-w-[18rem] sm:max-w-[20rem] md:max-w-[22rem] mx-auto w-full"
            >
              <img
                src={profile}
                alt="Profile"
                className="w-full h-80 sm:h-96 md:h-[26rem] object-cover object-center"
                draggable={false}
              />
            </animated.div>
          </Reveal>

          {/* Text side */}
          <Reveal delay={100}>
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white">
                Aspiring DevOps Engineer | Front-End Developer
              </h3>
              <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                Motivated and detail-oriented DevOps Engineer in training with a solid foundation in front-end development and a
                passion for automation, CI/CD, containerization, and cloud technologies. Demonstrates hands-on experience with
                modern DevOps tools and practices through academic projects. Eager to contribute technical skills and a growth
                mindset to a dynamic DevOps team.
              </p>

              {/* CTA row */}
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="../assets/resume.pdf"
                  download
                  className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-primary-600 to-primary-500 px-4 py-2 text-white shadow-sm hover:from-primary-700 hover:to-primary-600 transition-colors"
                >
                  Download CV
                  <svg
                    className="ml-2 h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                  </svg>
                </a>
              </div>

              <div className="mt-6 grid sm:grid-cols-3 gap-4">
                <div className="rounded-xl border border-gray-100 bg-white p-4 text-center shadow-sm hover:shadow-md transition-shadow dark:bg-gray-800 dark:border-gray-700">
                  <div className="mx-auto mb-2 h-8 w-8 rounded-lg bg-primary-100 text-primary-700 flex items-center justify-center dark:bg-primary-900/40 dark:text-primary-300">
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M6 2a1 1 0 00-1 1v2H4a2 2 0 00-2 2v2a1 1 0 001 1h1v5a2 2 0 002 2h2a1 1 0 001-1v-1h2v1a1 1 0 001 1h2a2 2 0 002-2v-5h1a1 1 0 001-1V7a2 2 0 00-2-2h-1V3a1 1 0 00-1-1H6z" />
                    </svg>
                  </div>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">5+</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Projects</p>
                </div>
                <div className="rounded-xl border border-gray-100 bg-white p-4 text-center shadow-sm hover:shadow-md transition-shadow dark:bg-gray-800 dark:border-gray-700">
                  <div className="mx-auto mb-2 h-8 w-8 rounded-lg bg-primary-100 text-primary-700 flex items-center justify-center dark:bg-primary-900/40 dark:text-primary-300">
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M3 3h7v7H3z" />
                      <path d="M14 3h7v7h-7z" />
                      <path d="M14 14h7v7h-7z" />
                      <path d="M3 14h7v7H3z" />
                    </svg>
                  </div>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">React</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Vite + Tailwind</p>
                </div>
                <div className="rounded-xl border border-gray-100 bg-white p-4 text-center shadow-sm hover:shadow-md transition-shadow dark:bg-gray-800 dark:border-gray-700">
                  <div className="mx-auto mb-2 h-8 w-8 rounded-lg bg-primary-100 text-primary-700 flex items-center justify-center dark:bg-primary-900/40 dark:text-primary-300">
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M12 20l9-5-9-5-9 5 9 5z" />
                      <path d="M12 12l9-5-9-5-9 5 9 5z" />
                    </svg>
                  </div>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">UI</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Subtle animations</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default About
