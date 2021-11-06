import React from 'react'
import Button from 'react-bootstrap/Button'


const Todolist = ({todolist,handleDelete,handleUpdate,handleDone})=>{
    return(
        
        <div>
            <h1>Todo list</h1>
            {todolist.map((todo)=> 
             <p key={todo.id}>Title:-
             {todo.title.title}&nbsp; Description:- {todo.title.description}&nbsp;
             <Button varient="Danger" onClick={() =>handleDelete(todo.id)}>Delete</Button>&nbsp;&nbsp;
             <Button onClick={()=>handleUpdate(todo.id)}>Update</Button>&nbsp;
             <input type="checkbox" onChange={()=>handleDone(todo.id)}/>
            </p>)}
        </div>
        
        
    )
    
}
export default Todolist