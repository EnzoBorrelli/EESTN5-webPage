import React from 'react'
import { LuCalendarClock } from "react-icons/lu";
import { FaHeartCirclePlus } from "react-icons/fa6";

export default function EventBadge({event}:{event:string}) {
  return (
<div className='bg-bg-200 ring-1 ring-bg-300 flex flex-col gap-2 items-center py-1 px-4 rounded-md'>
    <h3 className='font-bold text-lg'>title: {event}</h3>
    <div className='flex items-center gap-6'>
        <span className='flex gap-1 items-center'><LuCalendarClock size={22} /><h4>13:00 - 14:00</h4></span>
        <button className='flex gap-2 items-center'>
            <FaHeartCirclePlus  size={22}/>
        </button>
    </div>
</div>
  )
}
