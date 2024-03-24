import React, { useState } from "react";

function TodoForm() {
  const [newTodo, setNewTodo] = useState({
    body: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTodo({
      ...newTodo,
      [name]: value,
    });
  };
  console.log(newTodo);
  return (
    <div>
      <form>
        <input
          name="body"
          type="text"
          placeholder="Add Todo"
          onChange={handleChange}
          value={newTodo.body}
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default TodoForm;
