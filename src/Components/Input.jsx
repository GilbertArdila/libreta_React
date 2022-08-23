import React from 'react'

const Input = ({inputName,inputText,inputType,inputPlaceholder}) => {
  return (
    <React.Fragment>
        <label htmlFor={inputName} 
        className='block text-gray-500 uppercase font-bold'>{inputText}</label>
        <input
        className='border-2 w-full p-2 mt-2 rounded-md placeholder-grey-400'
         type={inputType}
         placeholder={inputPlaceholder}
         id={inputName}
        />
    </React.Fragment>
  )
}

export  {Input}