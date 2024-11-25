import React, { useRef, useState } from "react";
import { Calendar } from "primereact/calendar";
import Image from "next/image";

function DaterangePicker({
  value,
  onChange,
  clearDateSelection,
  isCalenderDisable,
  categoryName
}) {
  const [dates, setDates] = useState(null);
  const cal = useRef(null);

  const handleDateSelection = (e) => {
    onChange(e.value);
    e?.value[1] && cal.current?.hideOverlay(cal);
  };

  return (
    <div
      className="filterform__date"
      style={{ cursor: isCalenderDisable ? "not-allowed" : "pointer" , visibility : (categoryName == "Education" || categoryName == "Property") ? "hidden" : "" }}
    >
      {/* <Image src={calender} alt="calander" /> */}
      <label
        htmlFor="calender"
        style={{
          marginLeft: "10px",
          cursor: isCalenderDisable ? "not-allowed" : "pointer",
        }}
      >
        <p className="small__grey__text">Select Date</p>
        <span className="flex__align__center">
          <Calendar
            id="daterange"
            value={value}
            onChange={handleDateSelection}
            selectionMode="range"
            placeholder="dd/mm/yy"
            className="bold"
            dateFormat="dd/mm/y"
            disabled={isCalenderDisable}
            ref={cal}
          />
          {value && value.length > 0 && (
            <div onClick={clearDateSelection} className="clear__date pointer">
              <Image
                src={"/closeIcon.png"}
                alt="close"
                width={15}
                height={15}
              />
            </div>
          )}
        </span>
      </label>
    </div>
  );
}

export default DaterangePicker;
