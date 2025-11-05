import React from 'react'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import Apicalling from './components/Apicalling'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div>
      <Header />
      {/* <Body  /> */}
      <Outlet />
      <Footer />
    </div>
  )
}

export default App