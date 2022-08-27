import React from "react";
function Validaciones({nombreCampo,texto,className}){
return(
    <div className={className}>
        <p>{nombreCampo}{' '}invalido</p>
        <p>{texto}</p>
    </div>

)
}
export{Validaciones}