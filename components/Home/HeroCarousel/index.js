import React, { useState, useEffect } from "react";
import { Carousel } from "primereact/carousel";
import { products } from "../../../constants/products";
import CustomCarousel from "../HeroCarousel/CustomCarousel";

export const HeroCarousel = () => {
 

  return (
    <div className="relative w-full">
       <CustomCarousel products={products} autoplayInterval={4000} />

    </div>
  );
};
