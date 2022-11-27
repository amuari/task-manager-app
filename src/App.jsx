import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import TaskManager from './components/TaskManager'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <TaskManager />
    </div>
  )
}

export default App
