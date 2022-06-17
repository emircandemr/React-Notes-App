import React from 'react'
import logo from "../img/logo.png"

function Header() {
  return (
    
    <div className='flex h-24 m-5 justify-start box-border overflow-hidden'>
        
        <div>
            <img  className='w-full h-full' src={logo} />
        </div>
        <div className='flex justify-center items-center text-purple-600 text-4xl font-extrabold'>
            <h2> Notes App </h2>
        </div>


    </div>
  )
}

export default Header