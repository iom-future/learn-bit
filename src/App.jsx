import { useState,useRef } from 'react'
import NavBar from './components/NavBar.jsx'
import AsideNavBar from './components/AsideNavBar.jsx'
import AsideNavProvider from './components/AsideNavContext.jsx'

function App() {
  let asideNavClass =useRef("hidden");
  let asideNav = useRef(null);
  return(
    <div className='app relative bg-[#fafaf9] w-full p-3'>
      <AsideNavProvider asideNavClass={asideNavClass}>
          <NavBar asideNav={asideNav}  />
          <AsideNavBar asideNav={asideNav} />
      </AsideNavProvider>

       
       
      
    </div>
  )
}

export default App
