import React from 'react';
const FooterComponent = () => {
  return (
    <footer className="bg-white text-gray-800 px-6 lg:space-y-2 lg:mt-[calc(-34.5rem)] lg:mb-[calc(0.5rem)] lg-sm:mx-[40px] md:-mt-[450px] font-sans xs:pt-[30px]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start">
        {/* Logo and Welcome Text */}
        <div className="mb-6 md:mb-0">
          <img src="./cq_logo.svg" alt="CityQuest Logo" className="mb-4" />
          <p className="text-[11px] leading-6 mb-6 xs:text-[12px] lg-sm:text-[14px] custom-change:text-[16px]">
            CityQuest welcomes you with a plethora of information about Coimbatore City!
          </p>
          {/* Quick Links */}
          <div>
            <h2 className="font-bold text-[14px] mb-2 xs:text-[15px] lg-sm:text-[18px] custom-change:text-[20px]">Quick Links</h2>
            <ul className="flex gap-2 xs:gap-[7.5px] text-[11px] xs:text-[12px]
             md:gap-4 md:text-[14px] xs:font-[500] sm-xs:gap-[18px] lg-sm:text-[14px] custom-change:text-[16px]">
              <li className="w-full sm:w-auto cursor-pointer">Events</li>
              <li className="w-full sm:w-auto cursor-pointer">Learnings</li>
              <li className="w-full sm:w-auto cursor-pointer">Property</li>
              <li className="w-full sm:w-auto cursor-pointer">Offers</li>
              <li className="w-full sm:w-auto cursor-pointer">Education</li>
              <li className="w-full sm:w-auto cursor-pointer">Helpline</li>
            </ul>
          </div>
        </div>
        {/* Contact, Follow Us, and Policies */}
        <div className="flex flex-col xs:flex-row xs:gap-[60px] sm-xs:gap-[80px] gap-0 md:gap-x-8">
          {/* Contact Us */}
          <div className="mb-6 md:mb-0">
            <h2 className="font-bold text-[14px] mb-2 xs:text-[14px] lg-sm:text-[18px] custom-change:text-[20px]">
              Contact Us
            </h2>
            <ul className="text-[11px] xs:text-[12px] leading-[30px] mb-2 xs:font-[500] lg-sm:text-[14px] custom-change:text-[15px]">
              <li className="flex relative right-[10px]">
                <img src="./gmail.svg" alt="hii" className="relative -top-[5px]" />
                Info@cityquest.in
              </li>
              <li className="flex relative right-[px] gap-[4px]">
                <img src="./whatsapp.svg" alt="hii" />
                +91 7397 534 555
              </li>
            </ul>
          </div>
          {/* Follow Us */}
          <div className="mb-6 md:mb-0">
            <h2 className="font-bold text-[14px] mb-2 xs:text-[14px] lg-sm:text-[18px] custom-change:text-[20px]">
              Follow Us
            </h2>
            <ul className="text-[11px] xs:text-[12px] leading-[40px] xs:font-[500] lg-sm:text-[14px] custom-change:text-[15px]">
              <li className="flex gap-[10px]">
                <img src="./facebook.svg" alt="hii" />
                Facebook
              </li>
              <li className="flex gap-[10px]">
                <img src="./instagram.svg" alt="hii" />
                Instagram
              </li>
            </ul>
          </div>
        </div>
        <div className="block md:hidden mt-6 text-sm text-gray-500 pt-[50px] xs:mt-[6px]">
          <div className='text-black relative bottom-[40px]
          xs:mr-[44px] xs:ml-[31px] flex gap-[4px] font-semibold sm-xs:mr-[68px] sm-xs:ml-[58px]'>Terms of conditions<h1 className='w-[4px] h-[4px] bg-black relative top-[8px] rounded-full'></h1>Privacy policy</div>
          ©2024 CityQuest. All rights reserved
        </div>
      </div>
      {/* Footer Bottom Section */}
      <div className="flex justify-between items-center   pt-[70px] text-sm
      text-gray-500 lx:mx-[54px] sl:mx-[64px] lx-sl:mx-[76px] xss-sl:mx-[90px]
      sl-xss:mx-[100px] lx-xss:mx-[110px] xss-lx:mx-[133px] lg-ls-ms:mx-[160px] ms-ls-lg:mx-[180px]">
        {/* Left Section */}
        <div className='hidden md:block'>©2024 CityQuest. All rights reserved</div>
        {/* Right Section */}
        <div className="flex items-center gap-2 text-black font-bold ">
          <span className="cursor-pointer hidden md:block">Terms of conditions</span>
          <div className="w-1 h-1 bg-black rounded-full hidden md:block"></div>
          <span className="cursor-pointer hidden md:block">Privacy policy</span>
        </div>
      </div>
    </footer>
  );
};
export default FooterComponent;