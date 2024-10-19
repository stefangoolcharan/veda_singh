import React from 'react'
import Image    from 'next/image';
import Aboutimg from '/public/about.jpg';

function About() {
  return (
      <div>
          <section className="bg-[#F2FCF8]">
              <div className="container mx-auto pt-10 pb-28 px-4 flex flex-col md:flex-row items-center">
                  {/* Left side - Image */}
                  <div className="md:w-1/2 pb-10 md:mb-0 ">
                      <Image
                          src={Aboutimg}
                          alt="About Us"
                          width={600}
                          height={600}
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

                      <div className='mt-8 book-btns'>
                          <button className="mr-10 px-6 py-2 border-2 border-black text-white bg-[#942121] hover:bg-black hover:text-white transition duration-300">
                              <a href='' target='blank'>Book Me</a>
                          </button>

                          <button className=" px-6 py-2 border-2 border-black text-black bg-[transparent] hover:bg-black hover:text-white transition duration-300">
                              <a href='' target='blank'>Portfolio</a>
                          </button>
                      </div>
                  </div>
              </div>
          </section>
      </div>
  )
}

export default About