import React from 'react';
import useMediaQuery from '../hooks/useMediaQuery';
import { HashLink as Link } from 'react-router-hash-link';
import menu from '../assets/menu-icon.svg';
import close from '../assets/close-icon.svg';
import { useAuth } from '../hooks/useAuth';
import Nav from '../components/Nav';

export default function NavBar({selectedPage, setSelectedPage, pagePosition}) {

  let { logout, cookies } = useAuth();
  let isSmallScreen = useMediaQuery ("(max-width: 1060px)");
  let [mobileMenuOpen, setMobileMenueOpen] = React.useState(false);
  let menuItems = ["Dashboard", "Meeting", "Notifications", "Logout"];

  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  }

  return (
    <nav className= {`${pagePosition? "" : "bg-deep-blue"} md:fixed md:top-0 md:w-full md:h-12 flex flex-row justify-between flex-start px-10 my-1 z-40`}>
      <h4 onClick={() => scrollToTop()} className="px-6 py-1 text-3xl cursor-pointer">
        <Nav />
        <span className= "text-xs flex mx-4 mt-2 left-0 text-white px-6" >Hello Mr. {cookies.name} 
        </span>
      </h4>
    
      {
        /*desktop screen navbar */
        !isSmallScreen?
        <div className="flex justify-between w-auto mx-10 self-center font-sans ">
          {
            menuItems.map(
              (item,i) => (
                <Link onClick={item === "Logout"? logout : () => setSelectedPage(item)} smooth to={`#${item}`} key={i} className='cursor-pointer mx-7'>{item}</Link>
              )
            )
          }
        
        </div>

        
        
        /*Mobile screen Navbar */
        :
          <div>
            <div className='my-2'>
              { 
                !mobileMenuOpen?
                <button className= "w-9 h-9 mt-5 rounded-full pl-1.5 bg-red" onClick={() => setMobileMenueOpen(!mobileMenuOpen)}>
                  <img src={menu} alt="menu" />
                </button>
                :
                <button className='absolute z-40' onClick={() => setMobileMenueOpen(!mobileMenuOpen)}>
                  <img src={close} alt="close" />
                </button>
              
              }
            </div>
              { 
                mobileMenuOpen &&
                <div className='z-30 transition ease-in-out duration-30 flex flex-col absolute w-8/12 h-full bg-red right-0 top-0 text-black text-left p-20'>
                  {
                    menuItems.map(
                          (item,i) => (
                            <Link onClick={item === "Logout"? logout : () => setSelectedPage(item)} smooth to={`#${item}`} key={i} className='my-5 text-2xl cursor-pointer'>{item}</Link>
                          )
                        )
                  }     
                </div>
              }
          </div>
      }
    </nav>
  )
}