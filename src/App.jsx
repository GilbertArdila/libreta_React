import {Header} from './Components/Header'
import {Form} from './Components/Form'
import {Lista} from './Components/Lista'
import React from 'react'


function App() {
 const [tareas, setTareas] = React.useState([])

  return (
    <div className='container mx-auto mt-20'>
      <Header></Header>
      <div className='mt-12 md:flex'>
        <Form
        tareas={tareas}
        setTareas={setTareas}
        />
      <Lista></Lista>
      </div>
      
    </div>
  )
}

export {App} 
