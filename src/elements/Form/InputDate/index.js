import React, { useState, useRef, useEffect } from "react";
import propTypes from "prop-types";

import { DateRange } from "react-date-range";

import "./index.js";
import "react-date-range/dist/style.css";
import "react-date-range/dist/theme/default.css";

import formatDate from "utils/formatDate";
import iconCalendar from "assets/images/icons/icon_calendar.svg";

export default function Date(props) {
   const { value, placeholder, name } = props;
   const [isShowed, setIsShowed] = useState(false);

   const datePickerChange = (value) => {
      const target = {
         target: {
            value: target.selection,
            name: name,
         },
      };
      props.onChange(target);
   };

   useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside);

      return () => {
         document.removeEventListener("mousedown", handleClickOutside);
      };
   });

   const refDate = useRef(null);
   const handClickOutside = (event) => {
      if (refDate && !refDate.current.contains(event.target)) {
         setIsShowed(false);
      }
   };

   const check = (focus) => {
      focus.indexOf(1) < 0 && setIsShowed(false);
   };

   const displayDate = `${value.startDate ? formatDate(value.startDate) : ""}${value.endDate ? " - " + formatDate(value.endDate) : ""}`;

   return (
      <div className={["input-date mb-3", props.outerClassname].join(" ")}>
         <div className="input-group">
            <div className="input-group-prepend bg-gray-900">
               <span className="input-group-text">
                  <img src={iconCalendar} alt="icon calendar" />
               </span>
            </div>
            <input
               readOnly
               type="text"
               className="form-control"
               value={displayDate}
               placeholder={placeholder}
               onClick={() => setIsShowed(!isShowed)}
            />

            {isShowed && (
               <div className="date-range-wrapper">
                  <DateRange
                     editableDateInputs={true}
                     onChange={datePickerChange}
                     moveRangeOnFirstSelection={false}
                     ranges={[value]}
                     onRangeFocusChange={check}
                  />
               </div>
            )}
         </div>
      </div>
   );
}

Date.props = {
   value: propTypes.object,
   onChange: propTypes.func,
   placeholder: propTypes.string,
   outerClassname: propTypes.string,
};
