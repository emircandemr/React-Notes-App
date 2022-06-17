import React from 'react'

function Input({text,setText,todo,setTodo}) {


  return (

    <div className='w-full flex justify-center items-center'>
            <input value={text} className='w-1/3  p-2 rounded-xl mt-5 border shadow-xl outline-none focus:border-purple-500 border-gray-300
             placeholder:text-gray-400 cursor-pointer text-base' placeholder='Create New Note' autoFocus onKeyPress={ (e) => {
              if(e.key==="Enter" && text.trim()!==""){
                setTodo([
                  ...todo,
                  {text:text, id:new Date().getTime(), completed:false}
                ])
                setText("")
              }
             }}
              onChange={(e) => {
                setText(e.target.value)
              }}
             />
    </div>
  )
}

export default Input