import React, { useEffect, useState }  from 'react'
import Task from "./Task"

const API = 'http://localhost:9292'

function TaskList() {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch(API + '/tasks')
        .then(r => r.json())
        .then(setTasks)
    }, [])

    const taskListItems = tasks.map(task => {
        return <Task key={task.id} task={task}/>
    })

  return (
    <div>
        <h2>TO DO:</h2>
        <ul>
            {taskListItems}
        </ul>
    </div>
  )
}

export default TaskList