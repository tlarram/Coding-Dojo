import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const CreateForm = () => {
    const navigate= useNavigate()
    const [name,setName] = useState("")
    const [errors,setErrors]= useState([])


    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:8000/api/author/add`, {name})
        .then(res=>{
            console.log(res.data)
            navigate('/')
        })
        .catch(err=> {
            const errorResponseData = err.response.data
            const errMsgArr= []
            for(const eachKey in errorResponseData){
                errMsgArr.push(errorResponseData[eachKey].message)
            }
            setErrors(errMsgArr)
        })
    }

  return (
    <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <p>Add a new author</p>
                    <label>Name:</label>
                    <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)}/>
                </div>
                <Link to={`/`}><button>Cancel</button></Link>
                <button type="submit">Add author</button>
            </form>
            {
                errors.map((eachErr,i)=>(
                    <p key={i} style={{color:"red"}}>{eachErr}</p>
                ))
            }
    </div>
  )
}

export default CreateForm