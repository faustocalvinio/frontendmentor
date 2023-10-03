import { useContext, useEffect, useRef, useState } from "react";
import { TodosContext } from "./context/todosContext";
import BgImage from '../images/bg-desktop-light.jpg';
import crossIcon from '../images/icon-cross.svg';
import moonIcon from '../images/icon-moon.svg';
import sunIcon from '../images/icon-sun.svg';




function App() {
  const { todos, addTodo, deleteTodo,  itemsLeft , toggleTodo, emptyTodos, clearCompleted } = useContext(TodosContext);
  console.log(itemsLeft);
  console.log(todos);
  const textInput = useRef()
  useEffect(() => {
    
  }, [todos])
  
  const onClearCompleted=()=>{
    clearCompleted()
    
  }

  const submitTodoAction = (e) => {
    e.preventDefault();
    console.log(textInput.current.value);
    const date= Date.now();
    console.log(date);
    addTodo({
      id: date,
      title:textInput.current.value,
      done:false
    });
    textInput.current.value='';
  }

  const onToggleTodo=(e,id)=>{
    console.log(e.target.checked);
    toggleTodo(id)
  }

  const deleteTodoAction=(id)=>{
    console.log(id);
    deleteTodo(id);
  }


  return (
    <div className="flex flex-col justify-center min-h-full">
      <img src={BgImage} className="absolute top-0 w-full" alt="" />
      <main className="min-h-[80vh] z-10 w-[900px] border-2 border-red-600 mx-auto flex flex-col gap-10">
        <div className="flex justify-between">
        <h1 className="text-5xl text-left text-white font-semibold tracking-wider">TODO</h1>
        <button id="theme-toggle">
          <img className='h-auto w-12' id="moon-icon" src={moonIcon} alt="" />
          <img className='h-auto w-12' id="sun-icon" src={sunIcon} alt="" />
        </button>
        
        </div>

        <form action="" onSubmit={ submitTodoAction } >
       
          <input className="w-full py-4 px-2 rounded-lg" placeholder="Create new TODO..." type="text" ref={textInput} />

        </form>

        <button className="bg-gray-400" onClick={emptyTodos}>Empty TODOS</button>

        <ul className="flex flex-col ">
            {
              todos.map((todo) => (
                <li className="relative bg-white px-4 flex justify-start border-b-[1px] border-gray-300 py-2" key={todo.id}>
                  <input checked={todo.done} onChange={(e)=>onToggleTodo(e,todo.id)} className="w-10 rounded-3xl" type="checkbox" name="" id=""/>
                  <span className={todo.done ? "line-through text-gray-500 text-3xl mx-4" : "text-3xl mx-4"}>{todo.title}</span>
                 
                  <button className="absolute right-4 bg-blue-200 px-4 py-2 rounded-lg" onClick={()=>deleteTodoAction(todo.id)}><img className="w-6 h-6 invert" src={crossIcon}></img></button>
                  
                </li>
              ))
            }
        </ul>
        
        <div className="flex flex-row justify-between px-2">
          <span>{itemsLeft} items left</span>
          <ul className="flex flex-row gap-2">
            <li>All</li>
            <li>Active</li>
            <li>Completed</li>
          </ul>
            <button className="bg-gray-400 px-4 py-2 rounded-lg" onClick={onClearCompleted}>clear completed</button>
        </div>

      </main>
    </div>
  )
}

export default App
