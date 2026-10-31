import About from './components/About'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Internships from './components/Internships'
import Leadership from './components/Leadership'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import SoftSkills from './components/SoftSkills'
import TechnicalSkills from './components/TechnicalSkills'
import { internshipsList, leadershipList } from './data/portfolioData'

export default function App() {
  const hasInternships = Array.isArray(internshipsList) && internshipsList.length > 0
  const hasLeadership = Array.isArray(leadershipList) && leadershipList.length > 0

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <TechnicalSkills />
      <Projects />
      {hasInternships && <Internships />}
      {hasLeadership && <Leadership />}
      <SoftSkills />
      <Footer />
    </>
  )
}
