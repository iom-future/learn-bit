import {useRef } from 'react'
import NavBar from './components/NavBar.jsx'
import AsideNavBar from './components/AsideNavBar.jsx'
import AsideNavProvider from './components/AsideNavContext.jsx'
import CalenderGenerator from './components/CalenderGenerator.jsx';

function App() {
  let asideNavClass =useRef("hidden");
  let asideNav = useRef(null);
  return(
    <div className='app relative bg-[#fafaf9] w-full p-3'>
      <AsideNavProvider asideNavClass={asideNavClass}>
          <NavBar asideNav={asideNav}  />
          <AsideNavBar asideNav={asideNav} />
          <CalenderGenerator />
      </AsideNavProvider>

       
       
      
    </div>
  )
}

export default App
