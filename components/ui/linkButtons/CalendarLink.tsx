import Link from 'next/link'
import React from 'react'
import { IoCalendarNumberSharp } from "react-icons/io5";
import NavLabel from './navLabel'

export default function CalendarLink() {
  return (
    <Link className="flex items-center gap-1 justify-center group" href="/calendario">
    <i className="transition-transform duration-200 group-hover:scale-125">
      <IoCalendarNumberSharp size={20} />
    </i>
    <NavLabel label="Calendario"/>
  </Link>
  )
}
