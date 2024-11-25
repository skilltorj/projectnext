import React, { useRef, useState, useEffect } from 'react';
import { FaMapMarkerAlt, FaCalendarAlt, FaClock, FaHeart} from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import { Pagination, Navigation, EffectCoverflow } from 'swiper/modules';

import trendingData from './trendingData';

const TrendingCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [liked, setLiked] = useState(false);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null); // Track the Swiper instance

  useEffect(() => {
    if (swiperInstance) {
      // Update navigation elements after Swiper instance is initialized
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]); // Run this effect whenever the Swiper instance is updated

  return (
    <div className="container px-5 md:px-6 lg:px-2 mt-[60px] mb-[20px] overflow-hidden">
      <h1 className="text-xl sm:text-sm md:text-3xl font-bold mb-6 md:ml-[100px]">Trending</h1>
      <div className="flex flex-col lg:flex-row lg:space-x-8 items-start justify-center">
        <div className="w-full lg:w-2/5 mb-4 lg:mb-0 relative">
          <Swiper
            effect="coverflow"
            grabCursor
            centeredSlides
            slidesPerView="auto"
            spaceBetween={0}
            loop
            coverflowEffect={{
              rotate: 0,
              stretch: 50,
              depth: 200,
              modifier: 1.4,
              slideShadows: false,
            }}
            pagination={{
              clickable: true,
              el: '.swiper-pagination',
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onSwiper={setSwiperInstance} // Capture the Swiper instance
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            breakpoints={{
              640: { slidesPerView: 1.2, spaceBetween: 80, coverflowEffect: { stretch: 250, depth: 40 } },
              768: { slidesPerView: 1.2, spaceBetween: 90, coverflowEffect: { stretch: 280, depth: 50 } },
              1024: { slidesPerView: 1.2, spaceBetween: 100, coverflowEffect: { stretch: 310, depth: 50 } },
              320: { slidesPerView: 1, spaceBetween: 50, coverflowEffect: { stretch: 200, depth: 30 } },
            }}
            modules={[Pagination, Navigation, EffectCoverflow]}
            className="swiper_container"
          >
            {trendingData.map((item, index) => (
              <SwiperSlide key={index} className="custom-swiper-slide">
                <img
                  src={item.image}
                  alt={`slide_image_${index + 1}`}
                  className="w-full h-[200px] md:h-[300px] bg-white rounded-lg p-5 shadow-lg shadow-gray-200"
                />
              </SwiperSlide>
            ))}
            {/* <div className="swiper-pagination relative mt-8"></div> */}
          </Swiper>
        </div>
        <div className="flex-col space-y-2 transition-opacity duration-500 ease-in-out xss:space-x-10">
        <div className='flex justify-between'>
              <button className='border-2 p-1 text-sm lg:text-base text-[#6F33C0] px-4 bg-[#6338A124] xs:ml-8'>
                {trendingData[activeIndex].category}
              </button>
              <button 
              onClick={() => setLiked(!liked)}
              className={`relative py-3 px-3 rounded-full transition-colors duration-300
                ${liked ? 'bg-[#DDD3E9]' : 'hover:bg-[#DDD3E9]'}
              `} > <FaHeart className='text-[#6338A1] transition-colors duration-300'/></button>
            </div>
          <h1 className="text-lg lg:text-2xl font-semibold text-[#2A2A2A]">
            {trendingData[activeIndex].title}
          </h1>
          <h3 className="text-sm lg:text-base text-[#6E6E6E]">
            {trendingData[activeIndex].description}
          </h3>
          <p className="flex items-center text-sm lg:text-base text-[#6E6E6E]">
            <FaMapMarkerAlt className="mr-2 text-lg text-[#2A2A2A]" />
            {trendingData[activeIndex].location}
          </p>
          <div className="flex items-center text-sm lg:text-base text-[#2A2A2A] font-semibold">
            <FaCalendarAlt className="mr-2 text-lg text-[#2A2A2A]" />
            {trendingData[activeIndex].date}
          </div>
          <div className="flex items-center text-sm lg:text-base text-[#2A2A2A] font-semibold">
            <FaClock className="mr-2 text-lg text-[#2A2A2A]" />
            {trendingData[activeIndex].time}
          </div>
          <div className="flex space-x-4 justify-between">
            <button className='border-2 p-1 px-10 py-2 text-sm lg:text-base rounded-3xl text-[#6F33C0] mb-12 mt-8'>
              <a>View</a>
            </button>
            <div className="space-x-3 mt-8 mb-6">
              <button
                className="border-2 w-8 h-8 rounded-full items-center justify-center shadow-md border-[#E0E0E0] shadow-[#9E9E9E]"
                ref={prevRef}
              >
                <span className="arrow prev text-2xl font-bold leading-none pb-4 text-[#2A2A2A]">
                  &#8249;
                </span>
              </button>
              <button
                className="border-2 w-8 h-8 rounded-full items-center justify-center shadow-md border-[#E0E0E0] shadow-[#9E9E9E]"
                ref={nextRef}
              >
                <span className="arrow next text-2xl font-bold leading-none pb-4 text-[#2A2A2A]">
                  &#8250;
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingCarousel;
