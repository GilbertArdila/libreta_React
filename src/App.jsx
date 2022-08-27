import {Header} from './Components/Header'
import {Form} from './Components/Form'
import {Lista} from './Components/Lista'
import React from 'react'


function App() {
 const [contactos, setcontactos] = React.useState([])
 //este arreglo de contacto es para poder usar el actualizar
  const [contacto, setContacto] = React.useState({})
  const [uploading,setUploading]=React.useState(false);
 
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
        uploading={uploading}
        setUploading={setUploading}
      
        
        />
        
      <Lista
      contactos={contactos}
      setContacto={setContacto}
      uploading={uploading}
      setUploading={setUploading}
     
      />
        
      
        
     
      </div>
      
    </div>
  )
}

export {App} 
