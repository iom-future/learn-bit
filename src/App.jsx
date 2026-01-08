import {useRef, useState } from 'react'
import NavBar from './components/NavBar.jsx'
import AsideNavBar from './components/AsideNavBar.jsx'
import AsideNavProvider from './components/AsideNavContext.jsx'
import CalenderGenerator from './components/CalenderGenerator.jsx';
import DashboardIntro from './components/DashboardIntro.jsx';

function App() {

  //sign in logic for calculating streak
  
  let date = new Date();
  let todayDate = {
    date: date.getDate(),
    month: date.getMonth(),
    year: date.getFullYear()
  };
  let previousDate ={
      date: date.getDate() ,
      month: date.getMonth(),
      year: date.getFullYear()
    }
  

  // = ( todayDate.year>previousDate.year||
  // todayDate.month>=previousDate.month ) && todayDate.date >previousDate.date  ? true:false;
  // 
  
  //check if its a new day
const isNewDay =()=>{
   //if the current login year is greater than the previous one ; then its definetly a newDay
  if( todayDate.year>previousDate.year){
    return true;
  }else if( todayDate.year>=previousDate.year&& todayDate.month>previousDate.month){
      //if the current login year is equal to  the previous one, check the month, if the month is greater; then its defiently a newDay
   return true;
  }else if( (todayDate.year>=previousDate.year&& todayDate.month>=previousDate.month) && todayDate.date >previousDate.date ){
   // if the year and month are both equal check the date it self; if the current login date is greater than the previous; then its defiently a newDay
   return true;
  }else{
    return false;
  }
  
} 
console.log(isNewDay());
  //for toggling the nav bar
  let asideNavClass =useRef("hidden");

  //for toggle animation purpose; to get the componenet being animated thats by another component
  let asideNav = useRef(null);
   let streakNav = useRef(null);

  //for toggling the streak cakender
  let [isStreakCalendarOpen,setIsSreakCalendarOpen] = useState(false);
  return(
    <div className='app relative bg-[#fafaf9] w-full '>
      <AsideNavProvider asideNavClass={asideNavClass}>
          <AsideNavBar asideNav={asideNav}   />
          <NavBar asideNav={asideNav}  streakToggleMode={isStreakCalendarOpen} setStreakToggleMode={setIsSreakCalendarOpen}  streakRef={streakNav} />
      
      </AsideNavProvider>
  {isStreakCalendarOpen &&  <CalenderGenerator streakToggleMode={isStreakCalendarOpen} setStreakToggleMode={setIsSreakCalendarOpen} streakRef={streakNav} />}
       <DashboardIntro />
       
      
    </div>
  )
}

export default App
