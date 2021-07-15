import React, { useEffect, useState } from 'react'

import './App.css';

import Header from "./components/Header"
import AddTodoForm from "./components/AddTodoForm"
import Todos from "./components/Todos"
import axios from 'axios';

function App() {

  const [todos, setTodos] = useState([])
  const [todoText, setTodoText] = useState("")
  const [todo, setTodo] = useState({})
  const [editing, setEditing] = useState(false)

  const fetchTodos = async () =>{
    const { data } = await axios.get("http://localhost:8081/api/")
    setTodos(data);
  }

  useEffect( () => {
    fetchTodos()
  }, [])

  const updateTodo = async (item) => {
    console.log("Item", item);
    const { data } = await axios.put("http://localhost:8081/api/", item)

    setTodos(data);
  }

  const deleteTodo = async (id) => {
    await axios.delete(`http://localhost:8081/api/${id}`, {
      headers: {
        'Content-Type': 'application/json',
      }
    })

    fetchTodos();
  }

  const addTodo = async (todo) => {
    const { data } = await axios.post("http://localhost:8081/api/", todo)
    setTodos([...todos, data]);
  }

  return (
    <div className="App">
      <Header items={todos} />
      <AddTodoForm updateTodo={updateTodo}  setEditing={setEditing} editing={editing} todo={todo} todoText={todoText} setTodoText={setTodoText} addTodo={addTodo} />
      <Todos todos={todos} setTodo={setTodo} markDone={updateTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
