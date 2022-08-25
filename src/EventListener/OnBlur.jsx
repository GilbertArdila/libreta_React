import React from "react";

const nameHandleBlur=({regex_name,nombre,setRegexName})=>{
     regex_name.test(nombre)===false?setRegexName(true):setRegexName(false)
     

      
    }
    const apellidoHandleBlur=({regex_apellido,apellido,setRegexApellido})=>{
        regex_apellido.test(apellido)===false?setRegexApellido(true):setRegexApellido(false)
        
   
         
       }

       const mailHandleBlur=({regex_mail,mail,setRegexMail})=>{
        regex_mail.test(mail)===false?setRegexMail(true):setRegexMail(false)
        
   
         
       }

       const phoneHandleBlur=({regex_phone,telefono,setRegexTelefono})=>{
        regex_phone.test(telefono)===false?setRegexTelefono(true):setRegexTelefono(false)
        
   
         
       }

export { nameHandleBlur,
    apellidoHandleBlur,
    mailHandleBlur,
    phoneHandleBlur}