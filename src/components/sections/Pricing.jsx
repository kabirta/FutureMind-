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
      <motion.article
        className={`relative flex h-full flex-col rounded-lg border p-7 backdrop-blur-xl lg:p-8 ${
          plan.featured
            ? 'border-cyan-300/45 bg-cyan-300/[0.075] shadow-[0_0_70px_rgb(34_211_238_/_0.16)]'
            : 'border-white/10 bg-white/[0.035]'
        }`}
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        {plan.featured && (
          <div className="absolute -top-4 left-1/2 -translate-x-1/2">
            <span className="whitespace-nowrap rounded-lg border border-cyan-300/35 bg-cyan-300/15 px-4 py-1.5 font-body text-xs font-semibold text-cyan-100">
              Most Popular
            </span>
          </div>
        )}

        <p className="section-label mb-4">{plan.name}</p>
        {plan.price && (
          <div className="mb-2">
            <span className="font-display text-4xl font-extrabold text-white lg:text-5xl">
              {plan.price}
            </span>
          </div>
        )}

        <div className="mb-4">
          <span className="inline-flex items-center gap-1.5 rounded-lg border border-cyan-300/12 bg-white/[0.04] px-3 py-1 font-body text-xs text-slate-400">
            <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
            Delivered in {plan.delivery}
          </span>
        </div>

        <p className="mb-7 font-body text-sm leading-7 text-slate-400">{plan.description}</p>

        <ul className="mb-8 flex flex-1 flex-col gap-3">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <Check size={15} className="mt-0.5 flex-shrink-0 text-cyan-200" />
              <span className="font-body text-sm text-slate-300">{feature}</span>
            </li>
          ))}
        </ul>

        <Button
          variant={plan.featured ? 'primary' : 'outline'}
          size="md"
          className="w-full"
          onClick={scrollToContact}
        >
          {plan.price === 'Custom' ? 'Get a quote' : 'Get started'}
        </Button>
      </motion.article>
    </ScrollReveal>
  )
}

const Pricing = () => (
  <section id="pricing" className="section-shell bg-[#050b1a]">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_52%_0%,rgb(34_211_238_/_0.13),transparent_26rem)]" aria-hidden="true" />
    <div className="section-inner">
      <ScrollReveal>
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <SectionLabel>Pricing</SectionLabel>
          <h2 className="mt-5 font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            Transparent pricing, no surprises
          </h2>
          <p className="mx-auto mt-5 max-w-2xl font-body text-base leading-8 text-slate-400">
            Fixed-price packages that fit any stage. Need something custom? Let's talk.
          </p>
        </div>
      </ScrollReveal>

      <div className="mt-8 grid grid-cols-1 items-stretch gap-6 md:grid-cols-3">
        {plans.map((plan, index) => (
          <PricingCard key={plan.id} plan={plan} index={index} />
        ))}
      </div>

      <ScrollReveal delay={0.3}>
        <p className="mt-10 text-center font-body text-sm text-slate-400">
          All projects include a satisfaction guarantee — if you're not happy after the first milestone, we'll refund you.
        </p>
      </ScrollReveal>
    </div>
  </section>
)

export default Pricing
