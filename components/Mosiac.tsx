import Image from 'next/image';
import Link from 'next/link';
import '../app/css/mosiac.css';
import image1 from '../public/Portfolio/1.jpg';
import image2 from '../public/Portfolio/2.jpg';
import image3 from '../public/Portfolio/3.jpg';



const Mosiac = () => {
    return (
        <div className='bg-[#F2FCF8]'>
            <div className="flex justify-between items-center w-full p-32 quote-bx">
                <p data-scroll data-scroll-speed="0.2" className="text-left text-xl text-black font-semibold quote">
                    "Without elegance in the <span  className='text-[#942121]'>heart</span>, there is no elegance."
                </p>
                <p className="text-right text-4xl italic  text-black">
                    - Yves Saint Laurent
                </p>
            </div>
            <div>
                <div className='images'>
                    <Image src={image2} alt="logo" className='image2 img' data-scroll data-scroll-speed="0.2" />
                    <Image src={image1} alt="logo" className='image1' />
                    <Link href='#'><p className='text-black text-4xl z-10 img-txt'>View All</p></Link>
                    <Image src={image3} alt="logo" className='image3 img' data-scroll data-scroll-speed="0.2" />
                </div>
            </div>

            <div className='box'>

            </div>
        </div>
    )
}

export default Mosiac