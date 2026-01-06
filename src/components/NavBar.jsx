import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' //components
import { faBars,faFire,faMoon,faSun,faBookmark } from '@fortawesome/free-solid-svg-icons' //icons
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef,useContext } from 'react'
import { AsideNavContext } from './AsideNavContext'
function NavBar({asideNav}) {
  let asideNavClass =useContext(AsideNavContext);
    useGSAP(()=>{
        gsap.to(".streak-icon",{
            y:-5,
            yoyo: true,
            repeat: 3,
           
        })
    },[]);

    //open the aside nav bar
   const toggleAsideNav=()=>{
        asideNav.current.classList.toggle(asideNavClass.current);
             //animation when opening
                gsap.fromTo(asideNav.current,{opacity:0,x:-30}, {
                    duration: 0.8,
                    opacity: 1,
                    x:0,
                    ease: "power1.out",
                });
            
    }
  return (
    <nav className='flex justify-between items-center bg-slate-200/80 p-3 rounded-full border-t-2 border-white border-b-2  backdrop-blur-md'>
      <FontAwesomeIcon icon={faBars} onClick={toggleAsideNav} />
       
        <div className="streak-counter justify-center w-[70%] items-center gap-2 flex">
           
            <div className="progress-bar-bg h-[8px] rounded-lg w-[70%] bg-gray-300">
                <div className={`progress-bar-fill h-full w-[10%] rounded-lg bg-[#6b3e8f]`}></div>
            </div> <div className='flex items-center gap-1'>
                 <FontAwesomeIcon icon={faBookmark} className='text-xs text-gray-500' />
                 <p className='text-sm '> <span className="current-bookmark-num text-[#6b3e8f] font-bold text-base">1</span>/5</p></div>
        </div>


    <div className="left-nav-icons  flex gap-2 items-center">
            <FontAwesomeIcon icon={faFire} className=' streak-icon text-orange-500' />
            <div className="theme-toggle-icons">
                <FontAwesomeIcon icon={faMoon} className="hidden" />
              <FontAwesomeIcon icon={faSun}  />
            </div>
             
        </div>
    </nav>
  )
}

export default NavBar
