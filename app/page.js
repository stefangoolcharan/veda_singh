'use client'
import { useEffect } from 'react';
import Hero from '@/components/Hero';
import Navbar from '@/components/navbar';
import Mosiac from '@/components/Mosiac';

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
            <Mosiac />
        </div>
    );
}
