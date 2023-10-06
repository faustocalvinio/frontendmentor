import { createContext, useEffect } from 'react'
import { useState } from 'react';

const initialTodosBase=[
    {id:1,title: 'Complete online JavaScript course',done:true},
    {id:2,title:'Jag around the park 3x',done:false},
    {id:3,title: '10 minutes meditation',done:false},
    {id:4,title: 'Read for 1 hour',done:false},
    {id:5,title: 'Pick up groceries',done:false},
    {id:6,title: 'Complete Todo App on Frontend Mentor',done:false},
];

export const TodosContext = createContext();

export function TodosProvider({ children }) {  
    
    const [todos, setTodos] = useState( JSON.parse(localStorage.getItem('todos')) || initialTodosBase);
    const [itemsLeft, setItemsLeft] = useState();

    const itemsLeftCount = () => {
        const count = todos.filter((todo) => !todo.done).length;
        setItemsLeft(count);
    };

    const addTodo = (todo) =>{
        setTodos([...todos, todo]);
        localStorage.setItem('todos', JSON.stringify(todos));
    };

    const deleteTodo = (id) =>{
        const newsTodos = todos.filter((todo) => todo.id !== id);
        setTodos(newsTodos);  
        localStorage.setItem('todos', JSON.stringify(todos));  
    };

    const toggleTodo = (id) => {
        const newsTodos = todos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, done: !todo.done };
            }
            return todo;        
        });
        console.log(id);
        setTodos(newsTodos);
        localStorage.setItem('todos', JSON.stringify(todos));
    }; 

    const emptyTodos=()=>{
        setTodos([]);
    };

    const clearCompleted=()=>{   
        const newTodos = todos.filter((todo) => !todo.done);        
        setTodos(newTodos);
    };

    const editTodo = (id, title,status) => {
        const newsTodos = todos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, title , status }
            }else return todo;
        });
        setTodos(newsTodos);
    };

    useEffect(() => {
        itemsLeftCount()
    },[todos]);
    
    return (
        <TodosContext.Provider
            value={{
                addTodo,
                clearCompleted,
                deleteTodo,
                editTodo,
                emptyTodos,
                itemsLeft,
                todos,
                toggleTodo,
            }}
        >
            {children}
        </TodosContext.Provider>
    
    
    )

}


