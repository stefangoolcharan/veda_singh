'use client'
import { useEffect } from 'react';
import Hero from '@/components/Hero';
import Navbar from '@/components/navbar';
import Quote from '@/components/Mosiac';
import Carousel from '@/components/Carousel';
import About from '@/components/About';
import Footer from '@/components/Footer';

export default function Home() {

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
            <Hero />
            <Navbar />
            <Quote />
            <Carousel/>
            <About/>
            <Footer/> 
        </div>
    );
}
