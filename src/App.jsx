import './App.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Services from './components/Services/Services'
import Qualification from './components/Qualification/Qualification'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

import 'remixicon/fonts/remixicon.css'
import 'boxicons';
import 'aos/dist/aos.css';
import Aos from 'aos';
import { useEffect } from 'react'


function App() {

  useEffect(() => {
    Aos.init();
  }, [])

  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
