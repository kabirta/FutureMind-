import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import SectionLabel from '../ui/SectionLabel'
import ScrollReveal from '../ui/ScrollReveal'
import Button from '../ui/Button'
import { plans } from '../../data/pricing'

const PricingCard = ({ plan, index }) => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <ScrollReveal delay={index * 0.1}>
      <motion.div
        className={`relative h-full rounded-2xl border p-7 lg:p-8 flex flex-col ${
          plan.featured
            ? 'border-accent bg-gradient-to-b from-accent/5 to-transparent'
            : 'border-surface2 bg-surface'
        }`}
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Most Popular badge */}
        {plan.featured && (
          <div className="absolute -top-4 left-1/2 -translate-x-1/2">
            <span className="bg-accent text-bg text-xs font-body font-semibold px-4 py-1.5 rounded-full whitespace-nowrap">
              Most Popular
            </span>
          </div>
        )}

        {/* Plan name */}
        <p className="section-label mb-3">{plan.name}</p>

        {/* Price */}
        <div className="mb-2">
          <span className="font-display font-extrabold text-4xl lg:text-5xl text-text tracking-tight">
            {plan.price}
          </span>
        </div>

        {/* Delivery badge */}
        <div className="mb-4">
          <span className="inline-flex items-center gap-1.5 text-xs font-body text-muted bg-surface2 border border-surface2 rounded-full px-3 py-1">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
            Delivered in {plan.delivery}
          </span>
        </div>

        {/* Description */}
        <p className="font-body text-sm text-muted mb-7 leading-relaxed">{plan.description}</p>

        {/* Features */}
        <ul className="space-y-3 mb-8 flex-1">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <Check size={15} className="text-accent flex-shrink-0 mt-0.5" />
              <span className="font-body text-sm text-text/80">{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Button
          variant={plan.featured ? 'primary' : 'outline'}
          size="md"
          className="w-full"
          onClick={scrollToContact}
        >
          {plan.price === 'Custom' ? 'Get a quote' : 'Get started'}
        </Button>
      </motion.div>
    </ScrollReveal>
  )
}

const Pricing = () => (
  <section id="pricing" className="py-24 lg:py-32">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <ScrollReveal>
        <div className="flex flex-col gap-4 mb-16 text-center">
          <div className="flex justify-center">
            <SectionLabel>Pricing</SectionLabel>
          </div>
          <h2 className="font-display font-extrabold text-4xl lg:text-5xl text-text tracking-tight">
            Transparent pricing, no surprises
          </h2>
          <p className="font-body text-base text-muted max-w-lg mx-auto leading-relaxed">
            Fixed-price packages that fit any stage. Need something custom? Let's talk.
          </p>
        </div>
      </ScrollReveal>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch mt-8">
        {plans.map((plan, index) => (
          <PricingCard key={plan.id} plan={plan} index={index} />
        ))}
      </div>

      {/* Money-back note */}
      <ScrollReveal delay={0.3}>
        <p className="text-center font-body text-sm text-muted mt-10">
          All projects include a satisfaction guarantee — if you're not happy after the first milestone, we'll refund you.
        </p>
      </ScrollReveal>
    </div>
  </section>
)

export default Pricing
