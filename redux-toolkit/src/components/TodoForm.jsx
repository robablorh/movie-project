import React from 'react'
import { useState } from 'react'
import {v4 as uuid} from 'uuid'
import { useDispatch, useSelector } from 'react-redux'
import {addtodolist} from '../slices/TodoSlice'


const TodoForm = () => {
 
const{todolist}= useSelector((state)=>state.TodoReducer);
    
 


  const handleSubmit=(e)=>{
       e.preventDefault();
       const updatedTodoList = {
        name: e.target.name.value,
        email: e.target.email.value,
        id :uuid (),
      };

      todolist({ ...todolist, ...updatedTodoList });
      
        dispatch(addtodolist(updatedTodoList))

      todolist("");
    };
      

      
     const handleChange = (e) => {
    setTodolist({ ...todolist, [e.target.name]: e.target.value });
          };
   


  return (
   <form onSubmit={handleSubmit}>

       <label>Name</label> &nbsp;
       <input type='text' name='name' onChange={handleChange}/><br/><br/>
       
       <label>Email</label> &nbsp;
       <input type='email'  name='email' onChange={handleChange}/> <br/><br/>
       
       <input type='submit' value="submit" />

   </form>
  )

  }
export default TodoForm
