import React from 'react'
import {useState} from 'react'

const AddTask = ({onAdd}) => {
    const [description, setDescription] = useState ('')
    const [due_by, setDue_by] = useState ('')
    const [reminder, setReminder] = useState (false)
    const [category, setCategory] = useState ('')

const onSubmit = (e) => {
    e.preventDefault()

    if(!description) {
        alert('Please add a task')
        return
    }

    const taskObj = {
        description: description,
        reminder: reminder,
        due_by: due_by,
        category: category
    }

    onAdd (taskObj)
    setDescription('')
    setDue_by('')
    setReminder(false)
}

    return (
        <form className = 'add-form' onSubmit = {onSubmit}> 
            <div className = 'form-control'>
                <label>Task</label>
                <input type = 'text' placeholder = 'Add Task' 
                    value = {description} 
                    onChange = {(e) => setDescription(e.target.value)} />
            </div>
            <div className = 'form-control'>
                <label>Due By Date</label>
                <input type = 'date'
                    value = {due_by}
                    onChange = {(e) => setDue_by(e.target.value)}
                />
            </div>
            <div className = 'form-control'>
                <label>Select Category</label>
                <select value={category} onChange={e => setCategory(e.target.value)}>
                    <option>Miscellaneous</option>
                    <option>Exercise</option>
                    <option>Shopping</option>
                    <option>Chores</option>
                    <option>Personal</option>
                    <option>Work</option>
                </select>
            </div>
            <div className = 'form-control form-control-check' >
                <label>Set Reminder</label>
                <input type = 'checkbox' 
                    checked ={reminder}
                    // value = {reminder}
                    onChange = {(e) => setReminder(e.currentTarget.checked)}/>
            </div>
            <input type = 'submit' value= 'Save Task'
            className = 'btn btn-block' />
        </form>
    )
}

export default AddTask