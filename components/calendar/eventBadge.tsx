import React, { useState } from "react";
import { LuCalendarClock } from "react-icons/lu";
import { MdAddAlert } from "react-icons/md";
import { FaCalendarCheck, FaCalendarTimes } from "react-icons/fa";
import { Event } from "@/types/event";

export default function EventBadge({ event }: { event: Event }) {
  const [isSaved, setIsSaved] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-col items-center gap-2 px-4 py-1 rounded-md bg-bg-200 dark:bg-bg-500 ring-1 dark:ring-bg-400 ring-bg-300">
      <h3 className="text-lg font-bold">{event.title}</h3>
      <div className="flex items-center justify-between w-full gap-6 px-6">
        <span className="flex items-center gap-1">
          <LuCalendarClock size={22} />
          <h4>
            {event.startTime.slice(0, 2) + ":" + event.startTime.slice(2)} -{" "}
            {event.finishTime.slice(0, 2) + ":" + event.finishTime.slice(2)}
          </h4>
        </span>
        <button
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => setIsSaved(!isSaved)}
          className="flex items-center gap-2 group"
        >
          <MdAddAlert
            className={`${isSaved ? "hidden" : "hover:text-green-600"}`}
            size={24}
          />
          <FaCalendarCheck
            className={`${isSaved ? `${isHovered ? "hidden" : ""}` : "hidden"}`}
            size={20}
          />
          <FaCalendarTimes
            className={`${
              isSaved
                ? `${isHovered ? "hover:text-red-600" : "hidden"}`
                : "hidden"
            }`}
            size={20}
          />
        </button>
      </div>
    </div>
  );
}
