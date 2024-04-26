import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar'
import Cards from './components/Cards'
import Chambre from './components/Chambre'
import Avis from './components/Avis'
import Footer from './components/Footer'
import Hero from './components/Hero'
import ReservationBar from './components/ReservationBar'


function App() {

  return (
    <Router>
      <div className='bg-white dark:bg-black'>
        <div className='sticky top-0 z-50'>
          <Navbar/>
          <Hero/>
          <Cards/>
          <Chambre/>
          <Avis/>
          <Footer/>
        </div>
      
      </div></Router>



  )
}

export default App
