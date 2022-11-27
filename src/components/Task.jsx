import React from 'react'
import { FaTrashAlt } from 'react-icons/fa'
const Task = ({ id, name, date, complete, editTask, deleTask }) => {
  return (
    <div
      className='flex  w-1/2 h-fit justify-between bg-gray-400 items-start p-1
    m-1 overflow-hidden rounded-lg shadow-lg border-2  border-transparent  text-black '
    >
      <div key={id} className='font-bold'>
        <p>Task:{name}</p>
        <p>Date:{date}</p>
      </div>
      <span className='flex justify-between  items-center space-x-3 '>
        {/* <button>
          <FaEdit onClick={() => editTask(id)} color='green' />
        </button> */}
        <button>
          <FaTrashAlt
            color='red'
            onClick={() => deleTask(id)}
            className='hover:animate-bounce w-6 h-6 '
          />
        </button>
        {/* <button>
          <FaCheckDouble color='purple' />
        </button> */}
      </span>
    </div>
  )
}

export default Task
