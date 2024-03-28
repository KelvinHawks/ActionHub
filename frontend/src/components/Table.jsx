import React from "react";

import { MdDelete, MdEdit } from "react-icons/md";
import { ImCheckboxChecked } from "react-icons/im";
import { ImCheckboxUnchecked } from "react-icons/im";
function Table({ todos, setTodos, isLoading }) {
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
                    <span>
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
                    <span>
                      <MdEdit />
                    </span>
                    <span>
                      <MdDelete />
                    </span>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      )}
    </>
  );
}

export default Table;
