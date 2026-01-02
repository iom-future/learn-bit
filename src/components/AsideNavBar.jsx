import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' //components
import { faX,faTrophy,faFire,faHome,faBookmark } from '@fortawesome/free-solid-svg-icons' //icons
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import profilePicture from "./../assets/download (4).jpg"

function AsideNavBar() {
  return (
    <div className='fixed z-[50] w-full h-full top-0 left-0 flex'>
        <aside className=' w-[70%] relative z-[50] bg-white h-full p-3 '>
            <FontAwesomeIcon icon={faX} className='absolute right-5 top-5' />
             
             <div className="main-aside-content mt-[50px] flex flex-col gap-12">
                    <div className="profile-img">
                        <img src={profilePicture} alt="default profile img" className="rounded-full size-40 mx-auto" />

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
           
        </aside>

        <div className="aside-overlay w-[30%] relative z-[50] h-full bg-black/30">

        </div>
    </div>
  
  )
}

export default AsideNavBar