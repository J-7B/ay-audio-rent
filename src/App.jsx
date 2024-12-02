import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import {
  About,
  FooterWidgets,
  Footer,
  Service,
  Hero,
  Navbar,
  Banner,
  Testimonials,
  BookNow,
} from "@home";
import { Contact, WeedingEvents } from "@/pages";
import MobileNavbar from "@components/mobileNavBar";


// Create a browser router with routes defined
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>

        <Navbar  />
        {/* <MobileNavbar className="lg:hidden" /> */}
     
        
        
        <div className=" bg-heroImg bg-no-repeat bg-cover w-full h-[34.2rem]">
          <Hero />
        </div>

        <Service />
        <Banner />
        <About />
        <Testimonials />
        <BookNow />
        <Outlet />
        <FooterWidgets />
        <Footer />
      </>
    ),
  },

  {
    path: "/WeedingEvents",

    element: (

      <>
       <Navbar/>
        <div className=" bg-weeding bg-[bottom_] bg-no-repeat bg-cover w-full h-[22rem]">
          <WeedingEvents />
        </div>
      
      </>
    ),
  },
  {
    path: "/contact",
    element: (
      <>
       <Navbar />
        <div className=" bg-heroImg bg-no-repeat bg-cover w-full h-[22rem]">
          <Contact />
        </div>
       
      </>
    ),
  },
]);

// App Component
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
