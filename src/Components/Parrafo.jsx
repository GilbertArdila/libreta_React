import React from "react";

function Parrafo({text,textComplement}){
    return(
        <p className='font-bold mb-3 text-gray-700 uppercase'>{text}{" "}<span className='font-normal normal-case'>{textComplement}</span></p>
    )
}
export{Parrafo}