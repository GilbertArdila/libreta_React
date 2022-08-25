import React from 'react'
import { Contactos } from './Contactos'

const Lista = ({tareas}) => {
  
  return (
    <div className='md:w-1/2 lg:w-2/5 mx-5 mb-10'>
      <h2 className='font-black text-3xl text-center mb-5'>Lista de contactos</h2>
      <Contactos
        tareas={tareas}
      />
    </div>
  )
}

export  {Lista}