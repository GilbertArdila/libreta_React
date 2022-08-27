import React from "react";
//creamos la mayoria de estados que vamos a usar

function useStates(){
    //creamos los estados para los input y las validacones
  const [nombre, setNombre]=React.useState('');
  const [apellido, setApellido] = React.useState('');
  const [mail, setMail] = React.useState('');
  const [telefono, setTelefono] = React.useState('');
  const [cumpleanios, setCumpleanios] = React.useState('');
  const [descripcion, setDescripcion] = React.useState('');
  const [error, setError] = React.useState(false);
  const [regexName, setRegexName] = React.useState(false);
  const [regexApellido, setRegexApellido] = React.useState(false);
  const [regexMail, setRegexMail] = React.useState(false);
  const [regexTelefono, setRegexTelefono] = React.useState(false);

  





  


  
  
  return{
        nombre,setNombre,
      apellido,setApellido,
      mail,setMail,
      telefono,setTelefono,
      cumpleanios,setCumpleanios,
      descripcion,setDescripcion,
      error,setError,
      regexName,setRegexName,
      regexApellido,setRegexApellido,
      regexMail,setRegexMail,
      regexTelefono,setRegexTelefono,
     
     
    };
      
  
}

export{useStates}