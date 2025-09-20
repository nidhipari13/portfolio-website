import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useState } from 'react'

function Navbar() {
  const [open, setOpen] = useState(false)
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ]

  const handleNav = (id) => {
    document.querySelector(`#${id}`)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <button onClick={() => handleNav('home')} className="text-xl font-bold text-primary-700">NidhiParihar</button>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="md:hidden">
          <button
            onClick={() => setOpen((v) => !v)}
            className="p-2 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white/90">
          <div className="px-4 py-2 flex flex-col">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="w-full text-left px-2 py-3 text-gray-700 hover:text-primary-600"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
