import { useContext, useEffect, useRef, useState } from "react";

import { TodosContext } from "./context/TodosContext";

import { ThemeSwitcher } from "./components/ThemeSwitcher";

import BgImage from '../images/bg-desktop-light.jpg';
import crossIcon from '../images/icon-cross.svg';

function App() {
  const [currentTodo, setCurrentTodo] = useState({})
  const [editMode, setEditMode] = useState(false)
  const { 
    addTodo, 
    clearCompleted, 
    deleteTodo,  
    editTodo, 
    emptyTodos, 
    itemsLeft, 
    todos, 
    toggleTodo, 
    setInitialTodos
  } = useContext(TodosContext);
  const textInput = useRef();
  const doneInput = useRef();
  
  const clearCompletedAction=()=>{
    clearCompleted();    
  };
  
  const submitTodoAction = (e) => {
    if( editMode ){
      e.preventDefault();   
      editTodo(currentTodo.id,textInput.current.value,doneInput.current.checked);
      setEditMode(false);
      textInput.current.value='';
      doneInput.current.checked=false;
    }else{
      e.preventDefault();
      console.log(textInput.current.value);
      if (textInput.current.value==='') return;
      const date= Date.now();
      console.log(date);
      addTodo({
        id: date,
        title:textInput.current.value,
        done:doneInput.current.checked
      });
      textInput.current.value='';
      doneInput.current.checked=false;
    }    
  };

  const toggleTodoAction=(e,id)=>{
    toggleTodo(id);
  };

  const deleteTodoAction=(id)=>{
    deleteTodo(id);
  };

  const editTodoAction = (id) =>{
    setEditMode(true);      
    setCurrentTodo(todos.find((todo)=>todo.id===id));          
  };

  const displayActiveItems=()=>{
    const arr = todos.filter((todo)=>todo.done===false);
    console.log(arr);
  };

  const displayAllItems=()=>{
    const arr = todos.filter((todo)=>todo);
    console.log(arr); 
  };

  const displayCompletedItems=()=>{
    const arr = todos.filter((todo)=>todo.done===true);
    console.log(arr);
  };

  useEffect(() => {    
  }, [todos]);
  
  useEffect(() => {    
    if(currentTodo.id===undefined) return;  
    textInput.current.value=currentTodo.title;
    doneInput.current.checked=currentTodo.done;    
  },[currentTodo]);

  return (
    <div className="flex flex-col justify-center min-h-full">
      <img src={BgImage} className="absolute top-0 w-full" alt="" />
      <main className="min-h-[80vh] z-10 w-[900px] mx-auto flex flex-col gap-10">
        <div className="flex justify-between">
          <h1 className="text-[50px] text-left text-white font-semibold tracking-wider">TODO</h1>        
          <ThemeSwitcher />                 
        </div>       
        <form action="" onSubmit={ submitTodoAction } >
          <div className="bg-white flex gap-2 px-8 py-2 rounded-md align-middle items-center">
            <input ref={doneInput} className=" rounded-3xl placeholder:text-gray-800 input-status" type="checkbox" name="" id=""/>
            <input className="w-full py-2 px-2 rounded-lg" placeholder="Create new TODO..." type="text" ref={textInput} />
          </div>      
        </form>
        <div className="flex flex-row justify-between">
          <button className="bg-gray-400 w-fit" onClick={emptyTodos}>Empty TODOS</button>  
          <button className="bg-gray-400 w-fit" onClick={setInitialTodos} >Set Initial Todos</button>    
        </div>          
        <ul className="flex flex-col rounded-md border-2 border-fuchsia-300 ">
            {
              todos.map((todo) => (
                <li className="relative bg-todoBg px-2 flex justify-start border-b-[1px] border-todoBorder-light py-2 dark:bg-todoBg-dark dark:border-todoBorder-dark" key={todo.id}>
                  <input checked={todo.done} onChange={(e)=>toggleTodoAction(e,todo.id)} className="rounded-3xl cursor-pointer mx-6 input-status " type="checkbox" name="" id=""/>
                  <span onClick={()=>editTodoAction(todo.id)} className={todo.done ? "line-through text-textLineThrough-light text-2xl mx-4 cursor-pointer hover:text-blue-900 dark:text-textLineThrough-dark" : "text-2xl mx-4 cursor-pointer hover:text-blue-900  text-todoText-light dark:text-todoText-dark"}>{todo.title}</span>                 
                  <button className="absolute right-4 bg-blue-200 px-4 py-2 rounded-lg" onClick={()=>deleteTodoAction(todo.id)}><img className="w-6 h-6 invert" src={crossIcon}></img></button>                  
                </li>
              ))
            }
              <li className="flex flex-row justify-between px-2 py-4 align-middle items-center bg-white dark:bg-black">
                <span className="dark:text-white">{itemsLeft} items left</span>
                <div className="flex flex-row gap-2 dark:text-white">
                  <button onClick={displayAllItems}  >All</button>
                  <button onClick={displayActiveItems} >Active</button>
                  <button onClick={displayCompletedItems}  >Completed</button>
                </div>
                <button className="bg-gray-400 px-4 py-2 rounded-lg text-black dark:text-white" onClick={clearCompletedAction}>Clear completed</button>
              </li> 
        </ul>       
      </main>
    </div>
  )
}

export default App
