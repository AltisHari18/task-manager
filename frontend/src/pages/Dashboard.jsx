import { useEffect, useState } from 'react';
import axios from 'axios';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

function Dashboard() {

  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {

    const res = await axios.get(
      'http://localhost:5000/api/tasks',
      {
        headers: {
          Authorization: localStorage.getItem('token')
        }
      }
    );

    setTasks(res.data);
  }

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className='p-5'>

      <h1 className='text-3xl font-bold mb-5'>
        Task Dashboard
      </h1>

      <TaskForm fetchTasks={fetchTasks} />

      <TaskList tasks={tasks} fetchTasks={fetchTasks} />

    </div>
  )
}

export default Dashboard;