import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Landing from '../../Components/Landing/Landing'
import Features from '../../Components/Features/Features'
import MainTitle from '../../Components/MainTitle/MainTitle'
import Services from '../../Components/Services/Services'
import Portfolio from '../../Components/Portfolio/Portfolio'
import About from '../../Components/About/About'
import Contact from '../../Components/Contact/Contact'
import Footer from '../../Components/Footer/Footer'

function Home() {
  return (
    <>
      <Navbar />
      <Landing />
      <Features />
      <Services />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </>
  )
}

export default Home