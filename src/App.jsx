import { useState } from 'react'
import NavBar from './components/NavBar.jsx'
import AsideNavBar from './components/AsideNavBar.jsx'

function App() {
  return(
    <div className='app relative bg-[#fafaf9] w-full p-3'>
      <NavBar />
      <AsideNavBar/>
    </div>
  )
}

export default App
