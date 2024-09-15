import { useState } from 'react';
import Link from "next/link";
import logo from '../app/Assets/logo.png';
import Image from "next/image";


    const Navbar = () => {
    
        const [isOpen, setIsOpen] = useState(false);

        const toggleMenu = () => {
            setIsOpen(!isOpen);
        };
        
  return (
      <nav className="bg-[#F2FCF8] shadow-md py-4">
          <div className="container mx-auto px-4 flex items-center justify-between">
              
              {/* Hamburger Menu for Mobile */}
              <div className="md:hidden flex items-center">
                  <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                      </svg>
                  </button>
              </div>

              <div className="hidden md:flex flex-1 justify-end ">
                  <a href="#" className="text-gray-800 hover:text-gray-600 px-4 nav-txt">
                     Aobut Me
                  </a>
              </div>
              <Link href="/" className="flex-shrink-0 mx-4">
                    <Image src={logo} alt="logo" className="w-28"/>
              </Link>
              <div className=" hidden md:flex flex-1 justify-start">
                  <a href="#" className="text-gray-800 hover:text-gray-600 px-4 nav-txt">
                      Contact 
                  </a>
              </div>
          </div>
      </nav>
  )
}

export default Navbar