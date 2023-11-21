import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; 
import useTodoActions from "./component/TodoActions";
import TodoList from "./component/TodoList";
import Search from "./component/search"; 

function App() {
  const {
    taskList,
    currentTask,
    setCurrentTask,
    addTask,
    deleteTask,
    updateTask
  } = useTodoActions();

  const handleInput = (e) => {
    setCurrentTask(e.target.value);
  };

  const handleAddClick = (e) => {
    e.preventDefault();
    const dueDate = prompt('Enter due date (YYYY-MM-DD):');
    addTask(dueDate);
  };

  return (
    <Router> 
      <div className="App">
        <header className="App-header">
          <div className="main">
            <h1 style={{color:"black"}}>To-Do Application</h1>
            <form className='Todo'>
              <div className='Todo-content'>
                <ul>
                  <div className="Task-content">
                    <button type="button" className="btn btn-success" onClick={handleAddClick}>Add</button>
                    <input type="text" className="form-control" value={currentTask} onChange={handleInput} placeholder='Add Task'/>
                  </div>
                  <Link to="/search">
                    <button type="button" className="btn btn-info">Search</button>
                  </Link>
                </ul>
              </div>
              <Routes> 
                <Route path="/search" element={<Search />} /> 
              </Routes>
              <TodoList
                taskList={taskList}
                onDelete={deleteTask}
                onUpdate={updateTask}
              />
            </form>
          </div>
        </header>
      </div>
    </Router>
  );
}

export default App;
