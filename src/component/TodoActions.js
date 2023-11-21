import { useState, useMemo } from 'react';

const useTodoActions = () => {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState('');

  const addTask = (dueDate) => {
    setTasks([...tasks, { text: currentTask, dueDate }]);
    setCurrentTask('');
  };

  const deleteTask = (index) => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  };

  const updateTask = (index, newText) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, i) =>
        i === index ? { ...task, text: newText } : task
      )
    );
  };

  const taskList = useMemo(() => tasks, [tasks]);

  return {
    taskList,
    currentTask,
    setCurrentTask,
    addTask,
    deleteTask,
    updateTask
  };
};

export default useTodoActions;
