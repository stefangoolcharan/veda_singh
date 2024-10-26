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
                    <Link href="/portfolio" className=" flex justify-center text-black">
                        Portfolio
                    </Link>
                </div>

                <Link href="/" className=" flex justify-center px-20">
                    <Image src={logo} alt="logo" className="w-28" />
                </Link>
    
                <div className="flex-1 flex justify-start nav-txt">
                    <Link href="/#about" className=" flex justify-center text-black">
                        About Me
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar