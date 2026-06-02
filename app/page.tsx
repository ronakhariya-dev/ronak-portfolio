import Nav from './components/Nav'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Expertise from './components/Expertise'
import Learnings from './components/Learnings'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Experience />
      <Projects />
      <Expertise />
      <Learnings />
      <Contact />
      <Footer />
    </main>
  )
}
