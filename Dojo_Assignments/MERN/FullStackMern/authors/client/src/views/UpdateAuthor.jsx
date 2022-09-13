import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'

const UpdateAuthor = () => {
  const { id } = useParams();
  const navigate= useNavigate("")
  const [name, setName] = useState('')
  
  
  useEffect(()=>{
      axios.get(`http://localhost:8000/api/author/${id}`)
      .then(res=>{
          const auth =res.data
          setName(auth.name);
      })
      .catch(err=>console.log(err))
  },[])
  
  const handleSubmit = (e) => {
      e.preventDefault();
      axios.put(`http://localhost:8000/api/author/edit/${id}`, {
          name,
      })
          .then(res => {
              navigate(`/`)
          })
          .catch(err => console.error(err));
  }
  return (
    <form onSubmit={handleSubmit}>
    <div>
      <p>Update an author</p>
        <label>Name</label>
        <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)}/>
    </div>
    <Link to={`/`}><button>Cancel</button></Link>
    <button type="submit">Update author</button>
</form>
  )
}

export default UpdateAuthor