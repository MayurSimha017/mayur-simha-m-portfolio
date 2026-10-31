import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Internships from './components/Internships'
import Leadership from './components/Leadership'
import Navbar from './components/Navbar'
import Preloader from './components/Preloader'
import Projects from './components/Projects'
import Services from './components/Services'
import SoftSkills from './components/SoftSkills'
import TechnicalSkills from './components/TechnicalSkills'
import { internshipsList, leadershipList } from './data/portfolioData'

export default function App() {
  const hasInternships = Array.isArray(internshipsList) && internshipsList.length > 0
  const hasLeadership = Array.isArray(leadershipList) && leadershipList.length > 0

  return (
    <>
      <Preloader />
      <Navbar />
      <Hero />
      <About />
      <TechnicalSkills />
      <Services />
      <Projects />
      {hasInternships && <Internships />}
      {hasLeadership && <Leadership />}
      <SoftSkills />
      <Contact />
      <Footer />
    </>
  )
}
