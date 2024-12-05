'use client';
import React, { useState } from "react";
import { Button } from "primereact/button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const SearchBar = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [dateRange, setDateRange] = useState([null, null]); // [startDate, endDate]
  const [startDate, endDate] = dateRange;

  const setToday = () => {
    const today = new Date();
    setDateRange([today, today]); // Set both start and end dates to today
  };

  // Example categories
  const categories = [
    { label: "Events", value: "category1" },
    { label: "Learning", value: "category2" },
    { label: "Education", value: "category3" },
    { label: "Property", value: "category4" },
    { label: "Offers", value: "category5" },
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-4 max-sm:gap-[8px] p-5 bg-black/30 rounded-lg shadow-lg  lg:gap-8 sm:mx-[90px] backdrop-blur-xl">
      {/* Category Dropdown */}
      <div className="flex items-center border border-white rounded-full overflow-hidden bg-transparent w-full sm:w-[280px] pr-4">
        <img src="/categoryicon.svg" alt="Category Icon" className="w-4 h-4 ml-3" />
        <select
          value={selectedCategory == null ? "" : selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-full bg-transparent text-white border-0 px-4 py-3 outline-none h-12"
        >
          <option value="" disabled className="text-white">
            Select Category
          </option>
          {categories.map((category) => (
            <option className="text-black" key={category.value} value={category.value}>
              {category.label}
            </option>
          ))}
        </select>
      </div>

      {/* Search Input with Icon */}
      <div className="flex items-center border border-white rounded-full bg-transparent w-full sm:w-[280px] px-4">
        <img src="/search.svg" alt="Search Icon" className="w-4 h-4 mr-3" />
        <input
          type="text"
          placeholder="Search"
          className="w-full bg-transparent text-white border-0 outline-none h-12 placeholder-white"
        />
      </div>

      {/* Date Range Picker with Icon */}
      <div className="flex items-center border border-white rounded-full bg-transparent w-full sm:w-auto px-4 gap-6 relative">
        <img src="/calendar.svg" alt="Calendar Icon" className="w-4 h-4 mr-3" />
        <DatePicker
          selectsRange
          startDate={startDate}
          endDate={endDate}
          onChange={(update) => setDateRange(update)}
          dateFormat="dd/MM/yyyy"
          placeholderText="dd/mm/yyyy - dd/mm/yyyy"
          className="w-full bg-transparent text-white outline-none border-0 h-12 placeholder-white"
          popperClassName="react-datepicker-popper"
          portalId="datepicker-portal" // Ensures it's rendered in a fixed container
        />

        {/* Today Button for Large Screens */}
        <button
          onClick={setToday}
          className="px-6 py-1 text-purple-500 bg-white  border-0 rounded-full hover:bg-purple-500 hover:text-white transition w-full sm:w-auto sm:mt-0 mt-2 sm:block hidden"
        >
          Today
        </button>
      </div>

      {/* Today Button for Small Screens */}
      <button
        onClick={setToday}
        className="px-6 py-1 text-purple-500 bg-white  border-0 rounded-full hover:bg-purple-500 hover:text-white transition w-full sm:w-auto sm:mt-0 mt-2 sm:hidden"
      >
        Today
      </button>

      {/* Search Button */}
      <Button
        label="Search"
        className="w-full sm:w-auto px-10 py-2 text-lg tracking-wide bg-purple-600 text-white rounded-full hover:bg-purple-700"
      />
    </div>
  );
};
