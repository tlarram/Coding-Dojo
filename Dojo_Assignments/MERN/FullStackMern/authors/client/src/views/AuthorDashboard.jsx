import React, {useState, useEffect} from 'react'
import axios from 'axios'
import AuthorTable from '../components/AuthorTable'

const AuthorDashboard = () => {
    const [authors,setAuthors] = useState([])

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/author`)
        .then(res=>{
            setAuthors(res.data)

        })
        .catch(err=>console.log(err))
    },[])

    const filterList= (deleteId) =>{
        const updatedList = authors.filter((eachAuth)=>deleteId!==eachAuth._id)
        setAuthors(updatedList)
    }
return (
    <div>
        <p>We have quotes by:</p>
        {
            authors?
            <AuthorTable authors={authors} onDelete={filterList}/>:
            <h1>No Authors</h1>
        }
    </div>
)
}

export default AuthorDashboard