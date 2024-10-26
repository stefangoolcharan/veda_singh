import Link from 'next/link';
import Image from 'next/image';

import Image1 from '../public/footer.png'

const Footer = () => {
    return (
        <footer className="bg-[#0E0D0D] text-white py-8">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start md:items-center">

                {/* Right side - Business Name */}
                <Link href="/" >
                    <Image src={Image1} width={200} alt="footer-logo" />
                </Link>

                {/* Left side - Navigation Links & Social Icons */}
                <div className="flex flex-col items-start ">
                    {/* Navigation Links */}
                    <nav className="mb-2 items ">
                        <ul className="flex flex-col space-y-2 ">
                            <li>
                                <div>
                                    <a href="/" className="hover:text-gray-400 text-2xl">Home</a>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <a href="/" className="hover:text-gray-400 text-2xl">Contact</a>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <a href="/" className="hover:text-gray-400 text-2xl">Portfolio</a>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <a href="../app/css/about.js" className="hover:text-gray-400 text-2xl">About Me</a>
                                </div>
                            </li>
                            <li>
                                <Link href="https://www.instagram.com/veda_singh?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank"
                                    className="text-white-600 hover:text-[#D62976] transition-colors duration-300">
                                    <i className="fab fa-instagram text-2xl"></i>
                                </Link>

                                <Link href="https://www.twitter.com" target="_blank"
                                    className="text-white-600 hover:text-blue-400 transition-colors duration-300 pl-4">
                                    <i className="fab fa-tiktok text-2xl"></i>

                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </footer>
    );
}

export default Footer