import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import Button from '../ui/Button'
import ScrollReveal from '../ui/ScrollReveal'

const CTA = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative py-32 lg:py-40 overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to bottom, #0d1428, #060810)' }}
      />

      {/* Large radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(232,255,71,0.06) 0%, transparent 70%)',
        }}
      />

      {/* Grid */}
      <div className="absolute inset-0 grid-bg opacity-40" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <span className="section-label mb-6 block">Ready to build?</span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-7xl text-text tracking-tighter leading-tight mb-6">
            Ready to{' '}
            <span className="text-accent">launch</span>
            {' '}something great?
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="font-body text-base sm:text-lg text-muted max-w-lg mx-auto mb-10 leading-relaxed">
            Stop waiting. Start building. Our team is ready to turn your idea into a production-ready product — in days, not months.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" onClick={scrollToContact}>
              Start a project <ArrowRight size={16} />
            </Button>
            <Button variant="ghost" size="lg" onClick={scrollToPricing}>
              See pricing
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default CTA
