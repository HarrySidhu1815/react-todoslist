import React from 'react'

const TodoItem = ({todo, onDelete}) => {
  return (
    <div>
      <h3 className='my-3'>{todo.title}</h3>
      <p>{todo.desc}</p>
      <button className="btn btn-smn btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button>
    </div>
  )
}

export default TodoItem
