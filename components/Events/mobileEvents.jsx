import React, { useState, useEffect } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
const MobileEvents = ({ eventImages, currentIndex, visibleImages, prevSlide, nextSlide }) => {
  const [eventTitle, setEventTitle] = useState(eventImages[currentIndex]?.title ?? "")
  const [eventContent, setEventContent] = useState(eventImages[currentIndex]?.description ?? "")
  const [eventDate, setEventDate] = useState(eventImages[currentIndex]?.from ?? "");
  const [eventTime, setEventTime] = useState(eventImages[currentIndex]?.to ?? "");
  const [locate, setLocate] = useState(eventImages[currentIndex]?.area_1 ?? "")
  const location = '/location_img.png';
  if (eventImages.length === 0) {
    return <div className="block lg:hidden">No events available</div>;
  }
  useEffect(() => {
    if (eventImages[currentIndex]) {
      setEventTitle(eventImages[currentIndex].title ?? "")
      setEventContent(eventImages[currentIndex].description ?? "")
      setEventDate(formatDate(eventImages[currentIndex].from) ?? "");
      setEventTime(formatDate(eventImages[currentIndex].to) ?? "");
      setLocate(eventImages[currentIndex].area_1 ?? "")
    }
  }, [currentIndex, eventImages]);
  useEffect(() => {
    console.log("event date", eventDate)
  }, [eventDate]);
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return "";
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
    const month = date.toLocaleString("default", { month: "short" });
    const year = date.getFullYear();
    return `${dayWithSuffix} ${month} ${year}`;
  };
  const getNextImages = (startIndex, count) => {
    const result = [];
    let index = startIndex;
    for (let i = 0; i < count; i++) {
      index = (index + 1) % eventImages.length;
      result.push(eventImages[index]);
    }
    return result;
  };
  const nextImages = getNextImages(currentIndex, 3);
  return (
    <div className="block lg:hidden">
      <div className="relative mx-auto overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center px-4 mb-4">
          <h1 className="font-bold text-xl md:text-3xl">Events</h1>
          <button className="text-[#6338A1] rounded-3xl border border-[#6338A1] px-4 py-1">
            View all
          </button>
        </div>
        {/* Main Image */}
        <div className="w-full">
          <img
            src={eventImages[currentIndex].poster}
            className="w-full h-[250px] md:h-[300px] lg:h-[500px] rounded-3xl object-cover p-[10px]"
            alt="Main Event"
          />
          {/* Thumbnails */}
          <div className="relative">
            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute top-12 right-12 transform -translate-y-1/2 bg-white text-black w-6 h-6 rounded-full shadow-md shadow-gray-500 flex items-center justify-center z-10"
            >
              &#8249;
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-12 right-4 transform -translate-y-1/2 bg-white text-black w-6 h-6 rounded-full shadow-md shadow-gray-500 flex items-center justify-center z-10"
            >
              &#8250;
            </button>
            {/* Thumbnails Row */}
            <div className="flex justify-center overflow-hidden px-3 space-x-1 mx-3">
              {nextImages.map((image) => (
                <img
                  key={image.id}
                  src={image.poster}
                  alt={image.alt}
                  className="w-full h-[70px] md:h-[120px] rounded-lg object-cover"
                />
              ))}
            </div>
          </div>
        </div>
        {/* Event Details */}
        <div className="mt-6 px-4">
          <div className="flex items-center justify-between">
            {/* Title */}
            <h1 className="font-bold text-sm md:text-2xl whitespace-nowrap overflow-hidden text-ellipsis max-w-[60%]">
              {eventTitle}
            </h1>
            {/* Location */}
            <p className="flex items-center text-[10px] sm:text-sm md:text-base text-[#6E6E6E] max-w-[40%]">
              <img src={location} className="mr-1 h-4 md:h-6" alt="location icon" />
              <span className="truncate">{locate}</span>
            </p>
          </div>
          <p className="text-sm md:text-base text-gray-500 mt-2 line-clamp-3">
            {eventContent}
          </p>
          <div className="flex flex-wrap md:flex-nowrap justify-between items-center gap-2 mt-4 mb-6">
            {/* Paragraph Div */}
            <div className="flex flex-wrap gap-2 ">
              <p className="flex-shrink-0 bg-[#DDD3E9] text-[#6338A1] w-[100px] text-[10px] font-semibold md:text-sm py-2 px-3 md:py-2 md:px-4 rounded-lg">
                {eventDate}
              </p>
              <p className="flex-shrink-0 bg-[#DDD3E9] text-[#6338A1] w-[100px] text-center text-[10px] font-semibold md:text-sm py-2 px-3 md:py-2 md:px-4 rounded-lg ">
                {eventTime}
              </p>
            </div>
            {/* Button Div */}
            <div>
              <button className="bg-[#6338A1] text-white text-[12px] font-semibold md:text-sm py-1 px-2 mr-[-12px] md:py-2 md:px-6 rounded-3xl">
                View Event
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MobileEvents;
