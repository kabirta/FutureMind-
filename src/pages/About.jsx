import { Link } from 'react-router-dom'

const About = () => (
  <main className="min-h-screen flex items-center justify-center pt-16">
    <div className="text-center px-4">
      <span className="section-label mb-4 block">About us</span>
      <h1 className="font-display font-extrabold text-4xl lg:text-6xl text-text tracking-tight mb-4">
        Our story, coming soon.
      </h1>
      <p className="font-body text-base text-muted max-w-md mx-auto mb-8">
        The About page is under construction. In the meantime, get to know us through our work.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 font-body text-sm text-accent hover:underline"
      >
        ← Back to home
      </Link>
    </div>
  </main>
)

export default About
