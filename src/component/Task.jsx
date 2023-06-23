import React from 'react'

const Task = ({ task, id, handleCheckboxChange, handleDeleteTask }) => {
    return (
        <div className="task" key={id}>
            <div className={` ${task.status ? "checked" : ""} description`}>
                <h3>{task.title}</h3>
                <p>{task.description}</p>
            </div>

            <div className='action'>
                <input
                    type="checkbox"
                    checked={task.status}
                    onChange={() => handleCheckboxChange(id)}
                />
                <button onClick={() => handleDeleteTask(id)} >
                    Delete
                </button>
            </div>
        </div>
    )
}

export default Task