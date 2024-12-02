import React from 'react';
import StarIcon from '@svg/star-icon.svg?react';
import DiamondIcon from '@svg/diamond-icon.svg?react';
import MoneyIcon from '@svg/money-icon.svg?react';

const AboutCard = ({ icon: Icon, title, description }) => {
  return (
    <div className='flex flex-col items-center basis-[30%] m-0 text-center'>
      <Icon className="h-8 w-8 text-blue-700 mb-3" alt={`${title} Icon`} />
      <h2 className='font-semibold lg:text-[34px] leading-[44px] text-gray mb-0'>
        {title}
      </h2>
      <p className='font-medium lg:text-[15px] mt-[0.5rem] mb-0 text-lighter-gray'>
        {description}
      </p>
    </div>
  );
};
const About = () => {
  return (
    <div  >
      {/* Title Section */}
      <div className='relative mt-[70px] mb-[30px] text-center text-gray'>
        <h1 className='font-semibold lg:text-[34px] leading-[44px] '>
          <span>Why rent from AY Rental?</span>
          <br className="lg:block hidden" />
        </h1>
        <h4 className='font-semibold lg:text-[18px] leading-[32px]'>
          We care about your event just as much as you do. 
          We provide a seamless rental and 
          <br className="xs:block hidden" />
          booking process and pride ourselves on these three things.
        </h4>
      </div>

      {/* Flex Container */}
      <div className='relative h-90 mt-[76px] px-[3.45%] w-full flex flex-row items-center justify-between text-light-gray'>

         {/* About Cards */}
         <AboutCard 
          icon={StarIcon}
          title="Dependable"
          description="We treat your event as if it was our own, which means we put it at a top priority. We want the equipment setup and functioning on time with seamless communication throughout the whole process."
        />
        <AboutCard 
          icon={DiamondIcon}
          title="Quality Equipment"
          description="We provide the best name brand equipment in the industry such as JBL, Shure, QSC, and others. We believe in these companies to provide the quality that your event can rely on."
        />
        <AboutCard 
          icon={MoneyIcon}
          title="Competitive"
          description="When it comes to our top quality equipment and services, we provide some of the best rates in Kansas City."
        />
      </div>
    </div>
  );
}

export default About;
