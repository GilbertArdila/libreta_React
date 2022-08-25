import React from 'react'
import { Parrafo } from './Parrafo'
const Contactos = ({contactos}) => {
 
 

  return (
    <>
    {contactos.length>0 &&
         

          <div className='bg-white shadow-md px-5 py-5 rounded-lg md:h-screen overflow-scroll'>
          <Parrafo
            text={`Nombre:${' '}`}
            textComplement={contactos[0].nombre.toUpperCase()}
            
          />
      
          <Parrafo
            text={`Apellido:${' '}`}
            textComplement={contactos[0].apellido.toUpperCase()}
          />
      
          <Parrafo
            text={`Mail:${' '}`}
            textComplement={contactos[0].mail}
          />
      
          <Parrafo
            text={`Telefono:${' '}`}
            textComplement={contactos[0].telefono}
          />
      
          <Parrafo
            text={`Cumpleaños:${' '}`}
            textComplement={contactos[0].cumpleanios}
          />
      
          <Parrafo
             text={`Descripción:${' '}`}
             textComplement={contactos[0].descripcion.toUpperCase()}
          />
        </div> 
    
   
      
      
      
    
    }
    {!contactos.length &&
         

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