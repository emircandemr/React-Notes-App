
function Todo({text,todo,setTodo,element}) {


    const deleteFunc = () => {
        setTodo(todo.filter((item) => item.id !== element.id) )
        console.log(todo);
    }

    const completeFunc = () => {

        setTodo(todo.map( ( item ) => {
            if(item.id === element.id){
                return {
                    ...item,completed : !item.completed
                }
            }
            return item
        }))
        console.log(todo);
    }


  return (

    <div className={`todo relative justify-center items-center w-5/6 h-64 sm:w-4/5 md:w-1/2 lg:w-1/3 xl:w-1/4 sm:h-72 border-box m-4 rounded-2xl ${element.completed===true ? "bg-black" : "bg-purple-800"  } shadow-2xl z-0`}>

        <div className={`todo w-full h-full  ${element.completed===true ? "bg-white" : "bg-white"  } shadow-2xl  hover:bg-slate-200 cursor-pointer rounded-2xl p-2 relative top-2 left-2 z-10 overflow-hidden`}>

            <div className='m-2 flex relative items-center'>
                <i className="fa-solid fa-clock"></i>
                <span className={`ml-2 ${element.completed===true ? "text-black" : "text-gray-500"  } `}> {new Date().getDate()}/{new Date().getMonth()+1}/{new Date().getFullYear()} </span>

                {element.completed &&  <div className='text-black absolute right-2 cursor-pointer text-xl' onClick={ () => {
                    completeFunc()
                }}>
                <i className="fa-solid fa-rotate-left"></i>    
                </div>}
            </div>           
            
            <div className={`p-5  ${element.completed===true ? "italic line-through text-black" : "text-black"} h-40 overflow-hidden `}>
                 {text}
            </div>

            <div>
                
                {!element.completed && <button className='bg-purple-800 text-white px-5 py-2 rounded-xl absolute bottom-5 right-5 ' onClick={() => {
                    completeFunc()

                }}>
                    <i className="fa-solid fa-circle-check"></i>
                    <span className='pl-2'>Complete</span>
                </button> }
                
                {element.completed && <button className='bg-black text-white px-5 py-2 rounded-xl absolute bottom-5 right-5 ' onClick={() => {
                    deleteFunc()
                }}>
                    <i className="fa-solid fa-trash-can"></i>
                    <span className='pl-2'>Delete</span>
                </button> }
                
            </div>

        </div>
        
    </div>


    
  )
}

export default Todo