import React from 'react'

const ToDoListDisplay=(props) =>{
    const handleDelete=(deleteIdx) =>{
        props.onDelete(deleteIdx)
        };
    
        const handleCheckbox = (e, updateIdx)=>{
            const toDoCopy= [...props.toDoList]
            toDoCopy[updateIdx].isComplete = e.target.checked
            props.onUpdate(toDoCopy)
        }
  return (
    <div>
        <h1>To Do list</h1>
        <ul>   
{
    props.toDoList.map((toDo, i) =>{

    
        return(
           
            <li key={i} style= { toDo.isComplete? {textDecoration: "line-through"} : {textDecoration: "none"}}>{toDo.toDo} 
            <input  type='checkbox' name='complete' checked={toDo.isComplete}
        onChange={(e)=>handleCheckbox(e,i)} />
            <button onClick={()=>handleDelete(i)}>Delete</button>
            </li>
           
        )
    })
}
        </ul>
    
    </div>
  )
}

export default ToDoListDisplay