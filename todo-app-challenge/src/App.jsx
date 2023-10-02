import { useContext, useEffect, useRef, useState } from "react";
import { TodosContext } from "./context/todosContext";
import BgImage from '../images/bg-desktop-light.jpg';
function App() {
  const { todos, addTodo, deleteTodo, toggleTodo, emptyTodos } = useContext(TodosContext);
  console.log(todos);
  const textInput = useRef()
  useEffect(() => {
    
  }, [todos])
  

  const submitTodoAction = (e) => {
    e.preventDefault();
    console.log(textInput.current.value);
    const date= Date.now();
    console.log(date);
    addTodo({
      id: date,
      title:textInput.current.value,
    });
    textInput.current.value='';
  }


  const deleteTodoAction=(id)=>{
    console.log(id);
    deleteTodo(id);
  }
  return (
    <div className="flex flex-col justify-center min-h-full">
      <img src={BgImage} className="absolute top-0 w-full" alt="" />
      <main className="z-10 w-[900px] border-2 border-red-600 mx-auto flex flex-col gap-10">
        <form action="" onSubmit={ submitTodoAction } >
          <input className="w-full py-4 px-2 rounded-lg" placeholder="Create new TODO..." type="text" ref={textInput} />
        </form>
        <button className="bg-gray-400" onClick={emptyTodos}>Empty TODOS</button>
        <h1 className="text-5xl text-center text-white font-semibold tracking-wider">TODO</h1>
        <ul className="flex flex-col ">
            {
              todos.map((todo) => (
                <li className="bg-red-300 flex justify-between border-b-2 border-gray-700 py-2" key={todo.id}>
                  <span className="text-3xl">{todo.title}</span>
                  <button onClick={()=>deleteTodoAction(todo.id)}> delete todo</button>
                  
                  </li>
              ))
            }
        </ul>

      </main>
    </div>
  )
}

export default App
