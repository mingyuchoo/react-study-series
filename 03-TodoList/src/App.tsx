import { useState, useEffect, useReducer } from 'react'
import axios from 'axios'

import './App.css'
import data from './data.json'

function App() {

  const [toDoList, setTodoList] = useState(data)

  const handleToggle = (id: number) => {
      const mapped = toDoList.map(task => {
          return task.id == id ? { ...task, complete: !task.complete } : { ...task}
        })
      setTodoList(mapped)
    }

  const handleFilter = () => {
      const filtered = toDoList.filter(task => {
          return !task.complete
        })
      setTodoList(filtered)
    }

  const addTask = (userInput: any) => {
      let copy = [...toDoList];
      copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false }]
      setTodoList(copy)
    }

  return (
    <div className='App'>
      <Header />
      <TodoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter}/>
      <TodoForm addTask={addTask} />
    </div>
  )

  }
export default App


const Header = () => {
    return (
    <header>
      <h1>To Do List</h1>
    </header>
    )
  }

const TodoList = ({toDoList, handleToggle, handleFilter}) => {
    return (
    <div>
      {toDoList.map(todo => {
          return (
          <Todo todo={todo} handleToggle={handleToggle} handleFilter={handleFilter} />
          )
        })}
        <button onClick={handleFilter}> Clear completed</button>
    </div>
    )
  }

const Todo = ({todo, handleToggle}) => {

  const handleClick = (e) => {
      e.preventDefault()
      handleToggle(e.currentTarget.id)
    }
    return (
    <div id={todo.id} key={todo.id + todo.task} name="todo" value={todo.id} onClick={handleClick} className={todo.complete ? "todo strike" : "todo"}>
      {todo.task}
    </div>
    )
  }

  const TodoForm = ({addTask}) => {
      const [userInput, setUserInput] = useState('')

      const handleChange = (e) => {
          setUserInput(e.currentTarget.value)
        }

      const handleSubmit = (e) => {
          e.preventDefault()
          addTask(userInput)
          setUserInput('')
        }

      return (
        <form onSubmit={handleSubmit}>
          <input value={userInput} type="text" onChange={handleChange} placeholder="Enter task..."/>
          <button>Submit</button>
        </form>
      )
    }
