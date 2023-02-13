import React, { useEffect, useState } from 'react'
import './todo.css'

interface Todo {
  id: number
  task: string
  isCompleted: boolean
}

const Todo: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([])
  const [task, setTask] = useState<string>('')
  const [tasks, setTasks] = useState<string[]>([])

  /**
   * 1st experimental =================
   */

  useEffect(() => {
    const storedTodos = localStorage.getItem('todos')
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])
  /**
   * 1st experimental end=================
   */

  /**
   * 2nd experimental =================
   */

  useEffect(() => {
    const storedTask = localStorage.getItem('task')
    if (storedTask) {
      setTask(storedTask)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('task', task)
  }, [task])
  /**
   * 2nd experimental end =================
   */

  /**
   * 3rd experimental =================
   */
  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks')
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])
  /**
   * 3rd experimental end ==============
   */

  /**
   * handles
   */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setTodos([...todos, { id: Math.random(), task, isCompleted: false }])
    setTask('')
  }

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const handleComplete = (id: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isCompleted: !todo.isCompleted }
        }
        return todo
      })
    )
  }

  return (
    <div>
      <h1>To-do App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type='submit'>Add Todo</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}
          >
            {todo.task}
            <button onClick={() => handleComplete(todo.id)}>
              {todo.isCompleted ? 'Incomplete' : 'Complete'}
            </button>
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Todo
