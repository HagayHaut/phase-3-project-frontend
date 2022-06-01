import React from 'react'
import Task from "./Task"

function TaskList({ onToggle, tasks, onDelete, onMarkComplete }) {

  return (
    <React.Fragment>
    {tasks.map((task) => (
     <Task 
         key = {task.id} 
         task = {task} 
         onDelete = {() => onDelete(task.id)} 
         onToggle = {() => onToggle(task.id)}
         onMarkComplete = {onMarkComplete}
    />
    ))}
    </React.Fragment>
 )
}

export default TaskList;