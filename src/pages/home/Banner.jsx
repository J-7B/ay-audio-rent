import React, { useEffect, useState } from 'react';
import RightArrow from '@svg/RightArrow.svg?react'


const Banner = () => {

  const [isHovered, setIsHovered] = useState(false);
  const [scrollY, setScrollY] = useState(0);


  const [mouseY, setMouseY] = useState(0);

  // Update the mouse position on mouse move
  const handleMouseMove = (e) => {
    setMouseY(e.clientY);
  };


  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div  className={`relative flex items-center justify-center z-1 h-[425px] mt-[7.5rem] bg-center bg-fixed bg-no-repeat bg-cover bg-banner `}
    style={{
      backgroundPosition: `center ${scrollY * 0.04}px`, // Adjust the vertical position based on scroll
      // backgroundPosition: `center ${mouseY * 0.1}px`, // Adjust multiplier to control sensitivity
      
    }}>
      {/* Overlay */}
      
      
      {/* Main Content */}
    <div className=' relative mt-[70px]  mb-[30px]'>
    <h1 className=' text-white text-5x1 font-800 lg:text-[38px]  text-center '>
      <span>Need a skilled sound tech on site?</span>
           </h1>
          <p className='text-white lg:text-[20px] text-center '>No problem. We can run your equipment for you so you can focus on running your successful event.</p>
          <div className='flex justify-center mt-[2.2rem]'>
           
           
            <button  className={`relative flex items-center opacity-70 justify-center py-[0.7rem] px-[2.6rem] rounded-[4px] font-semibold bg-blue-800 text-white 
                 text-[0.8rem]
            `}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
              >
              <span className={`transition-transform duration-490a ease-in-out ${isHovered ? '-translate-x-1/4' : ''}`}>
              Book Now
            </span>
            <RightArrow className={`transition-all duration-490 ease-in-out  ${isHovered ? 'opacity-100 translate-x-3' : 'opacity-0 translate-x-0  '}`}/>
          
              </button>


          </div>
    </div>
    </div>
  );
};

export default Banner;
