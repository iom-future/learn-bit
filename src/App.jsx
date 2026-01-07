import {useRef, useState } from 'react'
import NavBar from './components/NavBar.jsx'
import AsideNavBar from './components/AsideNavBar.jsx'
import AsideNavProvider from './components/AsideNavContext.jsx'
import CalenderGenerator from './components/CalenderGenerator.jsx';

function App() {
  //for toggling the nav bar
  let asideNavClass =useRef("hidden");

  //for toggle animation purpose; to get the componenet being animated thats by another component
  let asideNav = useRef(null);
   let streakNav = useRef(null);

  //for toggling the streak cakender
  let [isStreakCalendarOpen,setIsSreakCalendarOpen] = useState(false);
  return(
    <div className='app relative bg-[#fafaf9] w-full p-3'>
      <AsideNavProvider asideNavClass={asideNavClass}>
          <AsideNavBar asideNav={asideNav}   />
          <NavBar asideNav={asideNav}  streakToggleMode={isStreakCalendarOpen} setStreakToggleMode={setIsSreakCalendarOpen}  streakRef={streakNav} />
        {isStreakCalendarOpen &&  <CalenderGenerator streakToggleMode={isStreakCalendarOpen} setStreakToggleMode={setIsSreakCalendarOpen} streakRef={streakNav} />}
      </AsideNavProvider>

       
       
      
    </div>
  )
}

export default App
