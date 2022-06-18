import React from 'react'
import Todo from './todo'

function TodoList({todo,setTodo,filteredTodos}) {

  return (

    <div className='flex justify-center items-center'>

        <div className='todoList  w-5/6 h-auto m-5 p-2 flex justify-center '>

             {todo.length<1 ? <div className='mt-20 text-lg text-gray-400 italic tracking-wide'>Please Add Notes to the List</div>: ""} 

            {filteredTodos.map( (element) => {
              localStorage.setItem("notes", JSON.stringify(todo));
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