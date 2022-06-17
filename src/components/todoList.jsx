import React from 'react'
import Todo from './todo'

function TodoList({todo,setTodo,filteredTodos}) {

  return (

    <div className='flex justify-center items-center'>

        <div className='todoList w-5/6 h-auto m-5 p-2 flex justify-center '>
            
            {filteredTodos.map( (element) => {
              return(
                <Todo
                text={element.text}
                key={element.id}
                todo={todo}
                setTodo = {setTodo}
                element = {element}
              />
              )
             
            })}
          
        </div>
        
       


    </div>
  )
}

export default TodoList