import { Link } from 'react-router-dom'

const Blog = () => (
  <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#030712] px-4 pt-24">
    <div className="absolute inset-0 cyber-grid opacity-45" aria-hidden="true" />
    <div className="glass-panel relative rounded-lg px-6 py-10 text-center sm:px-10">
      <span className="section-label mb-4">Blog</span>
      <h1 className="mb-4 font-display text-4xl font-extrabold leading-tight text-white lg:text-6xl">
        Insights, coming soon.
      </h1>
      <p className="mx-auto mb-8 max-w-md font-body text-base leading-8 text-slate-400">
        We're working on articles about AI-powered development, our workflow, and industry trends.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 font-body text-sm font-semibold text-cyan-100 hover:underline"
      >
        Back to home
      </Link>
    </div>
  </main>
)

export default Blog
