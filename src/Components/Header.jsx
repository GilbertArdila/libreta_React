import React from 'react'

const Header = ({contactos}) => {
 
  return (
    <> <div className='w-full h-40 flex flex-col items-center my-4' >
        <h1 className='font-black text-3xl text-center mx-auto md:w-2/3 '>Libreta de <span className='text-blue-700 '>contactos</span> </h1>
        {(contactos.length>0 && contactos.length===1) && <h4 className='text-blue-500 font-semibold -tracking-wider text-3xl'>Tienes {contactos.length} contacto en tu libreta</h4>}
        {( contactos.length>1) && <h4 className='text-blue-500 font-semibold -tracking-wider text-3xl mt-4 p-1'>Tienes {contactos.length} contactos en tu libreta</h4>}

    </div>
        
    </>
  )
}

export  {Header}