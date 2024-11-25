import React, { useState, useEffect } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const DesktopEvents = ({ eventImages, currentIndex, visibleImages, prevSlide, nextSlide }) => {
  const [eventTitle, setEventTitle] = useState(eventImages[currentIndex].title)
  const [eventContent, setEventContent] = useState(eventImages[currentIndex].content)
  const [eventDate, setEventDate] = useState(eventImages[currentIndex].date);
  const [eventTime, setEventTime] = useState(eventImages[currentIndex].time);

  // Update date and time whenever the currentIndex changes
  useEffect(() => {
    setEventTitle(eventImages[currentIndex].title)
    setEventContent(eventImages[currentIndex].content)
    setEventDate(eventImages[currentIndex].date);
    setEventTime(eventImages[currentIndex].time);
  }, [currentIndex, eventImages]);

  return (
    <div className="hidden lg:block mx-[80px]">
      <div className="container overflow-hidden mx-auto px-4 md:mt-[20px]">
        <div className="flex justify-between">
          <h1 className="font-bold text-xl md:text-3xl">Events</h1>
          <button className="mr-[200px] text-[#6338A1] rounded-3xl border border-[#6338A1] w-[130px] ml-[80px] md:ml-0 ls:mr-[6px]">
            View all
          </button>
        </div>
        <div className="lg:flex overflow-hidden mt-6 p-5 pr-5 w-full mx-0 px-0 rounded-lg ring-4 ring-gray-100">
          <img
            src={eventImages[currentIndex].src}
            className="w-[356px] h-[248px] px-0 md:w-[500px] md:h-[574px] xs:w-[340px] xs:h-[470px] ls:w-[450px] ls:h-[524px]"
            alt="Main Event"
          />
          <div className=" md:w-auto lg:w-auto">
            <div className="flex justify-between mt-8 md:w-auto">
              <h1 className="font-bold text-3xl xs:text-xl ls:text-2xl">{eventTitle}</h1>
              <p className="flex items-center text-sm lg:text-base text-[#6E6E6E]">
                <FaMapMarkerAlt className="mr-2 text-lg text-[#2A2A2A]" />
                Codissia Ground
              </p>
            </div>
            <p className="text-xl text-gray-500 relative top-[40px] line-clamp-2 xs:text-[18px]">
              {eventContent}
            </p>
            <div className="flex justify-between relative top-[60px]">
              <div>
                <p className="inline-block bg-[#DDD3E9] text-[#6338A1] font-bold p-4 rounded-lg">
                  {eventDate}
                </p>
                <p className="inline-block bg-[#DDD3E9] text-[#6338A1] font-bold p-4 rounded-lg ml-3 px-6">
                  {eventTime}
                </p>
              </div>
              <div>
                <button className="bg-[#6338A1] text-white p-2 rounded-3xl px-8 mt-[20px]">
                  View Event
                </button>
              </div>
            </div>
            <div className="carousel w-1/2 flex items-center">
              {visibleImages.map((image) => (
                <img
                  key={image.id}
                  src={image.src}
                  alt={image.alt}
                  className="w-[120px] h-[270px] mt-[90px] md:h-[274px] md:w-[300px] object-cover xs:w-[130px] xs:h-[150px] ls:ml-[-8px] ls:w-[220px] ls:h-[230px]"
                />
              ))}
              <div className="flex ml-2 mt-[280px] md:w-auto xs:relative xs:bottom-[44px] ls:ml-[40px] ls:relative ls:top-[-10px]">
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
