import React from 'react'
import Todo from "./Todo"

const Todos = ({ todos, markDone,setTodo, deleteTodo }) => {
    

    return (
        <div className="todos-container">
            {todos.map(todo => <Todo key={todo.id} deleteTodo={deleteTodo} setTodo={setTodo} markDone={markDone} item={todo} />)}

        </div>
    )
}

export default Todos
