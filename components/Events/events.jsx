import React, { useState } from "react";
import DesktopEvents from "./desktopEvents";
import MobileEvents from "./mobileEvents";
import eventImages from "./eventsJson"; // Adjust the path as necessary

const Events = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % eventImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + eventImages.length) % eventImages.length);
  };

  const visibleImages = Array.from({ length: 3 }).map((_, i) => {
    return eventImages[(currentIndex + 1 + i) % eventImages.length];
  });

  return (
    <div>
      <DesktopEvents
        eventImages={eventImages}
        currentIndex={currentIndex}
        visibleImages={visibleImages}
        prevSlide={prevSlide}
        nextSlide={nextSlide}
      />
      <MobileEvents
        eventImages={eventImages}
        currentIndex={currentIndex}
        visibleImages={visibleImages}
        prevSlide={prevSlide}
        nextSlide={nextSlide}
      />
    </div>
  );
};

export default Events;
