import { useEffect, useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' //components
import { faBookmark, faBrain, faChevronLeft, faChevronRight, faHexagonNodesBolt, faMicrochip, faPen, faShare, faShareNodes} from '@fortawesome/free-solid-svg-icons' //icons
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import emote from "./../assets/download__4_-removebg-preview.png"
import DailyRandomFact from "./DailyRandomFact"
function DashboardIntro() {
    let [userProfile,setUserProfile]=useState({name:"User"});
   
  return (
    <div className="dashboard-intro rounded-b-xl">
        <div className={`dashboard-intro-wrapper w-full   pt-20 p-3   `}>
             <header className="flex items-center flex-col gap-2 bg-cover bg-[url(src/assets/blob-scene-haikei.png)] dark:bg-[url(src/assets/blob-scene-haikei1.png)]  p-2 rounded-lg">
             <div className="flex w-full justify-between ">
                   
                    <div className="p-2 ">
                    <h1 className="relative text-3xl dark:text-white sm:text-4xl">Hey ,<span className="font-bold ">{userProfile.name} </span> < FontAwesomeIcon icon={faPen} className="text-xs  absolute top-0 pl-1" /> </h1>
                    
                    
                    <p className="dark:text-white font-medium sm:text-lg">The Genius returns!</p>

                   
                    </div>

                    <div className="titile-box  border relative border-white w-[45%] bg-white/50 rounded-lg p-2 backdrop-blur-lg">
                        <div className="title flex items-center flex-col    ">
                            <div className="rounded-full p-2 absolute bottom-2 flex items-center justify-center ">
                                {/* < FontAwesomeIcon icon={faAtom} className="text-2xl text-amber-500" /> */}
                                   <img src={emote} alt="profile picture" className="size-24 object-contain rounded-full"/>
                            </div>
                       
                            <p className="text-purple-900  font-black italic absolute bottom-0 ">Low-Key Genius</p>
                        </div>
                    </div>
                </div>

                <div className="lever-bar-wrapper flex-col   w-full flex">
                    <div className="flex  items-center gap-2 ">
                    <p className="dark:text-white/90 font-medium ">Lvl <span className="text-lg font-medium"> {0}</span></p>
                    <div className="level-bar w-[85%] sm:w-[90%] bg-purple-400 h-[5px] rounded-full">
                        <div className="level-progress-bar w-[20%] bg-purple-900 h-full rounded-full"></div>
                    </div> 
                    
                    </div>
               
                    <p className="text-end text-sm font-medium dark:text-white/90">+ {250} xp</p>
                    
                </div>
            </header>
            <div className="filters mt-5 mb-5">
                <ul className="flex gap-3 items-center overflow-x-auto p-2">
                    <li className="text-2xl font-medium underline decoration-purple-500 decoration-wavy underline-offset-[5px] ">Facts</li>
                    <li className="text-lg decoration-purple-500 decoration-wavy underline-offset-[5px] ">Bible</li>
                    <li className="text-lg  decoration-purple-500 decoration-wavy underline-offset-[5px] ">Programming</li>
                    <li className="text-lg   decoration-purple-500 decoration-wavy underline-offset-[5px] ">Maths</li>
                    <li className="text-lg   decoration-purple-500 decoration-wavy underline-offset-[5px] "> Words</li>
                
                </ul>

                <select name="" className="border-2 p-2 border-purple-300 mt-2 rounded-full" id="">
                    <option value="">Study Mode</option>
                    <option value="">Practice Mode</option>
                </select>
            </div>
            <div className="fact-container bg-[#F5F5F7]  shadow-[2px_2px_0_0_rgb(168_85_247)] flex  border border-gray-400  min-h-[170px] rounded-lg p-2 px-3 mt-2">
                 
                <div className="fact-article-wrapper flex flex-col pt-3  gap-10 h-full w-full">
                   
                    
                    <article className="facts flex flex-col gap-8">
                       
                        <DailyRandomFact />
                        <div className="fact-icon-bottom flex  justify-around ">
                            <FontAwesomeIcon icon={faBookmark} className="text-gray-500 text-lg" />
                              <FontAwesomeIcon icon={faShareNodes} className="text-gray-500 text-lg" />
                               <FontAwesomeIcon icon={faMicrochip} className="text-amber-500 text-xl" />
                        </div>
                    </article>
                    <div className="card-control flex justify-between items-center">
                        <div className="move-left-container  flex size-10 items-center justify-center bg-purple-500 hover:shadow-lg shadow-purple-500  rounded-full p-2  ">
                        <FontAwesomeIcon icon={faChevronLeft} className="text-lg text-white" />
                    </div>
                    <div className="move-right-container flex size-10 items-center justify-center bg-purple-500 hover:shadow-lg shadow-purple-500 rounded-full p-2">
                       <FontAwesomeIcon icon={faChevronRight} className="text-lg text-white" />
                    </div>
                   
                    </div>
             
               
                </div>
            </div>
        </div>
       
        
    </div>
  )
}

export default DashboardIntro