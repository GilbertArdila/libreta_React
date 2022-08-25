import React from 'react'
import { Parrafo } from './Parrafo'
const Contactos = ({tareas}) => {
 
 

  return (
    <>
    {tareas.length>0 &&
         

          <div className='bg-white shadow-md px-5 py-5 rounded-lg md:h-screen overflow-scroll'>
          <Parrafo
            text={`Nombre:${' '}`}
            textComplement={tareas[0].nombre.toUpperCase()}
            
          />
      
          <Parrafo
            text={`Apellido:${' '}`}
            textComplement={tareas[0].apellido.toUpperCase()}
          />
      
          <Parrafo
            text={`Mail:${' '}`}
            textComplement={tareas[0].mail}
          />
      
          <Parrafo
            text={`Telefono:${' '}`}
            textComplement={tareas[0].telefono}
          />
      
          <Parrafo
            text={`Cumpleaños:${' '}`}
            textComplement={tareas[0].cumpleanios}
          />
      
          <Parrafo
             text={`Descripción:${' '}`}
             textComplement={tareas[0].descripcion.toUpperCase()}
          />
        </div> 
    
   
      
      
      
    
    }
    {!tareas.length &&
         

         <div className='bg-white shadow-md px-5 py-5 rounded-lg md:h-screen overflow-scroll'>
         <Parrafo
           text={`Nombre:${' '}`}
           textComplement={''}
         />
     
         <Parrafo
           text={`Apellido:${' '}`}
           textComplement={''}
         />
     
         <Parrafo
           text={`Mail:${' '}`}
           textComplement={''}
         />
     
         <Parrafo
           text={`Telefono:${' '}`}
           textComplement={''}
         />
     
         <Parrafo
           text={`Cumpleaños:${' '}`}
           textComplement={''}
         />
     
         <Parrafo
            text={`Descripción:${' '}`}
            textComplement={''}
         />
       </div> 
   
  
     
     
     
   
   }
    
    
       
    
    
    </>

    
  )
}

export {Contactos}