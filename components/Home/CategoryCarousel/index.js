'use client';
import React, { useState } from "react";
import EventIcon from "../../../assets/images/eventicon.svg";
import LearnIcon from "../../../assets/images/learningicon.svg";
import PropertyIcon from "../../../assets/images/propertyicon.svg";
import MallIcon from "../../../assets/images/mallicon.svg";
import TransportIcon from "../../../assets/images/transporticon.svg";
import OfferIcon from "../../../assets/images/offericon.svg";
import ArrowIcon from "../../../assets/images/arrow.svg";
import EventIconNew from "../../../assets/images/eventiconsvgnew.svg";
import LearnIconNew from "../../../assets/images/learningiconnew.svg";
import PropIconNew from "../../../assets/images/propertyiconnew.svg";
import TransIconNew from "../../../assets/images/transporticonnew.svg";
import OfferIconNew from "../../../assets/images/offericonnew.svg";
import MallIconNew from "../../../assets/images/malliconnew.svg";

export const CategoryCarousel = () => {
  const [date, setDate] = useState(null);

  const categories = [
    { id: 1, name: "Events", icon: <EventIcon /> },
    { id: 2, name: "Learnings", icon: <LearnIcon /> },
    { id: 3, name: "Property", icon: <PropertyIcon /> },
    { id: 4, name: "Shopping Malls", icon: <MallIcon /> },
    { id: 5, name: "Transport", icon: <TransportIcon /> },
    { id: 6, name: "Offers", icon: <OfferIcon /> },
  ];

  const categories1 = [
    { id: 1, name: "Events", icon: <EventIconNew /> },
    { id: 2, name: "Learnings", icon: <LearnIconNew /> },
    { id: 3, name: "Property", icon: <PropIconNew /> },
    { id: 4, name: "Shopping Malls", icon: <MallIconNew /> },
    { id: 5, name: "Transport", icon: <TransIconNew /> },
    { id: 6, name: "Offers", icon: <OfferIconNew /> },
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-20 py-6 mt-8">
      <h2 className="text-xl sm:text-2xl font-bold mb-6">Categories</h2>

      {/* Categories for large screens */}
      <div className="hidden sm:grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 cursor-pointer">
        {categories.map((category) => (
          <div
            key={category.id}
            className="flex items-center justify-between bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg p-4 sm:p-6 hover:shadow-xl transition-shadow w-full h-[120px] sm:h-[120px]"
          >
            {/* Icon and Category Name */}
            <div className="flex items-center gap-3 sm:gap-4">
              <span className="max-sm:text-2xl text-3xl sm:text-4xl">{category.icon}</span>
              <h3 className="max-sm:text-xs text-sm sm:text-lg font-medium text-gray-700">
                {category.name}
              </h3>
            </div>
            {/* Arrow Icon */}
            <div className="flex-shrink-0">
              <ArrowIcon className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
            </div>
          </div>
        ))}
      </div>

      {/* Categories1 for small screens */}
      <div className="grid sm:hidden grid-cols-2 gap-4 cursor-pointer">
        {categories1.map((category) => (
          <div
            key={category.id}
            className="flex items-center justify-between bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg p-4 hover:shadow-xl transition-shadow w-full h-[100px]"
          >
            {/* Icon and Category Name */}
            <div className="flex items-center gap-2">
              <span className="w-6 h-6">{category.icon}</span>
              <h3 className="text-xs font-medium text-gray-700">{category.name}</h3>
            </div>
            {/* Arrow Icon */}
            <div className="flex-shrink-0">
              <ArrowIcon className="w-4 h-5 text-purple-600" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
