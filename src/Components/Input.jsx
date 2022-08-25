import React from 'react'

const Input = ({inputName,inputText,inputType,inputPlaceholder,onChange,className,onBlur}) => {
  return (
    <React.Fragment>
        <label htmlFor={inputName} 
        className='block text-gray-500 uppercase font-bold'>{inputText}</label>
        <input
         type={inputType}
         placeholder={inputPlaceholder}
         id={inputName}
         onChange={onChange}
         onBlur={onBlur}
         className={className}
        />
    </React.Fragment>
  )
}

export  {Input}