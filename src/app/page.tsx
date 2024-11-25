'use client';
import Image from "next/image";
import {Navbar}  from "../../components/Navbar/index"
import {HeroCarousel} from "../../components/Home/HeroCarousel/index";
import {SearchBar} from "../../components/Home/HeroCarousel/SearchBar";
import {CategoryCarousel} from "../../components/Home/CategoryCarousel/index";
import TrendingCarousel from '../../components/Trending/trending';
import Events from '../../components/Events/events.jsx';
import MockupComponent from "../../components/Mockup/MockupComponent";
import FooterComponent from "../../components/Footer/FooterComponent";

export default function Home() {
  return (
   
    <><Navbar />
    
    <div className="relative w-full">
  <HeroCarousel />
  <div className="absolute bottom-[80px] max-sm:bottom-[20px] w-full px-4 max-sm:px-6 z-20">
    <SearchBar />
  </div>
</div>



        <CategoryCarousel/>
        <TrendingCarousel />
        <Events />
         <MockupComponent />
         <FooterComponent />
    
    </>



  );
}
