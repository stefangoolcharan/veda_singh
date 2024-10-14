'use client'
import Image from 'next/image';
import { useEffect } from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/Footer';
import Image1 from '/public/portfolio.jpg';
import Gallery from '@/components/Gallery';

export default function Portfolio() {

    useEffect(() => {
        (
            async () => {
                const LocomotiveScroll = (await import('locomotive-scroll')).default
                const locomotiveScroll = new LocomotiveScroll();
            }
        )()
    }, [])

    return (
        <div>
            <Navbar />
            <div className='bg-[#F2FCF8] portfolio'>
                <div className='p-10 flex items-center justify-center h-full '>
                    <Image src={Image1} width={1100} height={800}></Image>
                </div>
                <h1 className='text-black font-medium text-3xl sm:text-xl md:text-3xl lg:text-4xl'>PORTFOLIO</h1>
                <div className='flex justify-between items-center h-64 px-[20vw] lg:px-[37vw] md:px-[30vw]'>
                    <div className='text-left text-1xl sm:text-xl md:text-2xl lg:text-3xl text-black font-semibold'>
                        COMP CARD:
                    </div>
                    <div className='text-left text-sm sm:text-sm md:text-sm lg:text-lg text-black font-medium'>
                        <ul>
                            <li>Height: 5'8" / 1.72m</li>
                            <li>Bust: 34" / 86.3cm</li>
                            <li>Wait 23" / 58.4cm</li>
                            <li>Hips: 38" / 96.5cm</li>
                            <li>Shoes Size: US 9</li>
                            <li>Hair: Black / Long</li>
                            <li>Eyes: Brown </li>
                        </ul>
                    </div>
                </div>
                <Gallery />
            </div>
            <Footer />
        </div>
    );
}
