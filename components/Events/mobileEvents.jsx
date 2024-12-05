import React, { useState, useEffect } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import eventImages from "./eventsJson"; // Import the eventImages data

const MobileEvents = ({ currentIndex, visibleImages, prevSlide, nextSlide }) => {
  // Safeguard against undefined or out-of-bounds currentIndex
  const validEvent = eventImages[currentIndex] || {};

  // Initialize state for event details
  const [eventTitle, setEventTitle] = useState(validEvent.title || "");
  const [eventContent, setEventContent] = useState(validEvent.content || "");
  const [eventDate, setEventDate] = useState(validEvent.date || "");
  const [eventTime, setEventTime] = useState(validEvent.time || "");

  const location = "/location_img.png";

  // Update event details when currentIndex changes
  useEffect(() => {
    const newEvent = eventImages[currentIndex] || {};
    setEventTitle(newEvent.title || "Event Title");
    setEventContent(newEvent.content || "Event Description");
    setEventDate(newEvent.date || "Event Date");
    setEventTime(newEvent.time || "Event Time");
  }, [currentIndex]);

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
            src={validEvent.src}
            className="w-full h-[250px] md:h-[300px] lg:h-[500px] rounded-lg"
            alt={validEvent.alt || "Main Event"}
          />

          {/* Thumbnails */}
          <div className="relative">
            {/* Navigation Buttons */}
            <button
              onClick={() => {
                prevSlide();
              }}
              className="absolute top-12 right-12 transform -translate-y-1/2 bg-white text-black w-6 h-6 rounded-full shadow-md shadow-gray-500 flex items-center justify-center z-10"
            >
              &#8249;
            </button>
            <button
              onClick={() => {
                nextSlide();
              }}
              className="absolute top-12 right-4 transform -translate-y-1/2 bg-white text-black w-6 h-6 rounded-full shadow-md shadow-gray-500 flex items-center justify-center z-10"
            >
              &#8250;
            </button>

            {/* Thumbnails Row */}
            <div className="flex justify-center overflow-hidden px-3">
              {visibleImages.map((image, index) => (
                <img
                  key={index}
                  src={image?.src}
                  alt={image?.alt || "Thumbnail"}
                  className="w-full h-[70px] md:h-[120px] rounded-lg"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Event Details */}
        <div className="mt-6 px-4">
          <div className="flex items-center justify-between">
            {/* Title */}
            <h1 className="font-bold text-sm md:text-2xl whitespace-nowrap">{eventTitle}</h1>

            {/* Location */}
            <p className="flex items-center text-[10px] sm:text-sm md:text-base text-[#6E6E6E]">
              <img src={location} className="mr-1 h-4 md:text-lg " alt="Location" />
              Codissia Ground
            </p>
          </div>
          <p className="text-sm md:text-base text-gray-500 mt-2 line-clamp-3">
            {eventContent}
          </p>
          <div className="flex flex-wrap md:flex-nowrap justify-between items-center gap-2 mt-4 mb-6">
            {/* Paragraph Div */}
            <div className="flex flex-wrap gap-2">
              <p className="flex-shrink-0 bg-[#DDD3E9] text-[#6338A1] text-xs font-semibold md:text-sm py-2 px-3 md:py-2 md:px-4 rounded-lg">
                {eventDate}
              </p>
              <p className="flex-shrink-0 bg-[#DDD3E9] text-[#6338A1] text-xs font-semibold md:text-sm py-2 px-3 md:py-2 md:px-4 rounded-lg">
                {eventTime}
              </p>
            </div>

            {/* Button Div */}
            <div>
              <button className="bg-[#6338A1] text-white text-xs font-bold md:text-sm py-2 px-4 md:py-2 md:px-6 rounded-3xl">
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
