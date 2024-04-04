import React, { useState } from "react";
import axios from "axios";
import { MdDelete, MdEdit } from "react-icons/md";
import { ImCheckboxChecked } from "react-icons/im";
import { ImCheckboxUnchecked } from "react-icons/im";
function Table({ todos, setTodos, isLoading, fetchData }) {
  const [showEditModal, setShowEditModal] = useState(false);
  const [editTodo, setEditTodo] = useState({
    body: "",
  });
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/todo/${id}`);
      const newList = todos.filter((todo) => todo.id !== id);
      setTodos(newList);
    } catch (error) {
      console.log(error);
    }
  };
  const modalHandler = () => {
    setShowEditModal((prev) => !prev);
  };
  const handleEdit = async (id, value) => {
    try {
      const response = await axios.patch(
        `http://127.0.0.1:8000/api/todo/${id}/`,
        value
      );
      const newTodos = todos.map((todo) =>
        todo.id === id ? response.data : todo
      );
      setTodos(newTodos);
    } catch (error) {
      console.log(error);
    }
  };
  const handleCheckBox = (id, value) => {
    handleEdit(id, {
      completed: !value,
    });
  };
  const handleChange = (e) => {
    setEditTodo((prev) => ({
      ...prev,
      body: e.taget.value,
    }));
    console.log(editTodo);
  };
  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Checkbox</th>
              <th>To Do</th>
              <th>Status</th>
              <th>Date created</th>
              <th>Actions</th>
            </tr>
          </thead>
          {todos.map((todo) => {
            return (
              <tbody key={todo.id}>
                <tr>
                  <td title={todo.id}>
                    <span
                      onClick={() => {
                        handleCheckBox(todo.id, todo.completed);
                      }}
                    >
                      {todo.completed ? (
                        <ImCheckboxChecked />
                      ) : (
                        <ImCheckboxUnchecked />
                      )}
                    </span>
                  </td>
                  <td>{todo.body}</td>
                  <td>{todo.completed ? "Complete" : "Incomplete"}</td>
                  <td>{new Date(todo.created).toLocaleString()}</td>
                  <td>
                    <span onClick={modalHandler}>
                      <MdEdit />
                    </span>
                    <span>
                      <MdDelete onClick={() => handleDelete(todo.id)} />
                    </span>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      )}
      {showEditModal && (
        <form>
          <input type="text" onChange={handleChange} />
          <button type="submit">Edit</button>
        </form>
      )}
    </>
  );
}

export default Table;
