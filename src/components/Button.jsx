import React from 'react'

const Button = ({onClick= ()=>{}, children, type}) => {
  return (
    <>
    {type != 'secondary' ? <button 
    onClick={()=>onClick()}
    className='flex items-center justify-center gap-2 py-2.5 px-8 rounded-[999px] font-semibold bg-gradient-to-r from-blue-700 to-rose-500 hover:from-blue-800 hover:to-rose-700 active:scale-95 transition text-white cursor-pointer'>{children}</button> :  <button 
    onClick={()=>onClick()}
    className='flex items-center justify-center gap-2 py-2.5 px-5 rounded-[999px] font-semibold bg-white border border-indigo-200 hover:bg-gray-200 active:scale-95 transition text-gray-600 hover:text-blue-800 cursor-pointer'>{children}</button>}
    </>
  )
}

export default Button