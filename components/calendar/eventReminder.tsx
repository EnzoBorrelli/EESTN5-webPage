"use client";
import React, { useState } from "react";
import { FaCalendarTimes } from "react-icons/fa";
import { FaCalendarCheck } from "react-icons/fa6";
import { MdAddAlert } from "react-icons/md";

const EventReminder = () => {
  const [isSaved, setIsSaved] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      {isSaved ? (
        <button
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => setIsSaved(false)}
          className="flex items-center gap-2 group"
        >
          <FaCalendarCheck
            className={`${isHovered ? "hidden" : ""}`}
            size={20}
          />
          <FaCalendarTimes
            className={`${isHovered ? "hover:text-red-600" : "hidden"}`}
            size={20}
          />
        </button>
      ) : (
        <button
          onClick={() => setIsSaved(true)} // Llama a la función de adición
          className="flex items-center gap-2 group"
        >
          <MdAddAlert
            className={`${isSaved ? "hidden" : "hover:text-green-600"}`}
            size={24}
          />
        </button>
      )}
    </>
  );
};

export default EventReminder;
