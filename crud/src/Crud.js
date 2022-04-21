import React, { useState } from 'react'
import {v4 as uuidv4} from 'uuid';
function Crud() {
  const [input, setInput]=useState(' ')

  const [todos, setTodo]=useState([
    {
      id:1, name:'Archana', info:'Interested in Cooking'
    },
    {
      id:2, name:'Dhanuja', info:'Interested in Book Reading'
    },
    {
      id:3, name:'Aarathy', info:'Interested in Drawing'
    },
    {
      id:4, name:'Vijay Ragavan', info:'Interested in Cricket'
    },
    {
      id:5, name:'Rahul', info:'Interested in Dance'
    }])
const handleChange=(e)=>{
  setInput(e.target.value)
}
const addTodo=()=>{
  setTodo([...todos, {id:uuidv4(), info:input}])
  setInput('')
}
const handleDelete=(id)=>{
  const newlist = todos.filter(todo => todo.id !== id);
  setTodo(newlist) 
}
const handleUpdate=(index)=>{ 
  const updatedTask = prompt('Update your task', todos[index].info)
  let copiedList=[...todos];
  copiedList[index].info=updatedTask;
  setTodo(copiedList)
}
  return (
    <div>
      <label>Info</label> 
      <input type="text" value={input} onChange={handleChange}></input>
      <button className='btn btn-primary' onClick={addTodo}>Add</button>
        {todos.map((todo,index) => <div key={todo.id}><span>{todo.info}</span>
        <button className='btn btn-outline-primary' onClick={()=>handleDelete(todo.id)}>X</button>
        <button className='btn btn-outline-primary' onClick={()=>handleUpdate(index)}>Update</button></div>)}
        
    </div>
  )
}

export default Crud