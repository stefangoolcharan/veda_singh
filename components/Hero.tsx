import '../app/css/hero.css'

const Hero = () => {
    return (
        <div className="relative w-full h-screen overflow-hidden flex">
            <div data-scroll data-scroll-speed="-0.3" className="parallax-bg"></div>
            <div className="flex flex-1">
                <div className="panel flex-1 flex justify-center items-center ">
                    <div data-scroll data-scroll-speed="0.3" className="letter text-white ">
                        V
                    </div>
                </div>
                <div className="panel flex-1 flex justify-center items-center ">
                    <div data-scroll data-scroll-speed="-0.55" className="letter text-white ">E</div>
                </div>
                <div className="panel flex-1 flex justify-center items-center ">
                    <div data-scroll data-scroll-speed="0.3" className="letter text-white ">D</div>
                </div>
                <div className="panel flex-1 flex justify-center items-center ">
                    <div data-scroll data-scroll-speed="-0.55" className="letter text-white">A</div>
                </div>
            </div>
            <div>
                <div className='line'></div>
                <div className="hero-txt" data-aos="fade-up" data-aos-delay="100" data-aos-duration="800">
                    <p>E</p>
                    <p>x</p>
                    <p>p</p>
                    <p>l</p>
                    <p>o</p>
                    <p>r</p>
                    <p>e</p>
                </div>
            </div>
        </div>
    )
}

export default Hero