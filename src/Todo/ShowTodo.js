import React from 'react'
import Button from 'react-bootstrap/Button'


const Todolist = ({todolist,handleDelete,handleUpdate,handleDone})=>{
    return(
        
        <div>
            <h1>Todo list</h1>
            {todolist.map((todo,index)=>
             <p key={index}>Title:-
             {todo.title}&nbsp; Description:- {todo.description}&nbsp;
             <Button varient="Danger" onClick={() =>handleDelete(index)}>Delete</Button>&nbsp;&nbsp;
             <Button onClick={()=>handleUpdate(index)}>Update</Button>&nbsp;
             <input type="checkbox" onChange={()=>handleDone(index)}/>
            </p>)}
        </div>
        
        
    )
    
}
export default Todolist