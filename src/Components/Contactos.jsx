import React from 'react'
import {Parrafo} from'../Components/Parrafo'

const Contactos = ({contacto}) => {
 const{nombre,apellido,mail,telefono,cumpleanios,descripcion}=contacto
  return (
    <div className='bg-white shadow-md px-5 py-5 rounded-lg  mt-5' >
         <Parrafo>
        <p className='font-bold mb-3 text-gray-700 uppercase'>{`Nombre:${' '}`}<span className='font-normal normal-case'>{nombre.toUpperCase()}</span></p>
        </Parrafo>

       <Parrafo>
       <p className='font-bold mb-3 text-gray-700 uppercase'>{`Apellido:${' '}`}<span className='font-normal normal-case'>{apellido.toUpperCase()}</span></p>
       </Parrafo>
   
       <Parrafo>
       <p className='font-bold mb-3 text-gray-700 uppercase'>{`Mail:${' '}`}<span className='font-normal normal-case'>{mail}</span></p>
       </Parrafo>

       <Parrafo>
       <p className='font-bold mb-3 text-gray-700 uppercase'>{`Telefono:${' '}`}<span className='font-normal normal-case'>{telefono.toUpperCase()}</span></p>
       </Parrafo>
   
       <Parrafo>
       <p className='font-bold mb-3 text-gray-700 uppercase'>{`Cumpleaños:${' '}`}<span className='font-normal normal-case'>{cumpleanios}</span></p>
       </Parrafo>
      
       <Parrafo>
       <p className='font-bold mb-3 text-gray-700 uppercase'>{`Descripción:${' '}`}<span className='font-normal normal-case'>{descripcion.toUpperCase()}</span></p>
       </Parrafo>
       </div>  
  )
 

  
}

export {Contactos}