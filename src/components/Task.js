import React from 'react'
import {FaTimes, FaCheckDouble} from 'react-icons/fa'

function Task({ task, onToggle, onDelete, onMarkComplete, isDarkMode }) {

  const { reminder, category_id, completed, description, due_by, id } = task;

  const taskClassName = () => {
    let result = 'task'
    if(completed) result += ' completed';
    if(reminder) result += ' reminder';
    if(isDarkMode) result += ' dark';
    return result;
  }

  return (
    <div
      className = {taskClassName()}
          onDoubleClick = {() => 
          onToggle(id)}
        >
        <h3>
          {description} {' '}
          <div style={{textAlign: 'right'}}>
            <FaCheckDouble title='Mark as Completed' className = {isDarkMode ? 'complete dark' : 'complete'}
              onClick = { () => onMarkComplete(task.id)}
            />
            <FaTimes title='Delete Task' className = {isDarkMode ? 'delete dark' : 'delete'} 
              onClick = {() => onDelete(task.id)}
            />
              
          </div>
        </h3>
        {/* <p>{due_by}</p> */}
    </div>
  )
}

export default Task