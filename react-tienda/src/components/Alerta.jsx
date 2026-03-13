import React from 'react'

export default function Alerta({children}) {
  return (
    <div className='text-center bg-red-600 font-bold text-white uppercase my-2 p-2 text-xs rounded-md'>
        {children}
    </div>
  )
}
