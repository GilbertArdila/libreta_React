import React from 'react'
import {Input} from'../ComponentsOfComponents/Input'
import {regex_name,regex_apellido,regex_mail,regex_phone} from '../Regex/Regex'
import { Validaciones } from '../ComponentsOfComponents/Validaciones';
import { nameHandleBlur,apellidoHandleBlur,mailHandleBlur,phoneHandleBlur} from '../EventListener/OnBlur';
import { AlertError } from '../ComponentsOfComponents/AlertError';
import { Button } from '../ComponentsOfComponents/Button';

const Form = ({contactos,
  setcontactos,
  contacto,
  setContacto,
  uploading,
  setUploading,
 
   }) => {

  //creamos los estados para los input y las validacones
  const [nombre,setNombre]=React.useState('');
  const [apellido,setApellido]=React.useState('');
  const [mail,setMail]=React.useState('');
  const [telefono,setTelefono]=React.useState('');
  const [cumpleanios,setCumpleanios]=React.useState('');
  const [descripcion,setDescripcion]=React.useState('');
  const [error,setError]=React.useState(false);
   const[regexName,setRegexName]=React.useState(false);
   const[regexApellido,setRegexApellido]=React.useState(false);
   const[regexMail,setRegexMail]=React.useState(false);
   const[regexTelefono,setRegexTelefono]=React.useState(false);
/************************************************************ */
  const[clearForm,setClearForm]=React.useState({})
   
// creando useEffect para escuchar el cambio en el arreglo contacto y usarlo para el handleUpdate
React.useEffect(()=>{
  
  //cuando damos click a actualizar este nos manda los datos del contacto al arreglo contacto 
  if(Object.keys(contacto).length>0  ){
    
    setNombre(contacto.nombre)
    setApellido(contacto.apellido)
    setTelefono(contacto.telefono)
    setCumpleanios(contacto.cumpleanios)
    setDescripcion(contacto.descripcion)
    setMail(contacto.mail)
    
  }
},[contacto])

React.useEffect(()=>{
  //reseteamos los campos
  setNombre('')
  setApellido('')
  setTelefono('')
  setCumpleanios('')
  setDescripcion('')
  setMail('')
},[clearForm])

   //generador de id para la key 
   const generarId=()=>{
    const id=Math.random().toString(20).substring(2)
    return id
   }


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
        descripcion,
        id:generarId()
      };
        //añadimos el contacto a el array de contactos
      setcontactos([...contactos, objetoContacto])
      // //reseteamos los campos
      setNombre('')
      setApellido('')
      setTelefono('')
      setCumpleanios('')
      setDescripcion('')
      setMail('')
      
     
     
    }
  }

  const handleUpdate=()=>{
      for(let i=0;i<contactos.length;i++){
        if(contacto.id===contactos[i].id){
          contactos[i].nombre=nombre
          contactos[i].apellido=apellido
          contactos[i].cumpleanios=cumpleanios
          contactos[i].descripcion=descripcion
          contactos[i].id=contacto.id
          contactos[i].mail=mail
          contactos[i].telefono=telefono
          //cerramos el botón actualizar
         setUploading(false)
         //simplemente cambiamos el estado del clearForm para activar el useEffect de limpiar el campo
         setClearForm(contacto)
       
        } 
      }
  }

  

  return (
    <div className='md:w-1/2 lg:w-2/5 mx-5'>
      <h2 className='font-black text-3xl text-center mb-5'>Ingresa tus contactos</h2>

     

      <form className='bg-white shadow-md rounded-md py-10 px-5'
      onSubmit={handleSubmit}>

       {error && <AlertError><p >No puede haber campos vacíos</p></AlertError>
        
          }
        
        <Input
          inputName={'nombre'}
          inputText={'Nombre'}
          inputType={'text'}
          inputPlaceholder={'Leonidas'}
          value={nombre}
          onBlur={()=>nameHandleBlur({regex_name,nombre,setRegexName})}
          onChange={(e)=>setNombre(e.target.value)}
          className={`border-2 w-full p-2 mt-2 rounded-md placeholder-grey-400  `}
        />
          {regexName && <Validaciones
           nombreCampo={'nombre'}
           texto={'el nombre debe contener al menos 3 letras y puede o no tener segundo nombre'}
           className={'border-red-400 border-2 p-1'}
          />}
          
        <Input
          inputName={'apellido'}
          inputText={'Apellido'}
          inputType={'text'}
          inputPlaceholder={'Lopez'}
          value={apellido}
          onChange={(e)=>setApellido(e.target.value)}
          onBlur={()=>apellidoHandleBlur({regex_apellido,apellido,setRegexApellido})}
          className={`border-2 w-full p-2 mt-2 rounded-md placeholder-grey-400`}
          
        />
        {regexApellido && <Validaciones
           nombreCampo={'apellido'}
           texto={'el apellido debe contener al menos 3 letras y puede o no tener segundo apellido'}
           className={'border-red-400 border-2 p-1'}
          />}

        <Input
          inputName={'email'}
          inputText={'E-mail'}
          inputType={'mail'}
          inputPlaceholder={'leolopez@gmail.com'}
          value={mail}
          onChange={(e)=>setMail(e.target.value)}
          onBlur={()=>mailHandleBlur({regex_mail,mail,setRegexMail})}
          className={`border-2 w-full p-2 mt-2 rounded-md placeholder-grey-400 `}
          
        />
        {regexMail && <Validaciones
           nombreCampo={'mail'}
           texto={'Formato invalido,por favor revisa el correo electronico'}
           className={'border-red-400 border-2 p-1'}
          />}

        <Input
          inputName={'telefono'}
          inputText={'Telefono'}
          inputType={'number'}
          inputPlaceholder={'6043358861'}
          value={telefono}
          onChange={(e)=>setTelefono(e.target.value)}
          onBlur={()=>phoneHandleBlur({regex_phone,telefono,setRegexTelefono})}

          className={`border-2 w-full p-2 mt-2 rounded-md placeholder-grey-400`}
          
        />
         {regexTelefono && <Validaciones
           nombreCampo={'telefono'}
           texto={'el número teléfonico debe contener 10 digitos sin espacios ni guiones, si es un número local debes ingresar el prefijo 60 + el indicativo de la ciudad por ejemplo 601 para Bogotá'}
           className={'border-red-400 border-2 p-1'}
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
         
       {!uploading && <input
         type='submit'
         className='bg-blue-600 w-full p-3 text-white uppercase font-bold rounded-md hover:bg-blue-800 transition-colors cursor-pointer ' 
         value={'Crear Contacto'}
        />}
        
        {uploading && <Button
         text={'Actualizar'}
         className='bg-green-600 w-full p-3 text-white uppercase font-bold rounded-md hover:bg-green-800 transition-colors cursor-pointer'
         type={'button'}
         onClick={handleUpdate}
        />}
      </form>
    </div>
  )
}

export { Form}