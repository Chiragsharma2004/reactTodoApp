import React from 'react';
import './Todo.css';
import { useState } from 'react';

const Todo = () => {
    const [inputValue, setInputValue] = useState('');
    const [todos, setTodos] = useState([]);

    function addTodo() {
        if(inputValue.trim() !== '') {
            const newTodo = {
                id: new Date().getTime(),
                text: inputValue,
            }
            setTodos([...todos, newTodo]);
            setInputValue('');
        }
    }

    function deleteTodo(id) {
        const updatedTodos = todos.filter((todo) => todo.id !== id);
        setTodos(updatedTodos)
    }

   
  return (
    <div className='todo-container'>
      <h2>Todo List</h2>

      <input type="text" placeholder='Enter Todo' onChange={(e) => {
        setInputValue(e.target.value);
      }} value={inputValue}/>

      <button onClick={addTodo}>Add</button>

      <ul>
        {
            todos.map((todo) => {
                return <li key={todo.id}>
                    {todo.text}
                    <button onClick={() => {
                        deleteTodo(todo.id)
                    }}>Delete</button>
                </li>
            })
        }
      </ul>
    </div>
  )
}

export default Todo;