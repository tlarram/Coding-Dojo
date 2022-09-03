import React, {useState} from 'react'
import ToDoListDisplay from './ToDoListDisplay'
import ToDoListForm from './ToDoListForm'

const ToDoListView =() => {
    const [toDoList, setToDoList] =useState([])

    const receiveToDoRequest= (newToDoItem) =>{
        setToDoList([...toDoList,newToDoItem])
    }

    const filterToDo = (deleteIdx) => {
        const filteredToDo= toDoList.filter((eachToDo, i)=> i !==deleteIdx)
        setToDoList(filteredToDo)
    }

    const updatedToDo = (updatedToDo) =>{
        setToDoList(updatedToDo)
    }
  return (
    <div>
        <h1>To Do List</h1>
        <ToDoListForm sendRequest=  {receiveToDoRequest}/>
        <ToDoListDisplay toDoList= {toDoList} onDelete={filterToDo} onUpdate={updatedToDo}/>
    </div>
  )
}

export default ToDoListView