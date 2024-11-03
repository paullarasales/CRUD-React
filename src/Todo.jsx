import React from 'react'

const Todo = () => {
  return (
    <div>
       
        <form>
            <h2 className='label-wrapper'>
                <label htmlFor="new-todo-input" className='label__lg'>What needs to be done?</label>
            </h2>
            <input type="text" id="new-todo-input" className='input input__lg' placeholder='Create a new todo'></input>
            <button type="submit" className='btn btn__primary btn__lg'>Add</button>
        </form>
        <div className="filters btn-group stack-exception">
        <button type="button" className="btn toggle-btn" aria-pressed="true">
          <span className="visually-hidden">Show </span>
          <span>all</span>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Show </span>
          <span>Active</span>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Show </span>
          <span>Completed</span>
          <span className="visually-hidden"> tasks</span>
        </button>
     
      </div>

    </div>
  )
}

export default Todo