import React from 'react'

const AlertError = ({children}) => {
  return (
    <div className='bg-red-600 font-bold uppercase   text-white p-3 mb-5 rounded-md w-full text-center ' >
    {children}</div>
  )
}

export  {AlertError}