'use client'
import { useEffect } from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/Footer';

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
            <Footer />
        </div>
    );
}
