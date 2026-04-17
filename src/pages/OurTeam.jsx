import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

const teamMembers = [
  {
    name: 'Aarav Mehta',
    role: 'Lead designer',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80',
    bio: 'Aarav shapes the first pass of every product: story, structure, and the visual system that keeps each screen feeling calm, useful, and sharp.',
    socials: ['x', 'ig', 'in'],
  },
  {
    name: 'Riya Kapoor',
    role: 'Full stack developer',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80',
    bio: 'Riya turns prototypes into fast, maintainable applications, with a focus on clean frontends, reliable APIs, and launch-ready details.',
    socials: ['gh', 'in'],
  },
  {
    name: 'Neel Banerjee',
    role: 'AI product engineer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80',
    bio: 'Neel builds the AI workflows behind CodeFair projects, from agents and retrieval flows to practical automations teams can use every day.',
    socials: ['ai', 'x', 'in'],
  },
  {
    name: 'Sana Roy',
    role: 'Project strategist',
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=900&q=80',
    bio: 'Sana keeps scope, timeline, and client goals aligned, making sure every sprint produces something visible and useful.',
    socials: ['mail', 'in'],
  },
]

const socialPositions = [
  'left-1 top-10',
  'right-0 top-16',
  'left-7 bottom-8',
]

const TeamSocial = ({ label, index }) => (
  <a
    href="/"
    onClick={(event) => event.preventDefault()}
    className={`absolute ${socialPositions[index] || 'right-8 bottom-6'} flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-300/18 bg-[#071126]/90 font-body text-xs font-bold uppercase text-cyan-100 shadow-[0_0_24px_rgb(34_211_238_/_0.14)] backdrop-blur-xl transition-transform duration-200 hover:-translate-y-0.5`}
    aria-label={`${label} profile`}
  >
    {label}
  </a>
)

const TeamMember = ({ member, index }) => {
  const isReverse = index % 2 === 1

  return (
    <section className="border-t border-cyan-300/10 py-16 lg:py-20">
      <div className="section-inner grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <div className={`${isReverse ? 'lg:order-2 lg:pl-10' : 'lg:pr-10'}`}>
          <p className="font-body text-xs font-semibold uppercase text-cyan-200">{member.role}</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            {member.name}
          </h2>
          <p className="mt-5 max-w-md font-body text-sm leading-7 text-slate-400">
            {member.bio}
          </p>
          <Link
            to="/#contact"
            className="mt-7 inline-flex items-center gap-2 rounded-lg border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 font-body text-sm font-semibold text-cyan-100 transition-colors duration-200 hover:border-cyan-300/50"
          >
            Work with {member.name.split(' ')[0]} <ArrowUpRight size={15} />
          </Link>
        </div>

        <div className={`${isReverse ? 'lg:order-1' : ''} flex justify-center`}>
          <div className="relative w-80 max-w-full">
            <div className="aspect-square overflow-hidden rounded-full bg-gradient-to-br from-cyan-300 via-blue-500 to-violet-500 p-[2px] shadow-[0_0_60px_rgb(34_211_238_/_0.2)]">
              <img
                src={member.image}
                alt={member.name}
                className="h-full w-full rounded-full object-cover grayscale"
                loading={index === 0 ? 'eager' : 'lazy'}
              />
            </div>
            {member.socials.map((social, socialIndex) => (
              <TeamSocial key={social} label={social} index={socialIndex} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const OurTeam = () => (
  <main className="relative min-h-screen overflow-hidden bg-[#030712] pt-24">
    <div className="absolute inset-0 cyber-grid opacity-35" aria-hidden="true" />
    <section className="relative border-b border-cyan-300/10 px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <p className="font-body text-xs font-semibold uppercase text-cyan-200">Our team</p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-extrabold leading-tight text-white sm:text-6xl">
          Small team, senior craft, serious shipping pace.
        </h1>
        <p className="mt-6 max-w-2xl font-body text-base leading-8 text-slate-400">
          Meet the CodeFair crew behind strategy, design, engineering, and AI product delivery.
        </p>
      </div>
    </section>

    {teamMembers.map((member, index) => (
      <TeamMember key={member.name} member={member} index={index} />
    ))}
  </main>
)

export default OurTeam
