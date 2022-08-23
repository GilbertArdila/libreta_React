//validamos nombre espacio apellido, puede o no iniciar con mayusculas, solo admite letras; no caracteres especiales, no números
const regex_name = new RegExp(/^[ÁÉÍÓÚA-Z]?[a-záéíóú]{3}?[\s]?([ÁÉÍÓÚA-Z]?[a-záéíóú]+)*$/) ;

//regext recomendado por la w3c
const regex_email=new RegExp(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/)

//validamos solamente numeros, le damos una longitud de 10 dígitos
const regex_phone=new RegExp(/^[0-9](\d{9})(?!.*[ +/_=-])$/)

export {regex_name,regex_email,regex_phone}