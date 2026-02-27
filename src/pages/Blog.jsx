import { Link } from 'react-router-dom'

const Blog = () => (
  <main className="min-h-screen flex items-center justify-center pt-16">
    <div className="text-center px-4">
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
