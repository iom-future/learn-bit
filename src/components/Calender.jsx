const Calender = ({calenderArray,presentDay,presentMonth,userCalendarMonth,presentYear,userCalendarYear}) => {
  console.log("PRESENT year IS")
  console.log(presentYear);
  console.log(userCalendarYear)
  return (
    <div className="grid grid-cols-7  grid-rows-6 w-full h-full ">
        {calenderArray.map((calenderItem,index)=>(
            <div key={index} className={` ${(presentDay===calenderItem&&presentMonth===userCalendarMonth)&&presentYear===userCalendarYear?"bg-orange-500 rounded-full":""} text-center`} >{calenderItem}</div>
        ))}
    </div>
  )
}

export default Calender