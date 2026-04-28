import { Link, useLocation, useNavigate } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'

const footerLinks = {
  Services: [
    { label: 'AI Websites', href: '#services' },
    { label: 'WordPress Websites', href: '#services' },
    { label: 'Shopify Websites', href: '#services' },
    { label: 'Mobile Apps', href: '#services' },
    { label: 'Web Apps & SaaS', href: '#services' },
    { label: 'AI Chatbots', href: '#services' },
    { label: 'UI/UX Design', href: '#services' },
    { label: 'Graphic Design', href: '#services' },
  ],
  Company: [
    { label: 'About', href: '/about' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Our Team', href: '/our-team' },
    { label: 'Blog', href: '/blog' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#contact' },
  ],
  'Tech Stack': [
    { label: 'React & Next.js', href: '#tech-stack' },
    { label: 'React Native', href: '#tech-stack' },
    { label: 'Supabase', href: '#tech-stack' },
    { label: 'OpenAI & Claude', href: '#tech-stack' },
    { label: 'Figma', href: '#tech-stack' },
  ],
}

const FooterLogo = () => (
  <Link to="/" className="inline-flex items-center" aria-label="CodeFair home">
    <img
      src="/logo.png"
      alt="CodeFair"
      className="h-10 w-auto object-contain sm:h-12"
    />
  </Link>
)

const Footer = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const handleClick = (event, link) => {
    if (!link.href.startsWith('#')) return
    event.preventDefault()

    const id = link.href.replace('#', '')
    if (location.pathname !== '/') {
      navigate('/')
      window.setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 70)
      return
    }

    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative overflow-hidden border-t border-cyan-300/10 bg-[#030712]">
      <div className="absolute inset-0 network-bg opacity-45" aria-hidden="true" />
      <div className="section-inner py-14 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_2fr]">
          <div>
            <FooterLogo />
            <p className="mt-5 max-w-sm font-body text-sm leading-7 text-slate-400">
              AI-powered web & mobile development studio. We build digital products 5× faster, 60% cheaper — without sacrificing quality.
            </p>
            <div className="mt-6 flex gap-2">
              {[
                { icon: FaXTwitter, label: 'Twitter' },
                { icon: FaLinkedinIn, label: 'LinkedIn' },
              ].map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href="/"
                    onClick={(event) => event.preventDefault()}
                    className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-slate-300 transition-colors hover:border-cyan-300/40 hover:text-cyan-100"
                    aria-label={social.label}
                  >
                    <Icon size={16} />
                  </a>
                )
              })}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="font-display text-sm font-bold uppercase text-white">{title}</h3>
                <ul className="mt-5 space-y-3">
                  {links.map((link) => {
                    const content = (
                      <>
                        {link.label}
                        <ArrowUpRight size={13} />
                      </>
                    )

                    return (
                      <li key={link.label}>
                        {link.href.startsWith('/') ? (
                          <Link
                            to={link.href}
                            className="inline-flex items-center gap-1 font-body text-sm text-slate-400 transition-colors hover:text-cyan-100"
                          >
                            {content}
                          </Link>
                        ) : (
                          <a
                            href={link.href}
                            onClick={(event) => handleClick(event, link)}
                            className="inline-flex items-center gap-1 font-body text-sm text-slate-400 transition-colors hover:text-cyan-100"
                          >
                            {content}
                          </a>
                        )}
                      </li>
                    )
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-body text-sm text-slate-500">
            © {new Date().getFullYear()} CodeFair Studio. All rights reserved.
          </p>
          <p className="font-body text-sm text-slate-500">
            Built with AI. Shipped with care.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
