import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' //components
import { faPen } from '@fortawesome/free-solid-svg-icons' //icons
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import profilePicture from "./../assets/download (4).jpg"
function DashboardIntro() {
    let [userProfile,setUserProfile]=useState({name:"User"})
  return (
    <div className=" rounded-b-xl">
        <div className={`dashboard-intro-wrapper w-full h-64 bg-cover bg-center pt-20 p-3   `}>
             <header>
                <h1 className="relative text-3xl ">Hey ,{userProfile.name} < FontAwesomeIcon icon={faPen} className="text-xs absolute top-0 pl-1" /> </h1>
                <p>Knowlegde ninja, ready to learn?</p>
            </header>

            <div className="random-fact bg-purple-400 h-24 rounded-lg p-2 px-3 mt-2">
                <h2 className="text-lg font-semibold text-white">Random Fact of the Day</h2>
                <article>
                    <p className="random-fact-text"></p>

                    <div className="fact-icon"></div>
                </article>
            </div>
        </div>
       
        
    </div>
  )
}

export default DashboardIntro