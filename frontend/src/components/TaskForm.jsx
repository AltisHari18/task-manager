import { useState } from 'react';
import axios from 'axios';

function TaskForm({ fetchTasks }) {

  const [task, setTask] = useState({
    title: '',
    description: ''
  });

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value
    });
  }

  const addTask = async () => {

    await axios.post(
      'http://localhost:5000/api/tasks',
      task,
      {
        headers: {
          Authorization: localStorage.getItem('token')
        }
      }
    );

    setTask({
      title: '',
      description: ''
    });

    fetchTasks();
  }

  return (
    <div className='mb-5'>

      <input
        type='text'
        name='title'
        placeholder='Task Title'
        className='border p-2 mr-2'
        value={task.title}
        onChange={handleChange}
      />

      <input
        type='text'
        name='description'
        placeholder='Task Description'
        className='border p-2 mr-2'
        value={task.description}
        onChange={handleChange}
      />

      <button
        onClick={addTask}
        className='bg-blue-500 text-white px-4 py-2 rounded'
      >
        Add Task
      </button>

    </div>
  )
}

export default TaskForm;