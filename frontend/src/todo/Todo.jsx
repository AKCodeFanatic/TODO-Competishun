import './todo.css'
import React, { useState, useEffect } from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import { BsCheckLg } from 'react-icons/bs'
import {GrDocumentUpdate} from 'react-icons/gr'



export const Todo = () => {

  
  const [allTodos, setTodos] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [completedTodos, setCompletedTodos] = useState([]);
  // const checkEmpty = ()=>{
  //   if(allTodos.length===0 && completedTodos.length!=0){
  //     console.log("length" , allTodos.length);
  //     return false;
  //   } else{
  //     return true;
  //   }
  // }
  const [isTodo, setIsTodo] = useState(true);

  

  const handleAddTodo = () => {
    let newTodoItem = {
      title: newTitle,
      description: newDescription
    }

    let updatedTodoArr = [...allTodos];
    updatedTodoArr.push(newTodoItem);
    setTodos(updatedTodoArr);
    localStorage.setItem("todolist", JSON.stringify(updatedTodoArr));
  };

  useEffect(() => {
    let savedTodo = JSON.parse(localStorage.getItem('todolist'));
    if (savedTodo) {
      setTodos(savedTodo);
    }
    let completedTodo = JSON.parse(localStorage.getItem("completedTodolist"));
    if(completedTodo){
      setCompletedTodos(completedTodo);
    }
  }, [])

  const handleDeleteTodo = (index) => {

    let reducedTodo = [...allTodos];
    reducedTodo.splice(index, 1);

    localStorage.setItem('todolist', JSON.stringify(reducedTodo));
    setTodos(reducedTodo);
  }

  const handleComplete = (index) => {
    let now = new Date();
    let dd = now.getDate();
    let mm = now.getMonth() + 1;
    let yyyy = now.getFullYear();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    let completedOn = dd + '-' + mm + '-' + yyyy + ' at ' + h + ':' + m + ":" + s;

    let completedItem = {
      ...allTodos[index],
      completedOn: completedOn
    }

    handleDeleteTodo(index);

    let updatedCompletedArr = [...completedTodos];
    updatedCompletedArr.push(completedItem);
    setCompletedTodos(updatedCompletedArr);

    localStorage.setItem('completedTodolist', JSON.stringify(updatedCompletedArr));

  }

  const handleDeleteCompletedTodo = (index) => {
    let reducedTodo = [...completedTodos];
    reducedTodo.splice(index, 1);

    localStorage.setItem('completedTodolist', JSON.stringify(reducedTodo));
    setCompletedTodos(reducedTodo);
  }


  return (
    <div className="Starting">
      <h1>My TODOS</h1>
      <div className="todo_section">
        <div className="todo_data">

          <div className="todo_input_item">
            <label htmlFor="text">Title</label>
            <input type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} placeholder="What are you planning " name="" id="" />
          </div>

          <div className="todo_input_item">
            <label htmlFor="text">Description</label>
            <input type="text" value={newDescription} onChange={(e) => setNewDescription(e.target.value)} placeholder="What is the description of your task ?" name="" id="" />
          </div>

          <div className="todo_input_item">
            <button type='button' onClick={handleAddTodo} className="primaryBtn">Add</button>
          </div>
        </div>

        <div className="btn_area">
          <button className={`secondaryBtn ${isTodo == true && 'active'}`} onClick={() => {
            setIsTodo(true);
          }}>TODO</button>
          <button className={`secondaryBtn ${isTodo == false && 'active'}`} onClick={() => {
            setIsTodo(false);
          }}>Completed</button>
        </div>

        <div className="todo_list">

          {isTodo == true && allTodos.map((item, index) => {
            return (
              <div className="todolist_item" key={index}>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>

                <div className='iconsContainer'>
                  <div>
                  <AiOutlineDelete className='icon' title='Delete?' onClick={() => handleDeleteTodo(index)} />
                  </div>
                  <div>
                  <BsCheckLg
                    title="Completed?"
                    className=" check-icon"
                    onClick={() => handleComplete(index)}
                  />
                  </div>
                  <div>
                  <GrDocumentUpdate className='update-icon' />
                  </div>
                </div>
              </div>
            )
          })}

          {isTodo == false && completedTodos.map((item, index) => {
            return (
              <div className="todolist_item" key={index}>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <p><italic>Completed On : {item.completedOn}</italic></p>
                </div>

                <div>
                  <AiOutlineDelete className='icon' title='Delete?' onClick={() => handleDeleteCompletedTodo(index)} />
                </div>


              </div>
            )
          })}

        </div>
      </div>
    </div>


  )
}
