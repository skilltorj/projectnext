import { cache } from "react";
import { notFound } from "next/navigation";
import {Navbar}  from "../../components/Navbar/index"
import {HeroCarousel} from "../../components/Home/HeroCarousel/index";
import {SearchBar} from "../../components/Home/HeroCarousel/SearchBar";
import {CategoryCarousel} from "../../components/Home/CategoryCarousel/index";
import TrendingCarousel from '../../components/Trending/trending';
import Events from '../../components/Events/events.jsx';
import MockupComponent from "../../components/Mockup/MockupComponent";
import FooterComponent from "../../components/Footer/FooterComponent";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../Store/ContextProvider";


import {
  getEvents,
  getEducationFeatured,
  getHelpAndSupport,
} from "../../services/index";

export const dynamic = "force-dynamic"; // Dynamic rendering


export default async function HomePage() {
  
  const token = ""; // Replace with logic to dynamically fetch token
  const city = ""; // Replace with logic to dynamically fetch city
  const dateFrom = new Date().toISOString();

  // const { user, homePage, homePageDispatch, helpAndSupportDispatch } =
  //   useContext(Context);
  // const { learnings, trending } = homePage;

  

  // Fetch data server-side
  const [events, offers, featured, education, helpAndSupport] = await Promise.all([
    getEvents({ dateFrom, city }, "events", token),
    getEvents({ limit: 15, city }, "offers", token),
    getEvents({ dateFrom, limit: 20, city }, "featured", token),
    getEducationFeatured(token),
    getHelpAndSupport(),
  ]);

  // Transform featured data as in your old logic
  const transformedFeature = featured
    ? featured.map((item: { content: any; type: any; }) => ({
        ...item.content,
        categoryType: item.type,
      }))
    : [];

  return (
    <div>
      <Navbar />
      <div className="relative w-full">
        <HeroCarousel featured={transformedFeature} />
        <div className="absolute bottom-[80px] max-sm:bottom-[20px] w-full px-4 max-sm:px-6 z-20">
          <SearchBar />
        </div>
      </div>
      <CategoryCarousel />
      <TrendingCarousel />
      <Events />
      <br />
      <MockupComponent />
      <FooterComponent />
    </div>
  );
}