import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' //components
import { faX,faTrophy,faFire,faHome,faBookmark,faMoon,faSun } from '@fortawesome/free-solid-svg-icons' //icons
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import profilePicture from "./../assets/download (1).jpg"
import { useRef,useContext } from 'react'
import { AsideNavContext } from './AsideNavContext'

function AsideNavBar({asideNav}) {
    let asideNavClass = useContext(AsideNavContext);
    console.log(asideNavClass)

    //close the aside nav-bar
    const toggleAsideNav=()=>{
        asideNav.current.classList.toggle(asideNavClass.current);
    }
 
  return (
    <div className='fixed z-[50] w-full md:w-[35%] max-w-[270px] h-screen  top-0  left-0 md:flex hidden'  ref={asideNav}>
        <aside className=' aside-nav-bar w-full  z-[50]  h-full  flex '>
              <div className='aside-wrapper  bg-white p-3 relative h-full min-w-[270px] '>
            <FontAwesomeIcon icon={faX} className='absolute right-5 top-5 md:hidden' onClick={toggleAsideNav} />
             
             <div className="main-aside-content mt-[50px] flex flex-col gap-12">
                    <div className="profile-img">
                        <img src={profilePicture} alt="default profile img" className="rounded-full object-cover object-center  size-40 mx-auto" />

                        <div className="profile-intro flex justify-center gap-2 mt-2">
                            <p className='title font-serif'>Noob</p>
                            <span className='separator size-1 rounded-full inline-block self-center bg-gray-500'></span>
                            <div className="achievement-wrapper">
                                 <FontAwesomeIcon icon={faTrophy} className='text-amber-600' />
                            </div>
                               <span className='separator size-1 rounded-full inline-block self-center bg-gray-500'></span>
                                <FontAwesomeIcon icon={faFire} className=' self-center text-orange-500' />
                        </div>
                    </div>

                    <div className="aside-links-wrapper pl-5">
                        <nav>
                            <ul className="flex flex-col gap-5">
                                <li className=' text-lg '><FontAwesomeIcon icon={faHome} /> Home</li>
                                <li className='m text-lg'><FontAwesomeIcon icon={faBookmark} className="text-gray-500" /> Bookmark</li>
                                <li className=' text-lg'><FontAwesomeIcon icon={faTrophy} className='text-amber-600'/> Achievement</li>
                                <li className=' text-lg'><FontAwesomeIcon icon={faFire} className='text-orange-500' /> Streak</li>
                            </ul>
                        </nav>
                    </div>
             </div>
            <hr className='mt-5 bg-black ' />

            <div className="theme-toggle-icons mt-5">
                            <FontAwesomeIcon icon={faMoon} className="hidden" />
                          <FontAwesomeIcon icon={faSun}  />
            </div>

          </div>
             <div className="aside-overlay w-full relative md:hidden z-[50] h-full bg-black/50"></div>
        </aside>

     
    </div>
  
  )
}

export default AsideNavBar