import Calender from './calender';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' //components
import { faFire,faX,faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons' //icons
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const CalenderGenerator = () => {
    let dateDefault = new Date;

let monthIndex = {
    0: "january",
    1: "february",
    2: "march",
    3: "april",
    4: "may",
    5: "june",
    6: "july",
    7: "august",
    8: "september",
    9: "october",
    10: "november",
    11: "december"
}

//assign the month state that changes

let [calender,setCalender] = useState({month:dateDefault.getMonth(),year:dateDefault.getFullYear()});


let userMonth = monthIndex[calender.month]//||Object.keys(monthIndex)[dateDefault.getMonth()];
console.log(userMonth)
console.log(calender)
let date = new Date(calender.year,calender.month,1);//year,month,day(1-31)
let dayOfWeek = date.getDay();  //gets the index of the day of the week sunday=0,monday=1 
 console.log(dayOfWeek);
 console.log(`the month is ${calender.month}`)
//calender template
let thirtyDaysMonth= ["september","april","june","november"];
let thirtyDays = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,""];
let thirtyOneDays = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
let februaryDays = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
  15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
  27, 28, "", "", ""
];


    //append empty spaces for days(monday,tuesday...) with no number(1,2,3,4)
  function getCalenderArray() {
    let baseArray;

    if (thirtyDaysMonth.includes(userMonth)) {
        baseArray = [...thirtyDays]; 
    }else if(userMonth==="february"){
       baseArray = [...februaryDays]; 
    }
         else {
        baseArray = [...thirtyOneDays]; 
        console.log("31 month");
    }

    let i = 0;
   
    while (i < dayOfWeek) {
        baseArray.unshift("");
        i++;
    }

    return baseArray;
}
const nextMonth = () => {
  setCalender((currentCalender) => {
    //if its december, move to next year january
    if(currentCalender.month === 11){
      // set month to january and move to the next year
      return {...currentCalender,month:0,year:currentCalender.year + 1}; // Go to January
    }
    //move to the next month as usual
    return   {...currentCalender,month: currentCalender.month + 1};
  })
}

const previousMonth = () => {
   setCalender((currentCalender) => {
    //if its december, move to next year january
    if(currentCalender.month === 0){
      // set month to january and move to the next year
      return {...currentCalender,month:11,year:currentCalender.year - 1}; // Go to January
    }
    //move to the next month as usual
    return   {...currentCalender,month: currentCalender.month - 1};
  })
}
let [todayBookmark,setTodayBookMark] = useState({});
  return (
    <section className=' streak-calender flex flex-col size-[360px]  items-center h-screen gap-4 fixed w-full z-[200] top-0 right-0 bg-white'>
       <FontAwesomeIcon icon={faX} className='absolute right-4 top-4' />
      <header className='flex flex-col justify-center items-center  pt-8 p-2 bg-amber-200 w-full rounded-b-lg'>
         
           <FontAwesomeIcon icon={faFire} className=' streak-icon text-orange-500 text-6xl' />
           <h2 className='text-center text-5xl font-bold '> 5 </h2>
           <h3 className='font-semibold text-xl'>Days Streak</h3>
           <p className='text-slate-800'>Knowledge Ninja, keep going!</p>
      </header>
     
      <div className="streak-calender-wrapper border-1 w-[90%] border-gray-200 flex flex-col rounded-lg shadow-lg mx-auto p-2 justify-center items-center">

     
        <div className="w-full text-center mb-4 text-lg font-semibold flex gap-2 justify-between items-center  ">
          <FontAwesomeIcon icon={faChevronLeft} onClick={ previousMonth} />
          <div className="date-info-wrapper  flex gap-2">
              <h2 className="month inline-block ">{userMonth.charAt(0).toUpperCase()+userMonth.slice(1)}</h2>
              <h2 className="year inline-block ">{calender.year}</h2>
          </div>
          <FontAwesomeIcon icon={faChevronRight} onClick={nextMonth} />
        </div>
        
        <div className="flex w-full flex-col gap-2">

        
            <div className='grid grid-cols-7 text-center w-full'>
            <h3>S</h3>
            <h3>M</h3>
            <h3>T</h3>
            <h3>W</h3>
            <h3>T</h3>
            <h3>F</h3>
            <h3>S</h3>
            </div>

            <Calender calenderArray={getCalenderArray()} presentDay={dateDefault.getDate()} presentMonth={dateDefault.getMonth()} userCalendarMonth={calender.month} userCalendarYear={calender.year} presentYear={dateDefault.getFullYear()} />
        </div>
      </div>

      <div className='w-full p-3'>
        <h3 className='text-xl font-semibold text-left'>Today's Bookmarks</h3>
        <article>
          {!(todayBookmark.length>0)?<h5 className='text-center mt-2 text-gray-700'>No Bookmark today</h5>: todayBookmark.map((bookmark)=>(
            <div key={bookmark.id}></div>
            ))}
        </article>
      </div>
    </section>
  )
}

export default CalenderGenerator