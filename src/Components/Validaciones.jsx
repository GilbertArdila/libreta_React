import React from "react";
function Validaciones({nombreCampo,texto}){
return(
    <div>
        <p>{nombreCampo}{' '}invalido</p>
        <p>{texto}</p>
    </div>

)
}
export{Validaciones}