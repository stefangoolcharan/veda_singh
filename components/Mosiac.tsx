import Image from 'next/image';
import Link from 'next/link';
import '../app/css/mosiac.css';
import image1 from '../public/Portfolio/4.jpg';
import image2 from '../public/Portfolio/13.jpg';
import image3 from '../public/Portfolio/14.jpg';



const Mosiac = () => {
    return (
        <div className='bg-[#F2FCF8]'>
            <div className="flex justify-between items-center w-full px-48 py-20 quote-bx">
                <p data-scroll data-scroll-speed="0.2" className="text-left text-sm sm:text-4xl md:text-2xl lg:text-7xl text-[#942121] font-semibold quote">
                    Meraki

                    <p className='font-normal quote1 text-black'>{"["} may-raah-kee {"]"}</p>
                    <p className='font-normal quote1 text-black'>{"("}n.{")"} to put something of your self into your work</p>
                    <p className='font-semibold quote1 text-black'>Soul. Creativity. Love</p>
                </p>
                
                <p className="text-right text-4xl  font-semibold text-black quote2">
                • Greek
                </p>
            </div>
            <div>
                <div className='images'>
                    <p data-scroll data-scroll-speed="-0.1" className='text-2xl sm:text-xl md:text-6xl lg:text-8xl her'>V</p>
                    <Image src={image2} alt="logo" className='image2 img' data-scroll data-scroll-speed="0.2" />
                    <Image src={image1} alt="logo" className='image1' />
                    <Link href='#'><p className='hidden text-black text-4xl "relative rotate-90 font-medium tracking-widest transition duration-300" 
     style="writing-mode: vertical-lr; left: 0vw; top: 50vh;"'>View All</p></Link>
                    <Image src={image3} alt="logo" className='image3 img' data-scroll data-scroll-speed="0.2" />
                </div>

            </div>

            <div className='box'>

            </div>
        </div>
    )
}

export default Mosiac