import Calender from './calender';
import { useState } from 'react';


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
let [month,setMonth] = useState(dateDefault.getMonth());
//let day = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday","sunday"]
let userYear = dateDefault.getFullYear()
let userMonth = monthIndex[month]//||Object.keys(monthIndex)[dateDefault.getMonth()];
console.log(userMonth)
console.log(userYear)
let date = new Date(userYear,month,1);//year,month,day(1-31)
let dayOfWeek = date.getDay();  //gets the index of the day of the week sunday=0,monday=1 
 console.log(dayOfWeek);
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

  return (
    <section className='flex flex-col justify-center items-center size-[360px] mx-auto'>
        <div class="w-full text-center mb-4">
        <h2 className="month inline-block">{userMonth.charAt(0).toUpperCase()+userMonth.slice(1)}</h2>
        <h2 className="year inline-block">{userYear}</h2>
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

            <Calender calenderArray={getCalenderArray()} />
        </div>
    </section>
  )
}

export default CalenderGenerator