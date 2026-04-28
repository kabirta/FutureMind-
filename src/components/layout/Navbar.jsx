import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Menu, Moon, Phone, Sun, X } from 'lucide-react'
import useScrollSpy from '../../hooks/useScrollSpy'
import Button from '../ui/Button'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '#services', sectionId: 'services' },
  { label: 'Portfolio', href: '/case-studies' },
  { label: 'Our Team', href: '/our-team' },
  { label: 'Lab', href: '#tech-stack', sectionId: 'tech-stack' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '#contact', sectionId: 'contact' },
]

const LogoMark = () => (
  <span className="relative z-10 flex h-9 items-center">
    <img src="/logo.png" alt="" className="h-8 w-auto object-contain sm:h-9" />
  </span>
)

const getInitialTheme = () => {
  if (typeof window === 'undefined') return 'dark'

  try {
    const requestedTheme = new URLSearchParams(window.location.search).get('theme')
    if (requestedTheme === 'light' || requestedTheme === 'dark') return requestedTheme

    const savedTheme = window.localStorage.getItem('codefair-theme')
    return savedTheme === 'light' ? 'light' : 'dark'
  } catch {
    return 'dark'
  }
}

const ThemeToggle = ({ theme, onToggle }) => {
  const isLight = theme === 'light'
  const Icon = isLight ? Moon : Sun
  const label = isLight ? 'Dark' : 'Light'

  return (
    <button
      type="button"
      onClick={onToggle}
      className="theme-toggle inline-flex h-10 min-w-10 items-center justify-center gap-2 rounded-lg border border-cyan-300/18 bg-white/[0.045] px-3 font-body text-sm font-semibold text-slate-200 backdrop-blur-xl transition-all duration-200 hover:border-cyan-300/45 hover:text-cyan-100"
      aria-label={`Switch to ${label.toLowerCase()} theme`}
      title={`Switch to ${label.toLowerCase()} theme`}
    >
      <Icon size={16} />
      <span className="hidden lg:inline">{label}</span>
    </button>
  )
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [theme, setTheme] = useState(getInitialTheme)
  const activeSection = useScrollSpy(['services', 'process', 'pricing', 'tech-stack', 'contact'], 140)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 14)
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.documentElement.dataset.theme = theme

    try {
      window.localStorage.setItem('codefair-theme', theme)
    } catch {
      // Theme persistence is optional.
    }
  }, [theme])

  const scrollToSection = (id) => {
    window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }, 70)
  }

  const handleNavClick = (link) => {
    setIsOpen(false)

    if (!link.href.startsWith('#')) {
      navigate(link.href)
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    const id = link.href.replace('#', '')

    if (location.pathname !== '/') {
      navigate('/')
      scrollToSection(id)
      return
    }

    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const isActive = (link) => {
    if (link.href === '/') return location.pathname === '/' && !activeSection
    if (link.sectionId) return location.pathname === '/' && activeSection === link.sectionId
    return location.pathname === link.href
  }

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))
  }

  return (
    <header className="fixed left-0 right-0 top-3 z-50 px-3 sm:top-5 sm:px-5">
      <nav
        className={`relative mx-auto flex max-w-7xl items-center justify-between overflow-hidden rounded-lg border px-3 py-2 backdrop-blur-2xl transition-all duration-300 sm:px-4 ${
          scrolled
            ? 'border-cyan-300/20 bg-[#030712]/78 shadow-[var(--shadow-nav)]'
            : 'border-white/10 bg-[#030712]/54 shadow-[0_0_35px_rgb(48_164_255_/_0.08)]'
        }`}
        aria-label="Primary navigation"
      >
        <div
          className="pointer-events-none absolute bottom-0 left-0 top-0 w-56 bg-[radial-gradient(circle_at_18%_50%,rgb(0_62_203_/_0.38),transparent_9rem),linear-gradient(90deg,rgb(0_62_203_/_0.18),transparent)]"
          aria-hidden="true"
        />

        <Link to="/" className="relative z-10 flex items-center gap-2" aria-label="CodeFair home">
          <LogoMark />
          <span className="font-display text-lg font-extrabold text-white sm:text-xl">
            Code<span>Fair</span>
          </span>
        </Link>

        <div className="relative z-10 hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <button
              key={link.label}
              type="button"
              onClick={() => handleNavClick(link)}
              className={`rounded-lg px-3 py-2 font-body text-sm font-medium transition-all duration-200 ${
                isActive(link)
                  ? 'bg-cyan-300/10 text-cyan-100 shadow-[inset_0_0_0_1px_rgb(103_232_249_/_0.18)]'
                  : 'text-slate-300 hover:bg-white/[0.05] hover:text-white'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="relative z-10 hidden items-center gap-3 md:flex">
          <div className="hidden items-center gap-2 font-body text-sm font-medium text-slate-300 lg:flex">
            <Phone size={15} className="text-cyan-200" />
            <span>+918013559045</span>
          </div>
          {/* <ThemeToggle theme={theme} onToggle={toggleTheme} /> */}
          <Button size="sm" onClick={() => handleNavClick({ href: '#contact', sectionId: 'contact' })}>
            Start a Project <ArrowUpRight size={15} />
          </Button>
        </div>

        <div className="relative z-10 flex items-center gap-2 md:hidden">
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-white"
            onClick={() => setIsOpen((current) => !current)}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mx-auto mt-3 max-w-7xl overflow-hidden rounded-lg border border-cyan-300/15 bg-[#030712]/92 backdrop-blur-2xl md:hidden"
            initial={{ opacity: 0, y: -8, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -8, height: 0 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex flex-col gap-1 p-3">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  type="button"
                  onClick={() => handleNavClick(link)}
                  className={`rounded-lg px-4 py-3 text-left font-body text-sm font-semibold transition-colors ${
                    isActive(link) ? 'bg-cyan-300/10 text-cyan-100' : 'text-slate-300 hover:bg-white/[0.06] hover:text-white'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <Button
                className="mt-2 w-full"
                onClick={() => handleNavClick({ href: '#contact', sectionId: 'contact' })}
              >
                Start a Project <ArrowUpRight size={15} />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
