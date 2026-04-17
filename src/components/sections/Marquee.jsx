const marqueeItems = [
  'Next.js', 'React Native', 'Flutter', 'Supabase', 'OpenAI API',
  'Claude API', 'Tailwind CSS', 'Firebase', 'Vercel', 'PostgreSQL',
  'Node.js', 'Swift', 'Kotlin', 'TypeScript', 'Figma',
]

const MarqueeItem = ({ label }) => (
  <span className="flex items-center gap-3 whitespace-nowrap px-6 font-body text-sm font-medium text-slate-300">
    <span className="h-1.5 w-1.5 flex-shrink-0 rounded-sm bg-cyan-300 shadow-[0_0_14px_rgb(34_211_238_/_0.9)]" />
    {label}
  </span>
)

const Marquee = () => {
  const doubled = [...marqueeItems, ...marqueeItems]

  return (
    <div className="relative overflow-hidden border-y border-cyan-300/10 bg-[#030712]/80 py-4 backdrop-blur-xl">
      <div className="absolute bottom-0 left-0 top-0 z-10 w-24 bg-gradient-to-r from-[#030712] to-transparent" />
      <div className="absolute bottom-0 right-0 top-0 z-10 w-24 bg-gradient-to-l from-[#030712] to-transparent" />

      <div className="marquee-track">
        {doubled.map((item, i) => (
          <MarqueeItem key={`${item}-${i}`} label={item} />
        ))}
      </div>
    </div>
  )
}

export default Marquee
