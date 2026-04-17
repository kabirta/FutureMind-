import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import SectionLabel from '../ui/SectionLabel'
import ScrollReveal from '../ui/ScrollReveal'
import { services } from '../../data/services'

const ServiceCard = ({ service, featured = false }) => {
  const Icon = service.icon

  return (
    <motion.article
      className={`group relative h-full overflow-hidden rounded-lg border p-6 backdrop-blur-xl transition-colors duration-300 hover:border-cyan-300/45 ${
        featured
          ? 'border-cyan-300/28 bg-cyan-300/[0.065] shadow-[0_0_70px_rgb(34_211_238_/_0.14)] lg:p-8'
          : 'border-cyan-300/12 bg-white/[0.035] lg:p-8'
      }`}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/45 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      {service.tag && (
        <span className="absolute right-5 top-5 rounded-lg border border-cyan-300/25 bg-cyan-300/10 px-2.5 py-1 font-body text-xs font-semibold text-cyan-100">
          {service.tag}
        </span>
      )}

      <div className="mb-6 flex items-start justify-between gap-4">
        <span className="grid h-12 w-12 place-items-center rounded-lg border border-cyan-300/18 bg-cyan-300/10 text-cyan-100 shadow-[0_0_28px_rgb(34_211_238_/_0.14)]">
          <Icon size={22} />
        </span>
        <ArrowUpRight
          size={18}
          className="text-slate-500 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-cyan-200"
        />
      </div>
      <h3 className="font-display text-xl font-bold text-white">{service.title}</h3>
      <p className="mt-3 font-body text-sm leading-7 text-slate-400">{service.desc}</p>
    </motion.article>
  )
}

const Services = () => {
  const featured = services.find((s) => s.featured)
  const rest = services.filter((s) => !s.featured)

  return (
    <section id="services" className="section-shell bg-[#050b1a]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_8%,rgb(34_211_238_/_0.12),transparent_22rem),radial-gradient(circle_at_82%_18%,rgb(48_164_255_/_0.1),transparent_26rem)]" aria-hidden="true" />
      <div className="section-inner">
        <ScrollReveal>
          <div className="mb-14 max-w-3xl">
            <SectionLabel>What we build</SectionLabel>
            <h2 className="mt-5 font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              Services built for the AI era
            </h2>
            <p className="mt-5 max-w-2xl font-body text-base leading-8 text-slate-400">
              Every service is accelerated by AI tooling — meaning faster delivery, lower cost, and higher quality than traditional agencies.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {featured && (
            <ScrollReveal delay={0.05} className="lg:col-span-2">
              <ServiceCard service={featured} featured />
            </ScrollReveal>
          )}

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
