import '../app/css/gallery.css';
import Image from 'next/image';
import Image1 from '../public/Portfolio/1.jpg';
import Image2 from '../public/Portfolio/2.jpg';
import Image3 from '../public/Portfolio/8.jpg';
import Image4 from '../public/Portfolio/4.jpg';
import Image5 from '../public/Portfolio/5.jpg';
import Image6 from '../public/Portfolio/6.jpg';
import Image7 from '../public/Portfolio/7.jpg';
import Image8 from '../public/Portfolio/10.jpg';
import Image9 from '../public/Portfolio/9.jpg';


const Gallery = () => {
    return (
        <div className='bg-[#F2FCF8] px-7 grid gap-4 grid-cols-1 md:grid-cols-3 md:px-20 lg:grid-col-3 lg:px-80 lg:py-28 '>
            <div className='grid gap-4 '>
                <div>
                    <Image src={Image1} className="h-auto max-w-full rounded-lg " width={600} height={600} alt='image1' />
                </div>
                <div>
                    <Image src={Image7} className="h-auto max-w-full rounded-lg" width={500} height={700} alt='image1' />
                </div>
                <div>
                    <Image src={Image3} className="h-auto max-w-full rounded-lg" width={600} height={900} alt='image1' />
                </div>
            </div>
            <div className='grid gap-2' >
                <div>
                    <Image src={Image5} className="h-auto max-w-full rounded-lg" width={400} height={500} alt='image1' />
                </div>
                <div>
                    <Image src={Image4} className="h-auto max-w-full rounded-lg" width={400} height={500} alt='image1' />
                </div>
                <div>
                    <Image src={Image6} className="h-auto max-w-full rounded-lg" width={400} height={500} alt='image1' />
                </div>
            </div>
            <div className='grid gap-4' >
                <div>
                    <Image src={Image9} className="h-auto max-w-full rounded-lg" width={600} height={600} alt='image1' />
                </div>
                <div>
                    <Image src={Image8} className="h-auto max-w-full rounded-lg" width={500} height={700} alt='image1' />
                </div>
                <div>
                    <Image src={Image2} className="h-auto max-w-full rounded-lg" width={600} height={900} alt='image1' />
                </div>
            </div>
        </div>
    );
};

export default Gallery;