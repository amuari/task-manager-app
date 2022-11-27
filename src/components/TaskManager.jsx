import { useState } from 'react'

import Task from './Task'

const TaskManager = () => {
  const [name, setName] = useState('')
  const [date, setDate] = useState('')

  const [tasks, setTasks] = useState([])
  const handleSubmit = (e) => {
    e.preventDefault()

    if ((!name && !date) || !name || !date) {
      alert(`please enter task and date `)
    } else {
      const newTask = {
        id: Date.now(),
        name: name,
        date: date,
        complete: false,
      }
      setTasks([...tasks, newTask])
      setName('')
      setDate('')
    }
  }
  const editTask = (id) => {}

  const deleTask = (id) => {
    if (window.confirm('are you sure') === true) {
      const clear = tasks.filter((task) => task.id !== id)
      setTasks(clear)
    }
  }
  const clearAll = () => {
    setTasks([])
  }
  return (
    <div className='container flex flex-col mx-auto space-y-12  text-white justify-center items-center p-5  content-between gap-1 '>
      <form
        onSubmit={handleSubmit}
        className='container flex flex-col mx-auto space-y-12  text-white justify-center items-center p-5  content-between gap-1  '
      >
        <h1 className='text-5xl font-bold'>Task Manager</h1>
        <div className=''>
          <label className='p-4'>Task</label>
          <input
            className='text-black'
            type='text'
            name='name'
            placeholder='Task goes here'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label className='p-2'>Date</label>
          <input
            className='text-black '
            type='date'
            name='date'
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <button className=' w-1/6 rounded-lg border-2 border-transparent border-solid shadow-lg transition ease-in-out delay-700 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 hover:ring-2 ring-blue-400  '>
          Save Task
        </button>
      </form>

      <article className='m-2 w-full my-4 '>
        <div className='w-full'>
          <h1 className='text-5xl flex justify-center items-center'>
            Task List
          </h1>
          <hr style={{ background: 'white' }} />
          {tasks.length === 0 ? (
            <p>No task added</p>
          ) : (
            <div>
              {tasks.map((task) => (
                <Task {...task} editTask={editTask} deleTask={deleTask} />
              ))}
            </div>
          )}
        </div>
      </article>
      <button onClick={clearAll} className='bg-red-400 w-1/5 rounded-2xl'>
        clear All
      </button>
    </div>
  )
}

export default TaskManager
