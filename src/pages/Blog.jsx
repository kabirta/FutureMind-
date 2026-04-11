import { Link } from 'react-router-dom'

const Blog = () => (
  <main className="theme-page min-h-screen flex items-center justify-center pt-16 px-4">
    <div className="theme-page-panel text-center rounded-lg px-6 py-10 sm:px-10">
      <span className="section-label mb-4 block">Blog</span>
      <h1 className="font-display font-extrabold text-4xl lg:text-6xl text-text tracking-tight mb-4">
        Insights, coming soon.
      </h1>
      <p className="font-body text-base text-muted max-w-md mx-auto mb-8">
        We're working on articles about AI-powered development, our workflow, and industry trends.
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

export default Blog
