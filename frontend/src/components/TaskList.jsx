import axios from 'axios';

function TaskList({ tasks, fetchTasks }) {

  const deleteTask = async (id) => {

    await axios.delete(
      `http://localhost:5000/api/tasks/${id}`,
      {
        headers: {
          Authorization: localStorage.getItem('token')
        }
      }
    );

    fetchTasks();
  }

  const updateStatus = async (id) => {

    await axios.put(
      `http://localhost:5000/api/tasks/${id}`,
      { status: 'Completed' },
      {
        headers: {
          Authorization: localStorage.getItem('token')
        }
      }
    );

    fetchTasks();
  }

  return (
    <div>

      {
        tasks.map(task => (

          <div
            key={task._id}
            className='border p-4 mb-3 rounded shadow'
          >

            <h2 className='text-xl font-bold'>
              {task.title}
            </h2>

            <p>{task.description}</p>

            <p>Status: {task.status}</p>

            <button
              onClick={() => updateStatus(task._id)}
              className='bg-green-500 text-white px-3 py-1 mr-2 mt-2 rounded'
            >
              Complete
            </button>

            <button
              onClick={() => deleteTask(task._id)}
              className='bg-red-500 text-white px-3 py-1 mt-2 rounded'
            >
              Delete
            </button>

          </div>
        ))
      }

    </div>
  )
}

export default TaskList;