import React from "react";

const Button = ({text,className,onClick,type}) => {
  return (
    <button className={className} 
    onClick={onClick}
    type={type}
    >{text}</button>
  )
}

export  {Button}