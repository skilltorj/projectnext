import React, { useState, useEffect } from "react";
import RightArrow from "../../../assets/images/rightarrow.svg";
import LeftArrow from "../../../assets/images/leftarrow.svg";

const CustomCarousel = ({ products, autoplayInterval = 4000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Handle responsive behavior
  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Autoplay behavior
  useEffect(() => {
    if (isAutoPlay) {
      const interval = setInterval(() => {
        handleNext();
      }, autoplayInterval);
      return () => clearInterval(interval);
    }
  }, [currentIndex, isAutoPlay]);

  // Move to next slide
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  // Move to previous slide
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  // Render product
  const renderProduct = (product, index) => {
    const isActive = index === currentIndex;
    return (
      <div
        key={index}
        className={`relative flex justify-center items-center lg:mx-[80px] max-sm:mx-[20px] mt-4 ${
          isActive ? "block" : "hidden"
        }`}
      >
        {/* Image */}
        <img
          src={product.image}
          alt={product.name}
          className={`w-full object-cover brightness-70 rounded-lg shadow-lg ${
            isSmallScreen ? "small-screen-height" : "md:h-[500px] lg:h-[615px]"
          }`}
        />

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {products.map((_, idx) => (
            <div
              key={idx}
              className={`h-2 w-6 rounded-full bg-gray-500 relative ${
                idx === currentIndex ? "active-dot" : "static-dot"
              }`}
            >
              {idx === currentIndex && (
                <div className="absolute h-2 bg-white rounded-full animate-dot-loading"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="relative w-full">
      {/* Render Carousel Items */}
      <div className="overflow-hidden">
        {products.map((product, index) => renderProduct(product, index))}
      </div>

      {/* Navigation Buttons */}
      <button
  onClick={handlePrev}
  className="absolute p-carousel-prev flex items-center justify-center bg-white shadow-lg"
>
  <LeftArrow className=" text-black" /> {/* Left Arrow */}
</button>
<button
  onClick={handleNext}
  className="absolute p-carousel-next flex items-center justify-center bg-white shadow-lg"
>
  <RightArrow className=" text-black" /> {/* Right Arrow */}
</button>

    </div>
  );
};

export default CustomCarousel;
