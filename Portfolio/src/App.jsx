import React from 'react'
import Dashboard from './Components/Dashboard'
import { Routes, Route } from 'react-router-dom'
import About from './Components/About'
import MrketingService from './Components/MrketingService'
import Services from './Components/Services'
import Portfolio from './Components/Portfolio'
import Contactus from './Components/Contactus'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={ <Dashboard/>}/>
        <Route path='/about' element={ <About/>}/>
        <Route path='/services' element={ <Services/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/marketing' element={<MrketingService/>}/>
        <Route path='/contact'  element= {<Contactus/>}/>
      </Routes>
    </div>
  )
}

export default App
