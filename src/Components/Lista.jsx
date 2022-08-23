import React from 'react'
import { Parrafo } from './Parrafo'

const Lista = () => {
  return (
    <div className='md:w-1/2 lg:w-2/5 mx-5'>
      <h2 className='font-black text-3xl text-center mb-5'>Lista de contactos</h2>
      <div className='bg-white shadow-md px-5 py-5 rounded-lg'>
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
    </div>
  )
}

export  {Lista}