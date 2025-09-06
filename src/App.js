import React, { useState, useCallback } from 'react';

import TodoList from './components/TodoList';

import AddTodoModal from './components/AddTodoModal';

import './App.css';


function App() {

const [todos, setTodos] = useState([]);
const [isModalOpen, setIsModalOpen] = useState(false);

// Оптимизация функции добавления задачи
const handleAddTodo = useCallback(
(newTodo) => {
setTodos((prevTodos) => [...prevTodos, newTodo]);
},
[setTodos]

);

// Оптимизация функции открытия/закрытия модального окна
const openModal = useCallback(() => setIsModalOpen(true), []);
const closeModal = useCallback(() => setIsModalOpen(false), []);

return (

<div className="app">

<h1>Список задач</h1>

<button className="add-todo-button" onClick={openModal}>

Добавить задачу

</button>
<TodoList todos={todos} />
{isModalOpen && <AddTodoModal onAdd={handleAddTodo} 
onClose={closeModal} />}
</div>
);

}


export default App;
