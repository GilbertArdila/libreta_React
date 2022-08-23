import React from 'react'
import {Input} from'../Components/Input'
import {regex_name,regex_email,regex_phone} from './Regex'
import { Validaciones } from './Validaciones';

const Form = ({tareas,setTareas}) => {
  //creamos los estados para los input
  const [nombre,setNombre]=React.useState('');
  const [apellido,setApellido]=React.useState('');
  const [mail,setMail]=React.useState('');
  const [telefono,setTelefono]=React.useState('');
  const [cumpleanios,setCumpleanios]=React.useState('');
  const [descripcion,setDescripcion]=React.useState('');
  const [error,setError]=React.useState(false);
 

  //creanso función para el submit del formulario
  const handleSubmit=(e)=>{
    e.preventDefault();
    //validamos los campos
    if ([nombre, apellido, mail, telefono, cumpleanios, descripcion].includes('')) {
      setError(true)
      return;
    }
    
    else {
       setError(false)

      //creamos objeto con los datos
      const objetoContacto={
        nombre,
        apellido,
        mail,
        telefono,
        cumpleanios,
        descripcion
      };

      setTareas([...tareas, objetoContacto])
    }
     

     

  }

  return (
    <div className='md:w-1/2 lg:w-2/5 mx-5'>
      <h2 className='font-black text-3xl text-center mb-5'>Ingresa tus contactos</h2>

     

      <form className='bg-white shadow-md rounded-md py-10 px-5'
      onSubmit={handleSubmit}>

       {error && 
        <div className='bg-red-600 font-bold uppercase w-2 text-center text-white p-3 mb-5 rounded-md'>
          <p>No puede haber campos vacios</p>
          </div>}
        
        <Input
          inputName={'nombre'}
          inputText={'Nombre'}
          inputType={'text'}
          inputPlaceholder={'Nombre aquí...'}
          value={nombre}
          onChange={(e)=>setNombre(e.target.value)}
          className={`border-2 w-full p-2 mt-2 rounded-md placeholder-grey-400 ${regex_name.test(nombre)===false && 'border-red-400' }`}
        />
          {!regex_name.test(nombre)&& <Validaciones
           nombreCampo={'nombre'}
           texto={'el nombre debe contener al menos 3 letras y puede o no tener segundo nombre'}
          />}
          
        <Input
          inputName={'apellido'}
          inputText={'Apellido'}
          inputType={'text'}
          inputPlaceholder={'Apellido aquí...'}
          value={apellido}
          onChange={(e)=>setApellido(e.target.value)}
          className={`border-2 w-full p-2 mt-2 rounded-md placeholder-grey-400 ${regex_name.test(apellido)===false && 'border-red-400' }`}
          
        />
        {!regex_name.test(apellido)&& <Validaciones
          nombreCampo={'apellido'}
          texto={'el apellido debe contener al menos 3 letras y puede o no tener segundo apellido'}
         /> }

        <Input
          inputName={'email'}
          inputText={'E-mail'}
          inputType={'mail'}
          inputPlaceholder={'E-mail aquí...'}
          value={mail}
          onChange={(e)=>setMail(e.target.value)}
          className={`border-2 w-full p-2 mt-2 rounded-md placeholder-grey-400 ${regex_email.test(mail)===false && 'border-red-400'}`}
          
        />
        {!regex_email.test(mail) && <Validaciones
          nombreCampo={'mail'}
          texto={'dirección de correo invalida '}
         />}

        <Input
          inputName={'telefono'}
          inputText={'Telefono'}
          inputType={'number'}
          inputPlaceholder={'Telefono aquí...'}
          value={telefono}
          onChange={(e)=>setTelefono(e.target.value)}
          className={`border-2 w-full p-2 mt-2 rounded-md placeholder-grey-400 ${regex_phone.test(telefono)===false && 'border-red-400' }`}
          
        />
       {!regex_phone.test(telefono)&& <Validaciones
          nombreCampo={'telefono'}
          texto={'el número teléfonico debe contener 10 digitos, si es un número local debes ingresar el prefijo 60 + el indicativo de la ciudad por ejemplo 601 para Bogotá'}
         />}
        <Input
          inputName={'cumpleaños'}
          inputText={'Cumpleaños'}
          inputType={'date'}
          inputPlaceholder={''}
          value={cumpleanios}
          onChange={(e)=>setCumpleanios(e.target.value)}
          className={`border-2 w-full p-2 mt-2 rounded-md placeholder-grey-400 ${cumpleanios==='' && 'border-red-400' }`}
          
        />

        <textarea
        placeholder='Ingresa una descripción para el contacto'
        type='text'
        value={descripcion}
        onChange={(e)=>setDescripcion(e.target.value)}
        className={`border-2 w-full p-2 mt-2 rounded-md placeholder-grey-400 ${descripcion==='' && 'border-red-400'}`}
        
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