import React from 'react'
import { Parrafo } from './Parrafo'
const Contactos = () => {
  return (
    <div className='bg-white shadow-md px-5 py-5 rounded-lg md:h-screen overflow-scroll'>
    <Parrafo
      text={'Nombre:'}
      textComplement={'Felipe'}
    />

    <Parrafo
      text={'Apellido:'}
      textComplement={'Lopez'}
    />

    <Parrafo
      text={'Mail:'}
      textComplement={'Felipe@gmail.com'}
    />

    <Parrafo
      text={'Telefono:'}
      textComplement={'555-33-21'}
    />

    <Parrafo
      text={'Cumple años:'}
      textComplement={'1988-12-05'}
    />

    <Parrafo
      text={'Descripción:'}
      textComplement={'Felipe el novio de Angelica'}
    />
  </div>
  )
}

export {Contactos}