import SectionLabel from '../ui/SectionLabel'
import ScrollReveal from '../ui/ScrollReveal'
import { IdentityCardBody, RevealCardContainer } from '../ui/animated-profile-card'
import { services } from '../../data/services'

const ServiceFace = ({ service, scheme = 'plain' }) => {
  const Icon = service.icon
  const isAccent = scheme === 'accented'

  return (
    <IdentityCardBody
      fullName={service.title}
      place={service.kicker}
      about={service.desc}
      avatarText={service.avatarText}
      avatarUrl=""
      scheme={scheme}
      displayAvatar={false}
      cardCss={isAccent ? { backgroundColor: 'var(--accent-color)' } : undefined}
      className={isAccent ? 'h-full bg-transparent' : 'h-full bg-[#020817]'}
      titleCss={{ lineHeight: 1.08 }}
      descClass={isAccent ? 'font-poppins font-semibold uppercase tracking-normal' : 'font-poppins font-semibold uppercase tracking-normal text-slate-500'}
      bioClass={isAccent ? 'font-poppins font-medium' : 'font-poppins font-medium text-slate-300'}
    >
      <div
        className={`absolute left-8 top-8 grid h-16 w-16 place-items-center rounded-full ${
          isAccent ? 'bg-white/18 text-white' : 'bg-white/[0.06] text-cyan-100'
        }`}
      >
        <Icon size={26} />
      </div>
      <div className={isAccent ? 'absolute inset-x-8 bottom-8 h-px bg-white/30' : 'absolute inset-x-8 bottom-8 h-px bg-cyan-200/20'} />
    </IdentityCardBody>
  )
}

const ServiceCard = ({ service }) => (
  <div className="group relative h-full rounded-3xl bg-[linear-gradient(135deg,rgb(0_62_203_/_0.92),rgb(34_211_238_/_0.72),rgb(1_30_98_/_0.92))] p-px shadow-[0_24px_90px_rgb(0_0_0_/_0.34)] transition-transform duration-300 hover:-translate-y-2">
    <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_20%_10%,rgb(220_232_255_/_0.5),transparent_8rem)] opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-60" />
    <RevealCardContainer
      accent={service.accent}
      textOnAccent="#ffffff"
      mutedOnAccent="rgba(255,255,255,0.82)"
      className="min-h-[360px] bg-[#020817]"
      base={<ServiceFace service={service} />}
      overlay={<ServiceFace service={service} scheme="accented" />}
    />
  </div>
)

const Services = () => (
  <section id="services" className="section-shell bg-[#050b1a]">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_12%,rgb(0_62_203_/_0.18),transparent_24rem),radial-gradient(circle_at_84%_18%,rgb(25_255_90_/_0.08),transparent_24rem),linear-gradient(180deg,#000713_0%,#03102c_100%)]" aria-hidden="true" />
    <div className="absolute inset-0 cyber-grid opacity-30" aria-hidden="true" />

    <div className="section-inner">
      <ScrollReveal>
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <SectionLabel>What we deliver</SectionLabel>
          <h2 className="font-yeseva mt-5 text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
            Premium digital services for faster business growth
          </h2>
          <p className="font-poppins mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-400">
            From brand visuals to cloud-ready software, we build the digital pieces your company needs to look sharper, operate better, and scale with confidence.
          </p>
        </div>
      </ScrollReveal>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
        {services.map((service, index) => (
          <ScrollReveal key={service.id} delay={index * 0.045}>
            <ServiceCard service={service} />
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
)

export default Services
