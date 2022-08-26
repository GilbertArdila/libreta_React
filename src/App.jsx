import {Header} from './Components/Header'
import {Form} from './Components/Form'
import {Lista} from './Components/Lista'
import React from 'react'


function App() {
 const [contactos, setcontactos] = React.useState([])

  return (
    <div className='container mx-auto mt-20 '>
      <Header></Header>
      <div className='mt-12 md:flex'>
        
        <Form
        contactos={contactos}
        setcontactos={setcontactos}
        />
        
      <Lista
      contactos={contactos}
      />
        
      
        
     
      </div>
      
    </div>
  )
}

export {App} 
