import React from 'react'
import './update.css'

const Update = ({display}) => {
  return (
    <div className='p-5  d-flex justify-content-center align-items-start flex-column update'>
        <h3>Update Your Task</h3>
        <div className="todo_input_item">
            <label htmlFor="text">Title</label>
            {/* <input type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} placeholder="What are you planning " name="" id="" /> */}
            <input type="text"  className="updateTitle" placeholder='Update your title'/>
          </div>

          <div className="todo_input_item">
            <label htmlFor="text">Description</label>
            {/* <input type="text" value={newDescription} onChange={(e) => setNewDescription(e.target.value)} placeholder="What is the description of your task ?" name="" id="" /> */}
            <input type="text"  className="updateDescription" placeholder='Update your Description'/>
          </div>

          <div className="updateBtn">
            {/* <button type='button' onClick={handleAddTodo} className="primaryBtn">Add</button> */}
            <button className='btn btn-dark my-4'>UPDATE</button>
            <button 
            onClick={()=>display("none")}
            className='btn btn-danger my-4'>CLOSE</button>
          </div>
    </div>
  )
}

export default Update