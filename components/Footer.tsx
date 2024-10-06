import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-[#0E0D0D] text-white py-8">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start md:items-center">

                {/* Right side - Business Name */}
                <div className="mt-8 md:mt-0 name">
                    <p className="text-5xl sm:text-5xl md:text-6xl lg:text-6xl text-[#white] font-semibold">VEDA </p>
                    <p className="text-6xl sm:text-6xl md:text-7xl lg:text-7xl text-[#942121] font-semibold pl-20">SINGH</p>
                </div>

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
                                <Link href="https://www.instagram.com/veda_singh?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="  target="_blank"
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