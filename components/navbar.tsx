import Link from "next/link";
import logo from '../app/Assets/logo.png';
import Image from "next/image";

const Navbar = () => {
  return (
      <nav className="bg-[#F2FCF8] shadow-md py-4">
          <div className="container mx-auto px-4 flex items-center justify-between">
              <div className="hidden flex-1 justify-end">
                  <a href="#" className="text-gray-800 hover:text-gray-600 px-4 nav-txt">
                     Aobut Me
                  </a>
              </div>
              <Link href="/" className="flex-shrink-0  lg:mx-[46%]">
                    <Image src={logo} alt="logo" className="w-28"/>
              </Link>
              <div className="hidden flex-1 justify-start">
                  <a href="#" className="text-gray-800 hover:text-gray-600 px-4 nav-txt">
                      Contact 
                  </a>
              </div>
          </div>
      </nav>
  )
}

export default Navbar