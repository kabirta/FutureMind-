import Hero from '../components/sections/Hero'
import DigitalPartner from '../components/sections/DigitalPartner'
import Services from '../components/sections/Services'
import Process from '../components/sections/Process'
import Pricing from '../components/sections/Pricing'
import WaveStatement from '../components/sections/WaveStatement'
import WhyUs from '../components/sections/WhyUs'
import TechStack from '../components/sections/TechStack'
import CTA from '../components/sections/CTA'
import Contact from '../components/sections/Contact'

const Home = () => (
  <main>
    <Hero />
    <DigitalPartner />
    <Services />
    <Process />
    {/* <Pricing /> */}
    <WaveStatement />
    <WhyUs />
    <TechStack />
    <CTA />
    <Contact />
  </main>
)

export default Home
