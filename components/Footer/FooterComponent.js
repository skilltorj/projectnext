import React from 'react';

const FooterComponent = () => {
  return (
    <footer className="bg-white text-gray-800 py-10 px-6 lg:space-y-2 lg:mt-[calc(-34.5rem)] lg:mb-[calc(0.5rem)] lg-sm:mx-[60px] md:-mt-[450px]">
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
            <ul className="flex gap-2 xs:gap-[10px] text-[11px] xs:text-[12px] 
             md:gap-4 md:text-[14px] xs:font-[500] sm-xs:gap-[22px] lg-sm:text-[14px] custom-change:text-[16px]">
              <li className="w-full sm:w-auto">Events</li>
              <li className="w-full sm:w-auto">Learnings</li>
              <li className="w-full sm:w-auto">Property</li>
              <li className="w-full sm:w-auto">Offers</li>
              <li className="w-full sm:w-auto">Education</li>
              <li className="w-full sm:w-auto">Helpline</li>
            </ul>
          </div>

          {/* Footer Bottom Text for Large Screens */}
          <div className="hidden md:block mt-6 text-sm text-gray-500 pt-[50px]">
            ©2024 CityQuest. All rights reserved
          </div>
        </div>

        {/* Contact, Follow Us, and Policies */}
        <div className="flex flex-col xs:flex-row xs:gap-[25px] gap-0 md:gap-x-8 ">
          {/* Contact Us */}
          <div className="mb-6 md:mb-0">
            <h2 className="font-bold text-[14px] mb-2 xs:text-[14px] 
            lg-sm:text-[18px] custom-change:text-[20px]">Contact Us</h2>
            <ul className="text-[11px] xs:text-[12px] leading-[30px] mb-2 xs:font-[500] lg-sm:text-[14px] custom-change:text-[15px]">
              <li>Info@cityquest.in</li>
              <li>+91 7397 534 555</li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="mb-6 md:mb-0">
            <h2 className="font-bold text-[14px] mb-2 xs:text-[14px] lg-sm:text-[18px] custom-change:text-[20px]">Follow Us</h2>
            <ul className="text-[11px] xs:text-[12px] leading-[30px] xs:font-[500] lg-sm:text-[14px] custom-change:text-[15px]">
              <li>Facebook</li>
              <li>Instagram</li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h2 className="font-bold text-[14px] mb-2 xs:text-[14px] lg-sm:text-[18px] custom-change:text-[20px]">Policies</h2>
            <ul className="text-[11px] xs:text-[12px] leading-[30px] xs:font-[500] lg-sm:text-[14px] custom-change:text-[15px]">
              <li>Terms of Usage</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Text for Small Screens */}
        <div className="block md:hidden mt-6 text-sm text-gray-500 pt-[50px] xs:-mt-[60px]">
          ©2024 CityQuest. All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
