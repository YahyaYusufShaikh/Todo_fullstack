// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState } from 'react'
import './App.css'
import { CreateTodo } from "./components/CreateTodo"
import { Todos } from './components/Todos'

function App() {
  // eslint-disable-next-line no-unused-vars
  const [todos, setTodos] = useState([]); 

  fetch('http://localhost:3000/todos')
  .then(async (res)=>{
    const jsona = await res.json();
    setTodos(jsona.todos);
  })

  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos todos={todos}></Todos>
    </div>
  )
}

export default App
