import React from 'react'
import {Parrafo} from'../ComponentsOfComponents/Parrafo'
import { Button } from '../ComponentsOfComponents/Button'

const Contactos = ({contacto,
  setContacto,eliminarContacto
  
 }) => {
 const{nombre,apellido,mail,telefono,cumpleanios,descripcion,id}=contacto

 const handleEliminar=(id)=>{
  const confirmacion=confirm('Eliminar contacto ¿seguro? 😱');
  confirmacion?eliminarContacto(id):null;
 }
 
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

       <div className='flex flex-row w-3/4 h-auto justify-between'>
        {/* {en el onClick estamos enviando los datos del contacto al arreglo contacto que creamos en el App.jsx} */}
        <Button className='bg-yellow-300 font-semibold text-white ml-1.5 border-2 border-solid rounded-md  p-2 w-24 hover:bg-yellow-500' type='button'
        onClick={()=>setContacto(contacto)}
         text={"Actualizar"}
         />

         <Button className='bg-red-500 font-semibold text-white mr-1.5 border-2 border-solid rounded-md p-2 w-24 hover:bg-red-700' type='button'
         onClick={()=>handleEliminar(id)}
         text={"Borrar"}/>
       </div>
       </div>  
  )
 

  
}

export {Contactos}