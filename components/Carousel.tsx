'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '../app/globals.css'

import Image from "next/image";
import Link from "next/link";

import Image1 from '../public/Portfolio/1.1.jpg'
import Image2 from '../public/Portfolio/15.1.jpg'
import Image3 from '../public/Portfolio/16.jpeg'
import Image4 from '../public/Portfolio/6.jpg'
import Image5 from '../public/Portfolio/7.1.jpg'


const Carousel = () => {
    return (
        <div className="bg-[#f2fcf8]">
            <div className="  mx-auto py-28">
                <Swiper
                    spaceBetween={10}
                    navigation={true}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        // When screen width is >= 1024px (lg), display 4 columns
                        1024: {
                            slidesPerView: 5,
                        },
                        // When screen width is >= 768px (md), display 2 columns
                        768: {
                            slidesPerView: 3,
                        },
                        // When screen width is >= 640px (sm), display 1 column
                        640: {
                            slidesPerView: 1,
                        },
                    }}
                >
                    {/* Slide 1 */}
                    <SwiperSlide>
                        <div className=" img-con flex items-center justify-center h-screen bg-gray-200 ">
                            <Image src={Image1} className="object-cover w-full h-full transform scale-100 grid-img" width={800} height={1200} alt='image1' />
                            <button className="grid-img-btn absolute bottom-20 px-6 py-2 border-2 border-white text-white bg-[#942121] hover:bg-black hover:text-white transition duration-300">
                                <a href='' target='blank'>View More</a>
                            </button>
                        </div>
                    </SwiperSlide>

                    {/* Slide 2 */}
                    <SwiperSlide>
                        <div className=" img-con flex items-center justify-center h-screen bg-gray-200 ">
                            <Image src={Image2} className="object-cover w-full h-full transform scale-100 grid-img" width={800} height={1200} alt='image2' />
                            <button className="grid-img-btn absolute bottom-20 px-6 py-2 border-2 border-white text-white bg-[#942121] hover:bg-black hover:text-white transition duration-300">
                                <a href='' target='blank'>View More</a>
                            </button>
                        </div>
                    </SwiperSlide>

                    {/* Slide 3 */}
                    <SwiperSlide>
                        <div className=" img-con flex items-center justify-center h-screen bg-gray-200 ">
                            <Image src={Image5} className="object-cover w-full h-full transform scale-100 grid-img" width={800} height={1200} alt='image5' />
                            <button className="grid-img-btn absolute bottom-20 px-6 py-2 border-2 border-white text-white bg-[#942121] hover:bg-black hover:text-white transition duration-300">
                                <a href='' target='blank'>View More</a>
                            </button>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className=" img-con flex items-center justify-center h-screen bg-gray-200 ">
                            <Image src={Image3} className="object-cover w-full h-full transform scale-100 grid-img" width={800} height={1200} alt='image3' />
                            <button className="grid-img-btn absolute bottom-20 px-6 py-2 border-2 border-white text-white bg-[#942121] hover:bg-black hover:text-white transition duration-300">
                                <a href='' target='blank'>View More</a>
                            </button>
                        </div>
                    </SwiperSlide>

                    {/* Slide 4 */}
                    <SwiperSlide>
                        <div className=" img-con flex items-center justify-center h-screen bg-gray-200 ">
                            <Image src={Image4} className="object-cover w-full h-full transform scale-100 grid-img" width={800} height={1200} alt='image4' />
                            <button className="grid-img-btn absolute bottom-20 px-6 py-2 border-2 border-white text-white bg-[#942121] hover:bg-black hover:text-white transition duration-300">
                                <a href='' target='blank'>View More</a>
                            </button>
                        </div>
                    </SwiperSlide>

                   {/* Add more slides as needed */}
                </Swiper>
            </div>
        </div>
    )
}

export default Carousel