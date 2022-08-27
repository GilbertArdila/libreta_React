import {Header} from './Components/Header'
import {Form} from './Components/Form'
import {Lista} from './Components/Lista'
import React from 'react'


function App() {
  //para poder guardar la lista de contacto
 const [contactos, setcontactos] = React.useState([])
 //este arreglo de contacto es para poder usar el actualizar
  const [contacto, setContacto] = React.useState({})
 
 
//************************* */


  return (
    <div className='container mx-auto mt-20 '>
      <Header></Header>
      <div className='mt-12 md:flex'>
        
        <Form
        contactos={contactos}
        setcontactos={setcontactos}
        contacto={contacto}
        setContacto={setContacto}
       
      
        
        />
        
      <Lista
      contactos={contactos}
      setContacto={setContacto}
      
     
      />
        
      
        
     
      </div>
      
    </div>
  )
}

export {App} 
