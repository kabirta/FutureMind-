import { Link } from 'react-router-dom'

const footerLinks = {
  Services: [
    { label: 'AI Websites', href: '#services' },
    { label: 'Mobile Apps', href: '#services' },
    { label: 'Web Apps & SaaS', href: '#services' },
    { label: 'AI Chatbots', href: '#services' },
    { label: 'UI/UX Design', href: '#services' },
  ],
  Company: [
    { label: 'About', href: '/about' },
    { label: 'Case Studies', href: '/case-studies' },
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

const Footer = () => {
  const handleHashClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      const el = document.getElementById(href.replace('#', ''))
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-surface border-t border-surface2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="font-display font-800 text-2xl text-text">
                Future<span className="text-accent">Mind</span>
              </span>
            </Link>
            <p className="font-body text-sm text-muted leading-relaxed max-w-xs">
              AI-powered web & mobile development studio. We build digital products 5× faster, 60% cheaper — without sacrificing quality.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-surface2 flex items-center justify-center text-muted hover:text-text hover:border-muted transition-colors"
                aria-label="Twitter"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-surface2 flex items-center justify-center text-muted hover:text-text hover:border-muted transition-colors"
                aria-label="LinkedIn"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-display font-700 text-sm text-text mb-4 tracking-wide">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) =>
                  link.href.startsWith('/') ? (
                    <li key={link.label}>
                      <Link
                        to={link.href}
                        className="font-body text-sm text-muted hover:text-text transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ) : (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        onClick={(e) => handleHashClick(e, link.href)}
                        className="font-body text-sm text-muted hover:text-text transition-colors cursor-pointer"
                      >
                        {link.label}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-surface2 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-sm text-muted">
            © {new Date().getFullYear()} FutureMind Studio. All rights reserved.
          </p>
          <p className="font-body text-sm text-muted">
            Built with AI. Shipped with care.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
