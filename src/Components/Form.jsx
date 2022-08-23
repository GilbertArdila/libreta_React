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
      </form>
    </div>
  )
}

export { Form}