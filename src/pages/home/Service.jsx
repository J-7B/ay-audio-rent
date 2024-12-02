import React from 'react'
import program_1 from "@/assets/prog-1.jpg";
import program_2 from "@/assets/prog-2.jpg";


const EventCard=({image, title, description}) => (
    
  <div className="basis-[33.3%] px-[0.7451rem]">
   
   <img src={image} alt={title} className='w-[400px] h-[267px] ' />
    
    <div className="mt-[0.65rem]">
      <h1 className=" text-gray font-600 text-[30px] text-center mb-[0.4rem]">
        {title}
      </h1>
      <p className='text-lighter-gray pb-[1.6875rem] mt-[0.5rem] text-[14px] font-400 leading-[1.625rem]'>
        {description}
      </p>
    </div>

    <div className='text-center '>
    <button className=" text-[0.75rem] py-2.5 px-3.5 font-semibold bg-blue-100 text-white hover:bg-[rgba(18,104,251,0.9)] rounded">Learn More</button>
    </div>

  </div>
);

const Service = () => {
  return (
     
  <section id="next-section" >
      <div className=' relative mt-[75px] mb-[30px] text-center leading-44 '>
      
      <h1 className=' text-gray font-800 lg:text-[38px]'>
      <span>We provide Addis Ababa City With Premiere audio</span>
          <br className="lg:block hidden" />
          <span>   equipment  rentals   </span>
          <br className="xs:block hidden" />
      
           
           </h1>

          <p className='text-gray lg:text-[20px] '>Here's what we offer.</p>
     
     </div>
      <div className=' relative  mt-4.75 mx-auto my-70 w-[94%] flex flex-wrap items-center justify-between px-[3%] '>
      
      <EventCard 
          image={program_1}
          title="Corporate Events Image"
          description="We offer competitive pricing and quality audio equipment specific to your needs. Call or email for a custom order today!"
        />

      <EventCard 
          image={program_2}
          title="Wedding & Party Image"
          description="Looking for audio equipment for your special day? Check out our custom wedding rental packages available in the Addis Ababa City area!"
        />
     
      <EventCard 
          image={program_2} // Assuming you might want to replace this with another image
          title="Church Events Image"
          description="We offer competitive pricing and quality audio equipment specific to your needs. Call or email for a custom order today!"
        />   
      
    </div>
  </section>
  
  );
};

export default Service;