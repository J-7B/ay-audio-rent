import React from 'react'
const Footer = () => {
  return (
    <footer className="bg-Eerie-Black text-white py-5">
    <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
      {/* Left Section */}
      <div className="text-center md:text-left">
        
        <p className="text-sm mt-1 text-[12px] font-400 leading-[22px]">© 2024 AY Audio Rental. All rights reserved.</p>
      </div>

     

      {/* Right Section (Social Icons) */}
      <div className="mt-1 md:mt-0 flex space-x-4 font-400 leading-[20px] text-[20px]">
        <a href="#facebook" aria-label="Facebook" className="hover:text-blue-500">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#twitter" aria-label="Twitter" className="hover:text-blue-400">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#instagram" aria-label="Instagram" className="hover:text-pink-500">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </div>
  </footer>
  )
}

export default Footer
