'use client';
import React, { useState, useEffect } from "react";
import CustomCarousel from "../HeroCarousel/CustomCarousel";
import { getEvents } from "../../../services/index";



export const HeroCarousel = ({featured}) => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const [prods, setProds] = useState([]);
	useEffect(() => {
		setProds(featured);
	}, []);

  useEffect(() => {
    // Fetch events from the API
    const fetchEvents = async () => {
      try {
        const payload = {
          dateFrom: null,
          dateTo: null,
        };
        const type = "events";
        const data = await getEvents(payload, type, null);

        // Update the events state
        setEvents(data || []);
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  // Map events to the format expected by CustomCarousel
  const carouselItems = events.map((event) => ({
    image: event.poster, // Use the `poster` field for the image
    name: event.title, // Use the `title` field for the name
    description: event.description, // Optional additional data
  }));

  return (
    <div className="relative w-full">
      {!loading && (
        <CustomCarousel products={prods} autoplayInterval={4000} />
      )}
    </div>
  );
};
