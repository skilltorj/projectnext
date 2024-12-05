'use client';
import React, { useRef, useState, useEffect } from 'react';
import { FaMapMarkerAlt, FaCalendarAlt, FaClock, FaHeart } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import { Pagination, Navigation, EffectCoverflow } from 'swiper/modules';
import { getEvents } from '../../services/index';
const TrendingCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [liked, setLiked] = useState(false);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [trends, setTrends] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);
  useEffect(() => {
    // Fetch events from the API
    const fetchEvents = async () => {
      try {
        const payload = {
          dateFrom: null,
          dateTo: null,
          limit:10,
        };
        const type = "trending";
        const data = await getEvents(payload, type, null);
       
        // Update the events state
        setTrends(data || []);
       
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);



  useEffect(() => {
   console.log("eventysssss",trends)
  }, []);


  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }



  return (
    <div className="container px-5 md:px-6 lg:px-2 mt-[60px] mb-[20px] overflow-hidden">
      <h1 className="text-xl sm:text-sm md:text-3xl font-bold mb-6 md:ml-[100px]">Trending</h1>
      <div className="flex flex-col lg:flex-row lg:space-x-8 items-start justify-center">
        <div className="w-full lg:w-2/5 mb-4 lg:mb-0 relative p-[10px]">
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
            {trends.map((item, index) => (
              <SwiperSlide key={index} className="custom-swiper-slide">
                <img
                  src={item.content.poster || '/path/to/fallback-image.jpg'}
                  alt={`slide_image_${index + 1}`}
                  className="cursor-pointer border_gray w-full h-[200px] md:h-[300px] bg-white rounded-lg p-5 border border-gray-100"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex-col space-y-2 transition-opacity duration-500 ease-in-out xss:space-x-10">
          <div className="flex justify-between">
            <button className="border-2 p-1 text-sm lg:text-base text-[#6F33C0] px-4 bg-[#6338A124] xs:ml-8">
              {trends[activeIndex]?.content?.name || 'Unknown Category'}
            </button>
            <button
              onClick={() => setLiked(!liked)}
              className={`relative py-3 px-3 rounded-full transition-colors duration-300
                ${liked ? 'bg-[#DDD3E9]' : 'hover:bg-[#DDD3E9]'}
              `}
            >
              <FaHeart className="text-[#6338A1] transition-colors duration-300" />
            </button>
          </div>
          <h1 className="text-lg lg:text-2xl font-semibold text-[#2A2A2A] line-clamp-1">
            {trends[activeIndex]?.content.name || 'No Title Available'}
          </h1>
                      <h3
              className="text-sm lg:text-base text-[#6E6E6E] line-clamp-2"
              dangerouslySetInnerHTML={{
                __html: trends[activeIndex]?.content.description
                  ? trends[activeIndex].content.description
                  : "No Description Available",
              }}
            ></h3>

          <p className="flex items-center text-sm lg:text-base text-[#6E6E6E]">
            <FaMapMarkerAlt className="mr-2 text-lg text-[#2A2A2A]" />
            {trends[activeIndex]?.content.address || 'No Location Available'}
          </p>
          <div className="flex items-center text-sm lg:text-base text-[#2A2A2A] font-medium relative top-3">
            <FaCalendarAlt className="mr-2 text-lg text-[#2A2A2A]" />
            {trends[activeIndex]?.date || 'No Date Available'}
          </div>
          <div className="flex items-center text-sm lg:text-base text-[#2A2A2A] font-medium relative top-3">
            <FaClock className="mr-2 text-lg text-[#2A2A2A]" />
            {trends[activeIndex]?.time || 'No Time Available'}
          </div>
          <div className="flex space-x-4 justify-between">
            <button className="border-2 p-1 px-10 py-2 text-sm lg:text-base rounded-3xl text-[#6F33C0] mb-12 mt-8">
              <a>View</a>
            </button>
            <div className="space-x-3 mt-8 mb-6">
              <button
                className="border-2 w-8 h-8 rounded-full items-center justify-center shadow-md border-[#E0E0E0] shadow-[#9E9E9E]"
                ref={prevRef}
              >
                <span className="arrow prev text-[16px] font-bold leading-none pb-4 text-[#2A2A2A]">❮</span>
              </button>
              <button
                className="border-2 w-8 h-8 rounded-full items-center justify-center shadow-md border-[#E0E0E0] shadow-[#9E9E9E]"
                ref={nextRef}
              >
                <span className="arrow next text-[16px] font-bold leading-none pb-4 text-[#2A2A2A]">❯</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TrendingCarousel;