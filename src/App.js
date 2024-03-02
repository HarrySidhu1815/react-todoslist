import './App.css';
import Header from "./MyComponents/Header";
import Todos from "./MyComponents/Todos";
import AddTodo from './MyComponents/AddTodo';
import Footer from "./MyComponents/Footer";
import About from './MyComponents/About';

import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo = [];
  }else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo)=> {
    console.log("I am onDelete todo", todo)
    setTodos(todos.filter((e) =>{
      return e != todo;
    }
    ))
  }

  const addTodo = (title, desc) => {
    console.log("I am adding the this todo", title, desc)
    let sno;
    if(todos.length == 0){
      sno = 0;
    } else{
      sno = todos[todos.length - 1].sno + 1;
    }
    const MyTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, MyTodo]);
    console.log(MyTodo);
  }
  const [todos, setTodos] = useState(initTodo);

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <>
    <Router>
        <Header title="Harry Todo List" searchbar={true} />
        <Routes>
            <Route path = "/" element = {
              <>
              <AddTodo addTodo = {addTodo}/>
              <Todos todos = {todos} onDelete = {onDelete} /> 
              </>
            }/>
              
            <Route path = "/about" element = {<About/>}/>
        </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
