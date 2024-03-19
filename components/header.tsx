import React from 'react'
import ThemeBtn from './header/themeSwitch'
export default function Header() {
  return (
    <header className='flex justify-between w-full px-8 py-4 h-fit'>
      <nav className='flex gap-4'>
        <h1 className='text-lg font-bold'>E.E.S.T N°5</h1>
        <ul className='flex flex-col items-center justify-center bg-bg-200'>
          <h2 className='text-lg font-bold'>Nosotros</h2>
          <li>Institucion</li>
          <li>Autoridades</li>
          <li>Profesores</li>
          <li>Pasantias</li>
          <li>Cooperadora</li>
        </ul>
        <ul className='flex flex-col items-center bg-bg-200'>
          <h2 className='text-lg font-bold'>Especialidades</h2>
          <li>Electronica</li>
          <li>Electromecanica</li>
          <li>Automotor</li>
        </ul>
        <ul className='flex flex-col items-center bg-bg-200'>
          <h2 className='text-lg font-bold'>Otros</h2>
          <li>Actividades</li>
          <li>Proyectos</li>
          <li>Testimonios</li>
        </ul>
        <ul className='flex flex-col items-center bg-bg-200'>
          <h2 className='text-lg font-bold'>Redes Sociales</h2>
          <li>IG</li>
          <li>FB</li>
          <li>TW</li>
          <li>In</li>
          <li>Wp</li>
        </ul>
        <h2 className='text-lg font-bold'>Novedades</h2>
      </nav>
      <div><ThemeBtn/></div></header>
  )
}
