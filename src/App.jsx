import { Header } from './Components/Header'
import { Form } from './Components/Form'
import { Lista } from './Components/Lista'
import React from 'react'


function App() {

  //creamos los estados para los input y las validacones
  //para poder guardar la lista de contacto
  const [contactos, setcontactos] = React.useState([])
  const [contacto, setContacto] = React.useState({})


  
//obtenemos lo que está en el localStorage
React.useEffect(() => {
 const obtenerLocalStorage=()=>{
  //si el localStorage está vacío nos envia un arreglo vacío
     const contactosLocalStorage=JSON.parse(localStorage.getItem('contactos'))  ?? [];
     setcontactos(contactosLocalStorage)
     console.log(contactosLocalStorage)
 } 

  
 obtenerLocalStorage()
},[])

  //usando localStorage
  React.useEffect(() => {
    localStorage.setItem('contactos', JSON.stringify(contactos))
    console.log(contactos)
  }, [contactos])

  //función para eliminar el contacto
const eliminarContacto = (id) => {
  //este filter va a buscar el id en el arreglo de contactos y va a copiar los demás id, no ese
  const borrarContacto = contactos.filter(contacto => contacto.id !== id)

  //pasamos el nuevo arreglo al arreglo con los contactos
  setcontactos(borrarContacto)

}

  //************************* */
  

  return (
    <div className='container mx-auto mt-4 '>
      <Header
      contactos={contactos}
      />
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
          eliminarContacto={eliminarContacto}
        />
      </div>

    </div>
  )
}

export { App } 
