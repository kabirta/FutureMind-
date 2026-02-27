import { motion } from 'framer-motion'
import SectionLabel from '../ui/SectionLabel'
import ScrollReveal from '../ui/ScrollReveal'
import { services } from '../../data/services'

const ServiceCard = ({ service, featured = false }) => {
  const Icon = service.icon

  return (
    <motion.div
      className={`relative rounded-2xl border border-surface2 p-6 lg:p-8 cursor-default group ${
        featured ? 'bg-surface2' : 'bg-surface'
      }`}
      whileHover={{ backgroundColor: 'rgba(20, 24, 41, 0.9)' }}
      transition={{ duration: 0.2 }}
    >
      {/* Tag badge */}
      {service.tag && (
        <span className="absolute top-5 right-5 text-xs font-body font-medium px-2.5 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">
          {service.tag}
        </span>
      )}

      {/* Icon */}
      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/15 transition-colors">
        <Icon size={20} className="text-accent" />
      </div>

      {/* Content */}
      <h3 className="font-display font-bold text-lg text-text mb-2 tracking-tight">
        {service.title}
      </h3>
      <p className="font-body text-sm text-muted leading-relaxed">
        {service.desc}
      </p>

      {/* Hover line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-b-2xl" />
    </motion.div>
  )
}

const Services = () => {
  const featured = services.find((s) => s.featured)
  const rest = services.filter((s) => !s.featured)

  return (
    <section id="services" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="flex flex-col gap-4 mb-14">
            <SectionLabel>What we build</SectionLabel>
            <h2 className="font-display font-extrabold text-4xl lg:text-5xl text-text tracking-tight max-w-xl">
              Services built for the AI era
            </h2>
            <p className="font-body text-base text-muted max-w-lg leading-relaxed">
              Every service is accelerated by AI tooling — meaning faster delivery, lower cost, and higher quality than traditional agencies.
            </p>
          </div>
        </ScrollReveal>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Featured card — spans 2 cols */}
          {featured && (
            <ScrollReveal delay={0.05} className="lg:col-span-2">
              <ServiceCard service={featured} featured />
            </ScrollReveal>
          )}

          {/* Rest of cards */}
          {rest.map((service, index) => (
            <ScrollReveal key={service.id} delay={0.1 + index * 0.06}>
              <ServiceCard service={service} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
