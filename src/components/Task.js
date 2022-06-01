import React from 'react'
import {FaTimes, FaCheckDouble} from 'react-icons/fa'

function Task({ task, onToggle, onDelete, onMarkComplete }) {

  const { reminder, category_id, completed, description, due_by, id } = task;

  const taskClassName = () => {
    let result = 'task'
    if(completed) result += ' completed';
    if(reminder) result += ' reminder';
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
            <FaCheckDouble title='Mark as Completed' style={{color: 'green', cursor: 'pointer'}}
              onClick = { () => onMarkComplete(task.id)}
            />
            <FaTimes title='Delete Task' style = {{color: 'red', cursor: 'pointer'}} 
              onClick = {() => onDelete(task.id)}
            />
              
          </div>
        </h3>
        {/* <p>{due_by}</p> */}
    </div>
  )
}

export default Task