import React from 'react'
import { Contactos } from './Contactos'

const Lista = ({ contactos, setContacto, eliminarContacto }) => {




  return (
    <>
      {contactos && contactos.length ? <h2 className='font-black text-3xl text-center mb-5'>Lista de contactos</h2> : null}
      <div className='md:w-1/2 lg:w-2/5 mx-5 mb-10 h-screen overflow-y-scroll'>
        {contactos && contactos.length ? (
        <>
          {contactos.map((contacto) => {
            return (
              <Contactos
                contacto={contacto}
                key={contacto.id}
                setContacto={setContacto}
                eliminarContacto={eliminarContacto}

              />

            )
          })}</>) : <p className='font-bold text-4xl text-center tracking-wider'>No tienenes contactos aún</p>}


      </div>
    </>

  )
}

export { Lista }