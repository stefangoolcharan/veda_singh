'use client'
import Image from 'next/image';
import { useEffect } from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/Footer';
import Aboutimg from '../Assets/about.jpg';
import '../globals.css';

export default function About() {

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
            <section className="bg-[#F2FCF8]">
                <div className="container mx-auto pt-10 pb-28 px-4 flex flex-col md:flex-row items-center">
                    {/* Left side - Image */}
                    <div className="md:w-1/2 pb-10 md:mb-0 ">
                        <Image
                            src={Aboutimg} // Replace with your image path
                            alt="About Us"
                            width={600} // Adjust width according to your image
                            height={600} // Adjust height according to your image
                            className=" shadow-lg abt-img"
                        />
                    </div>

                    {/* Right side - Text */}
                    <div className="md:w-1/2 md:pl-10 text-center md:text-left abt-fnt">
                        <h2 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl mb-8 text-black">
                            Fashion Model & Designer
                        </h2>
                        <p className="text-gray-600 mb-4 text-lg sm:text-xl md:text-1xl lg:text-xl ">
                            Welcome to my portfolio. My name is Veda Singh,  an aspiring model driven by a deep passion for creativity and artistry. While my primary focus is on fashion modeling, I am versatile and open to working in various areas, including catalog, commercial, runway, editorial, and print. I’ve had the privilege of collaborating with industry professionals such as Luigi Creese and Mark Joseph, and have honed my skills through training with Red Runway.
                        </p>
                        <p className="text-gray-600 text-lg sm:text-xl md:text-1xl lg:text-xl ">
                            Based in Trinidad, I am available for local shoots and I am eager to explore opportunities both locally & internationally. My goal is to bring each brand's unique vision to life through my adaptability, professionalism, and commitment to embodying its identity and aesthetic.
                        </p>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}