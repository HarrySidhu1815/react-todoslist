import React from 'react'
import TodoItem from './TodoItem'

const Todos = (props) => {
  const height = {
    minHeight: "70vh"
  }
  return (
    <div className='container my-3' style={height}>
      <h3 className='my-3'>Todo List Starts from here</h3>
      {props.todos.length === 0 ? "No Todos to display" :
      props.todos.map((todo)=>{
        return (
          <>
        <TodoItem todo = {todo} key={todo.sno} onDelete = {props.onDelete}/><hr/>
        </>
        )
      })}
    </div>
  )
}

export default Todos
