'use client';
import React, { useState, useEffect } from "react";
import DesktopEvents from "./desktopEvents";
import MobileEvents from "./mobileEvents";
import { getEvents } from "../../services";

const Events = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [events, setEvents] = useState([]);
  const [eventsnew, setEventsNew] = useState([]);

  const nextSlide = () => {
    if (events.length > 0) {
      setCurrentIndex((currentIndex + 1) % events.length);
    }
  };

  const prevSlide = () => {
    if (events.length > 0) {
      setCurrentIndex((currentIndex - 1 + events.length) % events.length);
    }
  };

  const visibleImages = Array.from({ length: 3 }).map((_, i) => {
    if (events.length > 0) {
      return events[(currentIndex + i) % events.length];
    }
    return null;
  });

  useEffect(() => {
    // Fetch events from the API
    const fetchEvents = async () => {
      try {
        const payload = {
          dateFrom: null,
          dateTo: null,
          limit: 20,
        };
        const type = "events";
        const data = await getEvents(payload, type, null);

        // Update the events state
        setEvents(data || []);
        setEventsNew(data || []);
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);


  useEffect(() => {


    console.log("eventsdata",events)

  },[]);

  return (
    <div>
      {loading ? (
        <p>Loading events...</p>
      ) : events.length > 0 ? (
        <>
          <DesktopEvents
            eventImages={events} // Pass dynamic data
            currentIndex={currentIndex}
            visibleImages={visibleImages}
            prevSlide={prevSlide}
            nextSlide={nextSlide}
          />
          <MobileEvents
            eventImages={events} // Pass dynamic data
            currentIndex={currentIndex}
            visibleImages={visibleImages}
            prevSlide={prevSlide}
            nextSlide={nextSlide}
          />
        </>
      ) : (
        <p>No events available.</p>
      )}
    </div>
  );
};

export default Events;
