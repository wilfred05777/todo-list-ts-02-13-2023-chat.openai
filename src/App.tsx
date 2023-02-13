// https://chat.openai.com/chat/23a4367a-52ca-4a6f-a19e-dc911d3669e9
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Todo from './Todos/Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Todo />
    </div>
  )
}

export default App
