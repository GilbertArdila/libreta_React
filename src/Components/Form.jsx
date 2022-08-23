import React from 'react'
import {Input} from'../Components/Input'
const Form = () => {
  return (
    <div className='md:w-1/2 lg:w-2/5 mx-5'>
      <h2 className='font-black text-3xl text-center mb-5'>Ingresa tus contactos</h2>

      <form className='bg-white shadow-md rounded-md py-10 px-5'>
        <Input
          inputName={'nombre'}
          inputText={'Nombre'}
          inputType={'text'}
          inputPlaceholder={'Nombre aquí...'}
         
        />

        <Input
          inputName={'apellido'}
          inputText={'Apellido'}
          inputType={'text'}
          inputPlaceholder={'Apellido aquí...'}
          
        />

        <Input
          inputName={'email'}
          inputText={'E-mail'}
          inputType={'mail'}
          inputPlaceholder={'E-mail aquí...'}
          
        />

        <Input
          inputName={'telefono'}
          inputText={'Telefono'}
          inputType={'number'}
          inputPlaceholder={'Telefono aquí...'}
          
        />

        <Input
          inputName={'cumpleaños'}
          inputText={'Cumple años'}
          inputType={'date'}
          inputPlaceholder={''}
          
        />

        <textarea
        placeholder='Ingresa una descripción para el contacto'
        type='text'
        className='border-2 w-full p-2 mt-2 rounded-md placeholder-grey-400'
        />

        <input
         type='submit'
         className='bg-blue-600 w-full p-3 text-white uppercase font-bold rounded-md hover:bg-blue-800 transition-colors cursor-pointer ' 
         value={'Crear Contacto'}
        />
      </form>
    </div>
  )
}

export { Form}