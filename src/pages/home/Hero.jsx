import { styles } from "@/Styles";
import ScrollIcon from "@svg/scroll_Icon.svg?react"; // Use ReactComponent for SVG

const Hero = () => {
  // Scroll handler function to scroll down by 5rem
  const handleScroll = () => {
    const targetScrollDistance = 514;
    const currentScrollY = window.scrollY;
   
      const targetPosition = currentScrollY + targetScrollDistance;
      window.scrollBy({
        top: targetPosition, // Adjust this value (5rem = 80px, considering 16px base font size)
        behavior: "smooth",
      });
    
   
  };

  return (
    <section>
      <header className="  relative inset-0 w-auto  pt-6.875 pl-[7%] 
        z-0 text-left  sm:px-15 ">
        <h2
          className="
            xs:max-w-[80%] sm:max-w-[85%] md:max-w-[90%] lg:max-w-[51%] 
            mt-2 mb-[0.5rem] 
            xs:text-[0.9375em] sm:text-[41px] md:text-[41px] lg:text-[60px]
            xs:leading-[21px] sm:leading-[38px] md:leading-[36px] lg:leading-[55px] 
            font-semibold text-white source-sans-pro lg:tracking-half"
        >
                  <span>Your Audio Equipment </span>
          <br className="lg:block hidden" />
          <span> Resource</span>
          <br className="lg:block hidden" />
          <span> in Addis Ababa City</span>
          
        </h2>
        <p
          className="
            xs:max-w-[90%] sm:max-w-[95%] 
            xs:text-[14px] sm:text-[20px] lg:text-[25px] 
            xs:leading-[1.5rem] sm:leading-[30px] lg:leading-[40px] 
            font-light text-white"
        >

          
          Quality audio equipment rental services  
          <br className="lg:block hidden " />
          in Addis Ababa City.
          <br className="md:hidden " />
           Contact us today!
        </p>

        <div className=" lg:pt-[2rem] leading-44 w-auto   ">
        <button 
            tabIndex="0"
            aria-label="Explore our rental packages"
            className="
            border-0 outline-0 my-2 mr-3 
            text-[0.5625rem] sm:text-[0.625rem] md:text-[0.6875rem] lg:text-[0.75rem] xl:text-[1rem] 
            font-semibold 
            px-2 xs:px-[1.8875rem] xs:py-[0.5375rem] sm:px-[0.6875rem] sm:py-[0.4375rem] md:px-10 lg:px-12 xl:px-14 
            xs:leading-[0.6875rem]
            bg-blue-800 text-white-100 hover:bg-yellow-600 
            rounded"
            >
            RENTAL PACKAGES
        </button>

          <button className="border-2 border-white-opacity hover:border-white  text-[0.5625rem] sm:text-[0.625rem] 
          md:text-[0.6875rem] lg:text-[0.75rem] xl:text-[1rem] my-2  ml-3  
          px-2 xs:px-[1.4125rem] xs:py-[0.4375rem] sm:px-3 sm:py-2 md:px-6 lg:px-7 xl:px-8 
           xs:leading-[0.6875rem]
          font-semibold  bg-transparent  text-white-100  rounded ">
            EMAIL US
          </button>
        </div>
      </header>

      <div className="hidden md:flex lg:flex xl:flex scroll-down-wrap no-border bottom-[3rem]  justify-center w-full">
        {/* Main Section Down Arrow */}
        <div className="border-none overflow-visible text-center opacity-100 h-auto animate-nudgeMouse">
          <ScrollIcon
            className="nectar-scroll-icon w-[35px] h-[50px] cursor-pointer  stroke-white/50"
            aria-label="Scroll down to learn more about our services"
            role="img"
            title ="Scroll Down Icon"
            onClick={handleScroll}
          />

          {/* Arrow Pointer */}
          <div className="absolute animate-arrowFadeSlide top-[10px] left-1/2 w-[2px] h-[5px] -ml-[1px] bg-white/50  rounded-full "></div>

          {/*  TODO Circle Border */}

          {/* <div className="absolute top-0 left-1/2 w-[30px] h-[45px] -ml-[15px] border stroke-2 border-white rounded-full box-border z-[62] scroll-btn"></div> */}
        </div>

      </div>
    </section>
  );
};

export default Hero;