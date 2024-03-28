import React, { useState } from "react";
import axios from "axios";
function TodoForm({ fetchData }) {
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
  const postTodo = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://127.0.0.1:8000/api/todo/", newTodo);
      fetchData();

      setNewTodo({
        body: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={postTodo}>
        <input
          name="body"
          type="text"
          placeholder="Add Todo"
          onChange={handleChange}
          value={newTodo.body}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              postTodo();
            }
          }}
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default TodoForm;
