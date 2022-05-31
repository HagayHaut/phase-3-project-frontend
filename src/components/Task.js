import React from 'react'

function Task({ task }) {

    const { category_id, completed, description, due_by, id } = task;

  return (
    <li>
        {description}
    </li>
  )
}

export default Task