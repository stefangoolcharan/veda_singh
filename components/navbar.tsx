import { useState } from 'react';
import Link from "next/link";
import logo from '../public/logo.png';
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

export default Navbar