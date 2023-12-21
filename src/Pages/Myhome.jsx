import React from 'react'
import Header from '../Composants/Header'
import { Route, Routes } from 'react-router-dom'
import About from '../Composants/About'


const Myhome = () => {
  return (
  <div>
      <Header />
      <Routes>
          <Route path='/about' element={<About />}/>
      </Routes>
  </div>
  )
}

export default Myhome