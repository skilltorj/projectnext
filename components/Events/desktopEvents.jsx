import React, { useState, useEffect } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
const DesktopEvents = ({ eventImages, currentIndex, visibleImages, prevSlide, nextSlide }) => {
  const [eventTitle, setEventTitle] = useState(eventImages[currentIndex].title)
  const [eventContent, setEventContent] = useState(eventImages[currentIndex].description)
  const [eventDate, setEventDate] = useState(eventImages[currentIndex].from);
  const [eventTime, setEventTime] = useState(eventImages[currentIndex].to);
  const [locate, setLocate] = useState(eventImages[currentIndex].area_1)
  const location = '/location_img.png';
  // const leftArrow = '/leftArrow.png';
  // const rightArrow = '/rightArrow.png'
  // Update date and time whenever the currentIndex changes
  useEffect(() => {
    setEventTitle(eventImages[currentIndex].title)
    setEventContent(eventImages[currentIndex].description)
    setEventDate(formatDate(eventImages[currentIndex].from)); // Format the date here
    setEventTime(formatDate(eventImages[currentIndex].to));
    setLocate(eventImages[currentIndex].area_1)

    
  }, [currentIndex, eventImages]);


  useEffect(() => {
console.log("event date",eventDate)
  },[]);


  const formatDate = (dateString) => {
    const date = new Date(dateString);
  
    // Get the day with an ordinal suffix (e.g., 1st, 2nd, 3rd)
    const day = date.getDate();
    const dayWithSuffix =
      day +
      (day % 10 === 1 && day !== 11
        ? "st"
        : day % 10 === 2 && day !== 12
        ? "nd"
        : day % 10 === 3 && day !== 13
        ? "rd"
        : "th");
  
    // Get the month abbreviation (e.g., Jan, Feb, Mar)
    const month = date.toLocaleString("default", { month: "short" });
  
    // Get the year
    const year = date.getFullYear();
  
    return `${dayWithSuffix} ${month} ${year}`;
  };
  

  
  return (
    <div className="hidden lg:block mx-[80px]">
      <div className="container mx-auto px-4 md:mt-[20px]">
        <div className="flex justify-between">
          <h1 className="font-bold text-xl md:text-3xl">Events</h1>
          <button className="mr-[200px] text-[#6338A1] rounded-3xl border border-[#6338A1] w-[130px] ml-[80px] md:ml-0 ls:mr-[6px]">
            View all
          </button>
        </div>
        <div className="border_gray lg:flex overflow-hidden mt-6 p-5 pr-5 w-full mx-0 px-0 rounded-lg xss:p-8 ">
          <img
            src={eventImages[currentIndex].poster}
            className="rounded-xl w-[356px] h-[248px] md:w-[500px] md:h-[574px] xss:w-[300px] xss:h-[370px] ls:ml-6 ls:w-[450px] ls:h-[490px]"
            alt="Main Event"
          />
          <div className=" md:w-auto lg:w-auto ls:ml-[30px] xss:p-6 xss:text-[10px] mb-[-50px]">
          <div className="flex justify-between mt-8 md:w-auto xss:mt-[-26px]">
              <h1 className="font-bold text-3xl xss:text-xl ls:text-2xl xss:text-[14px] xss:mb-[-30px] min-h-[70px]">{eventTitle}</h1>
              <p className="flex items-center ls:text-sm lg:text-base text-[#6E6E6E] xss:text-[10px] xss:mr-[-40px] whitespace-nowrap">
                <img src={location} className="mr-2 text-lg xss:h-3 ls:h-5 xss:mr-1" />
                {locate}
              </p>
            </div>
            <p className="ls:text-xl text-gray-500 relative top-[40px] line-clamp-2 xss:text-[14px]">
              {eventContent}
            </p>
            <div className="flex justify-between ls:relative ls:top-[60px] xss:relative xss:top-[60px]">
              <div>
                <p className="inline-block bg-[#DDD3E9] text-[#6338A1] font-bold p-4 ls:text-[14px] rounded-lg ls:w-[148px] xss:w-[100px] ls:text-start" >
                  {eventDate}
                </p>
                <p className="inline-block bg-[#DDD3E9] text-[#6338A1] font-bold p-4 ls:text-[14px] rounded-lg ls:w-[154px] xss:w-[100px] ls:text-start ml-4 pl-8"
                  >
                  {eventTime}
                </p>
              </div>
              <div>
                <button className="bg-[#6338A1] text-white p-2 rounded-3xl px-8 mt-[20px] ls:text-[14px]">
                  View Event
                </button>
              </div>
            </div>
            <div className="carousel lg:w-1/2 flex items-center xss:mt-[-22px] ls:mt-12">
              {visibleImages.map((image) => (
                <img
                  key={image.id}
                  src={image.poster}
                  alt={image.alt}
                  className="rounded-2xl w-[120px] p-[10px] h-[270px] mt-[90px] md:h-[274px] md:w-[300px] object-cover xss:w-[130px] xss:h-[150px] ls:ml-[-8px] ls:w-[220px] ls:h-[230px] transform transition-transform duration-500 ease-in-out"
                />
              ))}
              <div className="flex ml-2 mt-[280px] md:w-auto xss:relative xss:bottom-[44px] ls:ml-[40px] ls:relative ls:top-[-10px]">
                <button
                  onClick={prevSlide}
                  className="bg-white text-black p-3 py-1 rounded-3xl h-[32px] shadow-lg shadow-blue-500/50"
                >
                  ❮
                </button>
                <button
                  onClick={nextSlide}
                  className="bg-white text-black p-3 py-1 rounded-3xl h-[32px] ml-3 shadow-lg shadow-blue-500/50"
                >
                  ❯
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DesktopEvents;
