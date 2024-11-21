import React from "react";

const MockupComponent = () => {
  return (
    <>
      {/* Background container */}
      
      <div
        className="bg-[#FEF1FF] flex justify-center 
      items-center mx-4 
      lg:mx-[80px] rounded-[8px] mt-5"
      >
        {/* Responsive height container */}
        <div
          className="w-full h-[300px] sm:h-[400px] md:h-[500px] 
        lg:h-[610px] flex justify-center items-start"
        >
          <img
            src="./mockup.png"
            alt="Mockup"
            className="w-[150px] sm:w-[100px]
            md:w-[200px] lg:w-[300px] 
            h-auto pt-[48px] sm:pt-[0px] 
            md:pt-[100px] md:ml-[400px] 
            lg:pt-[90px] lg:ml-[480px]
            range-custom:w-[200px] range-custom:ml-[300px] range-custom:pt-[55px]
            "
          />
        </div>
      </div>

      
      {/* Overlay image container */}
      <div
        className="relative -top-[300px] 
      sm:-top-[400px] md:-top-[500px] 
      lg:-top-[610px] flex mx-4 lg:mx-[80px]"
      >
        {/* Rectangle Image */}
        <div className="relative w-full">
          <img
            src="./rectangle.png"
            alt="Mockup Rectangle"
            className="hidden sm:block h-[300px] sm:h-[400px] md:h-[500px] 
          lg:h-[610px] object-cover rounded-[8px]"
          />
          <div className="flex flex-col absolute inset-0 
          space-y-4 sm:space-y-6 md:space-y-1 lg:space-y-1
           items-start px-4 sm:px-8 md:px-12 range-custom:space-y-1 range-custom:pt-[95px]">
            {/* App Store Button */}
            <img
              src="./appstore.svg"
              alt="App Store"
              className=" hidden sm:block w-[80px] sm:w-[100px]
               md:w-[120px] lg:w-[200px] 
              h-auto lg:mt-[150px] md:mt-[45px]"
            />

            {/* Play Store Button */}
            <img
              src="./playstore.svg"
              alt="Play Store"
              className="hidden sm:block w-[80px] sm:w-[100px]
               md:w-[120px] lg:w-[200px] h-auto"
            />

            {/* Download Text */}
            <h1
              className="hidden sm:block text-white text-[16px] 
              sm:text-[18px]md:text-[20px] lg:text-[20px] 
              font-light leading-[24px] sm:leading-[28px]
              md:leading-[32px] lg:leading-[36px]"
            >
              Download Our App
            </h1>

            {/* Explore Text */}
            <p
              className="hidden sm:block text-white text-[20px] 
              sm:text-[24px] md:text-[28px] lg:text-[32px] 
              font-bold leading-[30px] sm:leading-[36px] 
              md:leading-[44px] lg:leading-[48px] lg:mt-10"
            style={{marginTop: '20px'}}>
              Explore what’s <br /> happening around you
            </p>
          </div>
        </div>
      </div>

      {/* Responsive rectangle1.png */}
      <div className="block sm:hidden mx-4 lg:mx-[80px] relative">
        {/* Rectangle Image */}
        <img
          src="./rectangle1.png"
          alt="Responsive Mockup"
          className="w-full h-auto object-cover rounded-[8px]"
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col items-start space-y-0.5 px-7 py-[60px]">
          {/* App Store Button */}
          <img
            src="./appstore.svg"
            alt="App Store"
            className="w-[100px] h-auto"
          />

          {/* Play Store Button */}
          <img
            src="./playstore.svg"
            alt="Play Store"
            className="w-[100px] h-auto"
          />

          {/* Download Text */}
          <h1 className="text-white text-[13px] font-[500] leading-[24px] " style={{marginTop: '-1px'}}>
            Download Our App
          </h1>

          {/* Explore Text */}
          <p className="text-white text-[20px] font-bold leading-[30px]" style={{marginTop : '20px'}}>
            Explore what’s <br /> happening around you
          </p>
        </div>
      </div>
    

      {/* Responsive Horizontal Line */}
      
{/* <div
  className="
    flex justify-center my-4 relative 
    -top-[0px] border-[1.3px] w-full mx-[20px]
    max-w-[285px]  sm:-top-[300px] xs:max-w-[337px] 
    sm-xs:max-w-[387px] md:-top-[500px] range:max-w-[400px]
    custom:max-w-[460px] range-xs:max-w-[595px] custom-xs:max-w-[570px]
    custom-md:max-w-[480px] custom-lg:max-w-[480px]
    custom-sm:max-w-[500px] custom-xl:max-w-[510px]
    range-sm:max-w-[515px] range-md:max-w-[520px]
    range-lg:max-w-[530px] range-xl:max-w-[545px]
    range-xs-sm:max-w-[555px] range-custom:-top-[400px] 
    range-custom:max-w-[600px] md-xs:max-w-[730px] 
    md-xs:-top-[500px] ms-md:max-w-[750px]
    md-ms:max-w-[770px] sm-md:max-w-[865px] 
    lg-md:max-w-[980px] lg-sm:max-w-[866px] 
    lg-sm:-top-[610px] lg-sm:mx-[80px] 
    xs-lg:max-w-[100px] xs-lg:-top-[610px] xs-lg:mx-[80px]
    custom-change:max-w-[1330px] ms:max-w-[1280px]"
>
  <div className="w-full max-w-[1500px] border-[1.3px] border-gray-300 "></div>
</div>

 */}

    </>
  );
};

export default MockupComponent;
