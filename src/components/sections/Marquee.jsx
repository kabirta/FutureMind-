const marqueeItems = [
  'Next.js', 'React Native', 'Flutter', 'Supabase', 'OpenAI API',
  'Claude API', 'Tailwind CSS', 'Firebase', 'Vercel', 'PostgreSQL',
  'Node.js', 'Swift', 'Kotlin', 'TypeScript', 'Figma',
]

const MarqueeItem = ({ label }) => (
  <span className="flex items-center gap-3 px-6 whitespace-nowrap font-body text-sm font-medium text-muted">
    <span className="w-1.5 h-1.5 rounded-sm bg-accent flex-shrink-0" />
    {label}
  </span>
)

const Marquee = () => {
  const doubled = [...marqueeItems, ...marqueeItems]

  return (
    <div className="theme-marquee relative bg-surface border-y border-surface2 py-4 overflow-hidden">
      {/* Left fade */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none" />
      {/* Right fade */}
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none" />

      <div className="marquee-track">
        {doubled.map((item, i) => (
          <MarqueeItem key={`${item}-${i}`} label={item} />
        ))}
      </div>
    </div>
  )
}

export default Marquee
