import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


const AuthorTable = (props) => {
    
    const handleDelete= (deleteId)=>{
        axios.delete(`http://localhost:8000/api/author/${deleteId}`)
        .then(res=>{
            props.onDelete(deleteId)
        })
        .catch(err=> {
            const errorResponseData = err.response.data
            const errMsgArr= []
            for(const eachKey in errorResponseData){
                errMsgArr.push(errorResponseData[eachKey].message)
            }
    })

    }

  
  
    return (
    <table>
        <thead>
            <tr>
                <th>Author</th>
                <th>Actions available</th>
            </tr>
        </thead>
        <tbody>
            {
                
                props.authors.sort((a, b) => a.name.localeCompare(b.name)).map((eachAuthor,i) => {
                    return(
                        <tr key={i}>
                            <td><Link to={`/author/${eachAuthor._id}`}>{eachAuthor.name}</Link></td>
                            <td><Link to={`/author/edit/${eachAuthor._id}`}><button>Edit</button></Link><button onClick={()=>handleDelete(eachAuthor._id)}>Delete</button></td>
                        </tr>
                    )
                })
            }
        </tbody>
    </table>
  )
        }

export default AuthorTable