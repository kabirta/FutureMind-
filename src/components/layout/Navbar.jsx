import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import useScrollSpy from '../../hooks/useScrollSpy'
import Button from '../ui/Button'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Tech Stack', href: '#tech-stack' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const activeSection = useScrollSpy(['services', 'process', 'pricing', 'tech-stack', 'contact'])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href) => {
    setIsOpen(false)
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'shadow-[0_4px_32px_rgba(0,0,0,0.4)]' : ''
      }`}
    >
      <nav className="bg-bg/80 backdrop-blur-xl border-b border-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <span className="font-display font-800 text-xl text-text">
                Nova<span className="text-accent">lith</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => {
                const sectionId = link.href.replace('#', '')
                const isActive = activeSection === sectionId
                return (
                  <button
                    key={link.label}
                    onClick={() => handleNavClick(link.href)}
                    className={`font-body text-sm transition-colors duration-200 cursor-pointer bg-transparent border-none ${
                      isActive ? 'text-accent' : 'text-muted hover:text-text'
                    }`}
                  >
                    {link.label}
                  </button>
                )
              })}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <Button
                variant="primary"
                size="sm"
                onClick={() => handleNavClick('#contact')}
              >
                Start a Project
              </Button>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden text-muted hover:text-text transition-colors p-1 bg-transparent border-none cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden overflow-hidden border-t border-surface"
            >
              <div className="px-4 py-6 flex flex-col gap-4 bg-bg/95 backdrop-blur-xl">
                {navLinks.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => handleNavClick(link.href)}
                    className="text-left font-body text-base text-muted hover:text-text transition-colors cursor-pointer bg-transparent border-none py-1"
                  >
                    {link.label}
                  </button>
                ))}
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => handleNavClick('#contact')}
                  className="mt-2 w-full"
                >
                  Start a Project
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}

export default Navbar
