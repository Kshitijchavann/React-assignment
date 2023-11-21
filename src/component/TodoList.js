import React from 'react';
import TodoItem from './TodoItems';

const TodoList = ({ taskList, onDelete, onUpdate }) => {
  return (
    <div className="Todo-display">
      {taskList.map((task, index) => (
        <TodoItem
          key={index}
          index={index}
          task={task}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  );
};

export default TodoList;
