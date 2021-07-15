import React, { useEffect } from "react";

const AddTodoForm = ({
  addTodo,
  todoText,
  todo,
  setTodoText,
  editing,
  setEditing,
  updateTodo,
}) => {
  const handleSubmit = () => {
    const date = new Date();
    const t = {
      createTime: date,
      status: "not done",
      todo: todoText,
      endTime: "",
    };

    if (todoText !== "") {
      addTodo(t);
      setTodoText("");
    } else {
      alert("No text to add");
    }
  };

  const handleUpdate = () => {
    console.log(todo);

    const { id, createTime, endTime } = todo;
    const t = {
      id,
      createTime,
      status: "not done",
      todo: todoText,
      endTime,
    };

    updateTodo(t);
    setEditing(false);
    setTodoText("")
  };

  useEffect(() => {
    if (todo.id) {
      setTodoText(todo.todo);
      setEditing(true);
    }
  }, [todo]);

  return (
    <div className="addtodo-container">
      <input
        onChange={(e) => setTodoText(e.target.value)}
        value={todoText}
        type="text"
        placeholder="Enter a task"
      />
      {editing ? (
        <button onClick={handleUpdate}>Update</button>
      ) : (
        <button onClick={handleSubmit}>Add Task</button>
      )}
    </div>
  );
};

export default AddTodoForm;
