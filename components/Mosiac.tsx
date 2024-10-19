import Image from 'next/image';
import Link from 'next/link';
import '../app/css/mosiac.css';
import image1 from '../public/Portfolio/4.jpg';
import image2 from '../public/Portfolio/13.jpg';
import image3 from '../public/Portfolio/14.jpg';



const Mosiac = () => {
    return (
        <div className='bg-[#F2FCF8]'>

            <div className=' pt-24 pb-48 lg:flex justify-evenly flex-col md:flex-row items-center'>
                <div data-scroll data-scroll-speed="0.2" className='quote-bx max-w-50 px-10 lg:px-10'>
                    <h1 className='text-[#942121] font-semibold text-left text-5xl sm:text-5xl md:text-5xl lg:text-7xl quote'>Meraki</h1>
                    <p className=' quote1 font-normal leding-[12vh] sm:leading-[10vh] md:leading-[11vh] lg:leading-[13vh] text-xl sm:text-2xl md:text-2xl lg:text-3xl '>{"["} may-raah-kee {"]"}</p>
                    <p className=' quote1 font-normal leading-[6vh] sm:leading-[5vh] lg:leading-[8vh] text-xl sm:text-2xl md:text-2xl lg:text-3xl '>{"("}n.{")"} to put something of your self into your work.</p>
                    <p className=' quote1 font-semibold pt-6 quote2 text-xl sm:text-2xl md:text-2xl lg:text-3xl'>Soul. Creativity. Love</p>
                </div>
                <div>
                    <p className='text-black text-right quote2 text-xl sm:text-2xl md:text-2xl lg:text-3xl font-semibold '>• Greek</p>
                </div>
            </div>

            <div>
                <div className='images'>
                    <p data-scroll data-scroll-speed="-0.1" className='text-2xl sm:text-xl md:text-6xl lg:text-8xl her'>HER</p>
                    <Image src={image2} alt="logo" className='image2 img' data-scroll data-scroll-speed="0.2" />
                    <Image src={image1} alt="logo" className='image1' />
                    <Image src={image3} alt="logo" className='image3 img' data-scroll data-scroll-speed="0.2" />
                    <Link href='#' className='img-txt pr-[0vw]'><button className=" px-6 py-2 border-2 border-black text-white bg-[#942121] hover:bg-black hover:text-white transition duration-300">Portfolio</button></Link>
                </div>
            </div>

            <div className='box'>

            </div>
        </div>
    )
}

export default Mosiac