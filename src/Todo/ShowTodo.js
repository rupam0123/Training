import React from 'react'
import Button from 'react-bootstrap/Button'


const Todolist = ({todolist,handleDelete,handleUpdate,handleDone})=>{
    return(
        
        <div>
            <h1>Todo list</h1>
<<<<<<< HEAD
            {todolist.map((todo)=> 
             <p key={todo.id}>Title:-
             {todo.title.title}&nbsp; Description:- {todo.title.description}&nbsp;
             <Button varient="Danger" onClick={() =>handleDelete(todo.id)}>Delete</Button>&nbsp;&nbsp;
             <Button onClick={()=>handleUpdate(todo.id)}>Update</Button>&nbsp;
             <input type="checkbox" onChange={()=>handleDone(todo.id)}/>
=======
            {todolist.map((todo,index)=>
             <p key={index}>Title:-
             {todo.title}&nbsp; Description:- {todo.description}&nbsp;
             <Button varient="Danger" onClick={() =>handleDelete(index)}>Delete</Button>&nbsp;&nbsp;
             <Button onClick={()=>handleUpdate(index)}>Update</Button>&nbsp;
             <input type="checkbox" onChange={()=>handleDone(index)}/>
>>>>>>> 9d30f70210b3cca13ed87d2733c50e9c220a17db
            </p>)}
        </div>
        
        
    )
    
}
export default Todolist