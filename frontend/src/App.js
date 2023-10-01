
// import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Homepage';
import Register from './components/Register/Register';
import Login from './components/login/Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Todo } from './components/todo/Todo';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { authActions } from './store';

function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    const id = sessionStorage.id;
    if(id){
      dispatch(authActions.login())
    }
    
  } , [])
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/todo' element={<Todo />} />
        </Routes>
      </Router>


    </div>
  );
}

export default App;
