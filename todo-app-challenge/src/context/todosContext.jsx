import { createContext } from 'react'
import { useState } from 'react';

const initialTodos=[
    {id:1,title: 'Learn React'},
    {id:2,title: 'Learn HTML'},
    {id:3,title: 'Learn CSS'},
    {id:4,title: 'Learn JavaScript'},
    {id:5,title: 'Learn NextJS'},
    {id:6,title: 'Learn TailwindCSS'},
    {id:7,title: 'Learn Git'},

];

export const TodosContext = createContext();

export function TodosProvider({ children }) {
    const [todos, setTodos] = useState(initialTodos);


    const  addTodo = (todo) =>{
        setTodos([...todos, todo]);
    }

    const deleteTodo = (id) =>{
        const newsTodos = todos.filter((todo) => todo.id !== id);
        setTodos(newsTodos);    
    }

    const toggleTodo = (id) => {
        console.log(id);
    } 

    const emptyTodos=()=>{
        setTodos([]);
    }
    return (
        <TodosContext.Provider
            value={{
                addTodo,
                deleteTodo,
                emptyTodos,
                todos,
                toggleTodo,
            }}
        >
            {children}
        </TodosContext.Provider>
    
    
    )

}


