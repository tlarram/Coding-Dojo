import React, {useState} from 'react'

const  ToDoListForm =(props) =>{
  const [toDo, setToDo] = useState('')


  const handleSubmit= (e) =>{
    e.preventDefault()
    if (toDo.length ===0){
      return;
    }
    props.sendRequest({toDo, isComplete:false})
  }

  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' name="toDoItem" value={toDo} onChange={e=>setToDo(e.target.value)}></input>
        <button type="submit">Add</button>
      </form>
    </div>
  )
}

export default ToDoListForm