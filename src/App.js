import { useEffect, useState } from 'react';
import TaskList from './components/TaskList';
import Header from './components/Header';
import AddTask from './components/AddTask';
import { BrowserRouter as Router, Route } from 'react-router-dom'

const API = 'http://localhost:9292/'

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch(API + '/tasks')
    .then(r => r.json())
    .then(setTasks)
}, [])

//Fetch task
const fetchTask = async(id) => {
  const res = await fetch(API + id)
  const data = await res.json()
  return data
}

//Add task
const addTask = async (task) => {
  const res = await fetch(API, {
    method: 'POST',
    headers: {
      'Content-type' : 'application/json'
    },
    body: JSON.stringify(task)
  })

  const data = await res.json()

  setTasks([...tasks, data])
}

//Delete Task
const deleteTask = async (id) => {
  await fetch(API + id, {
    method: 'DELETE'
  })


  setTasks(
    tasks.filter((task) => 
    task.id !== id
      )
    )
}

//Toggle Reminder
const toggleReminder = async (id) => {

  const taskToToggle = await fetchTask(id)
  const updTask = {...taskToToggle, reminder: !taskToToggle.reminder}

  const res = await fetch(API + id, {
  method: 'PUT',
  headers: {
    'Content-type': 'application/json'
  },
  body: JSON.stringify(updTask),
})

const data = await res.json()

  setTasks(
    tasks.map((task) => 
    task.id === id ? {...task, reminder:
      !task.reminder} : task
    )
  )
}
  
  return (
    <Router>
    <div className="container">
    
      <Header onAdd = {() => setShowAddTask(!showAddTask)}
        showAdd = {showAddTask}
      />

      <Route path="/" exact render = {(props) => (
        <>
        {showAddTask && <AddTask onAdd = {addTask} />}
        {tasks.length > 0 ? (
          <TaskList
          tasks = {tasks}
          onDelete = {deleteTask}
          onToggle = {toggleReminder}
          />
        ) : (
          "No tasks to show"
        )}
        </>
      )}
      />
      {/* <TaskList tasks = {tasks} onToggle = {toggleReminder} onDelete = {deleteTask} /> */}

      </div>
    </Router>
  );
}

export default App;
