import { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import CursorGlow from './components/ui/CursorGlow'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const CaseStudies = lazy(() => import('./pages/CaseStudies'))
const Blog = lazy(() => import('./pages/Blog'))
const OurTeam = lazy(() => import('./pages/OurTeam'))

const PageLoader = () => (
  <div className="flex min-h-screen items-center justify-center bg-bg">
    <div className="h-9 w-9 rounded-full border-2 border-cyan-300 border-t-transparent shadow-[0_0_28px_rgb(34_211_238_/_0.45)] animate-spin" />
  </div>
)

function App() {
  return (
    <BrowserRouter>
      <CursorGlow />
      <Navbar />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  )
}

export default App
