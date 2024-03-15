import { useState } from "react";
import "./App.css";
import Table from "./components/Table";
import TodoForm from "./components/TodoForm";

function App() {
  return (
    <div className="bg-indigo-100 px-8 min-h-screen">
      <nav className="pt-8">
        <h1 className="text-5xl text-center">ToDo List</h1>
      </nav>
      <TodoForm />
      <Table />
    </div>
  );
}

export default App;
