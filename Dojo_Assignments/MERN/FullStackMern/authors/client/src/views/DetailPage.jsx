import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'


const DetailPage = () => {
    const {id} = useParams();
    const [author, setAuthor] = useState()
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/author/${id}`)
        .then(res=>{
            console.log(res.data)
            setAuthor(res.data)
        })
        .catch(err=>console.log(err))
    },[])

  return (
    <div>
        {
            author&&
            <div>
                <h1>{author.name}</h1>
            </div>
        }
    </div>
  )
}

export default DetailPage