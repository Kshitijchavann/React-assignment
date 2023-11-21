import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './Todoitem.css'

const TodoItem = ({ index, task, onDelete, onUpdate }) => {
  const [dueDate, setDueDate] = useState(task.dueDate || '');

  const handleDueDateChange = (e) => {
    setDueDate(e.target.value);
  };

  return (
    <div className='Tasks'>
      <div>
      Task {index + 1}: {task.text}
      </div>
      <div>
      <label>
        Due Date:
        <input type="date" value={dueDate} onChange={handleDueDateChange} />
      </label>
      <button type="button" class="btn btn-warning" onClick={() => onDelete(index)}>Delete</button>
      <button type="button" class="btn btn-primary" onClick={() => onUpdate(index, prompt('Update task', task.text), dueDate)}>
        Update
      </button>
      </div>
    </div>
  );
};

export default TodoItem;
