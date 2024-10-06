import { useState } from 'react';
import Link from "next/link";
import logo from '../app/Assets/logo.png';
import Image from "next/image";


const Navbar = () => {
    // State to manage menu visibility
    const [menuOpen, setMenuOpen] = useState(false);

    // Toggle function
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        
        <nav className="bg-[#F2FCF8] shadow-md py-4">
            <div className="container mx-auto px-4 flex items-center justify-between">
                <div className="flex-1 flex justify-end nav-txt">
                    <a href="#" className="text-black px-4">
                        Portfolio
                    </a>
                </div>

                <Link href="/" className=" flex justify-center px-10">
                    <Image src={logo} alt="logo" className="w-28" />
                </Link>
    
                <div className="flex-1 flex justify-start nav-txt">
                    <a href="#" className="text-black px-4">
                        About
                    </a>
                </div>
            </div>
        </nav>
    );
};
        /*
        <nav className="bg-[#F2FCF8] shadow-md py-4">
            <div className="container mx-auto px-4 flex items-center justify-between">

                {/* Left Link
                <div className="flex flex-1 justify-end ">
                    <a href="#" className="text-gray-800 hover:text-gray-600 px-4 nav-txt">
                        My Bio
                    </a>
                </div>

                {/* Center Logo 
                <Link href="/" className=" flex justify-center w-full">
                    <Image src={logo} alt="logo" className="w-28" />
                </Link>

                {/* Right Link 
                <div className=" flex flex-1 justify-start">
                    <a href="#" className="text-gray-800 hover:text-gray-600 px-4 nav-txt">
                        Contact
                    </a>
                </div>

                {/* Hamburger Menu for Mobile 
                <div className=" hidden items-center">
                    <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
                        <svg className="hover:scale-110 transition-transform duration-300 ease-in-out w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu 
                <div
                    className={`menu absolute top-[108vh] right-0 bg-[rgb(41,41,41)] shadow-md h-2/3 transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'
                        } transition-transform duration-300 ease-in-out lg:flex z-50`} 
                >
                    <div className='navigation-bar'>
                        <h1 className='text-[#F2FCF8]'>Navigation</h1>
                        <hr></hr>

                        <div className="nav-text text-2xl">
                            <a href="#" className="block text-[#F2FCF8]  py-2">Home</a>
                            <a href="#" className="block text-[#F2FCF8]  py-2">About Me</a>
                            <a href="#" className="block text-[#F2FCF8]  py-4">Portfolio</a>
                            <a href="#" className="block text-[#F2FCF8]  py-4">Contact</a>
                        </div>
                        
                        <div className='socials'> 
                            {/* Instagram Icon 
                            <Link href="https://www.instagram.com" target="_blank"
                                className="text-white-600 hover:text-blue-400 transition-colors duration-300">
                                <i className="fab fa-instagram text-2xl"></i>

                            </Link>
                            {/* Twitter Icon
                            <Link href="https://www.twitter.com" target="_blank"
                                className="text-white-600 hover:text-blue-400 transition-colors duration-300">
                                    <i className="fab fa-x-twitter text-2xl"></i>
                                
                            </Link>
                        </div>
                    </div> 
                </div>
            </div>
        </nav>*/ 

export default Navbar