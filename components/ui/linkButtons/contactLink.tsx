import Link from 'next/link'
import React from 'react'
import { MdPhone } from 'react-icons/md'
import NavLabel from './navLabel'

export default function ContactLink() {
  return (
    <Link className="flex items-center justify-center group" href="/contacto">
    <i className="transition-transform duration-200 group-hover:rotate-90">
      <MdPhone size={20} />
    </i>
    <NavLabel label="Contáctanos"/>
  </Link>
  )
}
