import Input  from "./components/input";
import Header from "./components/header";
import TodoList from "./components/todoList";
import { useEffect, useState } from "react";
import Category from "./components/category";


function App() {

  const [text,setText] = useState("")
  const [todo,setTodo] = useState([])
  
  const [status,setStatus] = useState("ALL")
  const [filteredTodos,setFilteredTodos] = useState([])

  useEffect( () => {
    const storageTodo = JSON.parse(localStorage.getItem("notes"))
    if(storageTodo){
      setTodo(storageTodo)
    }
  },[])

  useEffect( () => {
    FilterFunc();
  },[todo, status]) 

  const FilterFunc = () => {

    switch (status) {
      case "Completed":
        setFilteredTodos(todo.filter( (item) => item.completed === true))
        break;
      case "Active":
        setFilteredTodos(todo.filter( (item) => item.completed === false))
        break
      default:
        setFilteredTodos(todo)
        break;
    }
  }

  return (

    <div>

        <Header/>

        <Input
        text={text}
        setText={setText}
        todo={todo}
        setTodo={setTodo}
        />
        <Category
        setStatus={setStatus}
        status={status}/>
        <TodoList 
        todo={todo}
        filteredTodos={filteredTodos}
        setTodo={setTodo}/>
    </div>

  );
}

export default App;
