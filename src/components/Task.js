import React from 'react'
import {FaTimes} from 'react-icons/fa'

function Task({ task, onToggle, onDelete }) {

  const { reminder, category_id, completed, description, due_by, id } = task;

  return (
    <div
      className = {`task ${reminder ? 
        'reminder' : ''}`}
          onDoubleClick = {() => 
          onToggle(id)}
        >
        <h3>
          {description} {' '}
            <FaTimes style = {{color: 'red', cursor: 'pointer'}} 
            onClick = {() => onDelete(task.id)}
            />
        </h3>
        <p>{due_by}</p>
    </div>
  )
}

export default Task