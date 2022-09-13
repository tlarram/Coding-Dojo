import React, {useEffect, useState} from 'react'
import axios from "axios"
import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'

const OneProduct = (props) => {
    const {id} = useParams();
    const [product, setProduct] = useState()
    const navigate= useNavigate()
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/product/${id}`)
        .then(res=>setProduct(res.data.Product))
        .catch(err=>console.log(err))
    },[])

    const handleDelete= () =>{
    axios.delete(`http://localhost:8000/api/product/${id}`)
        .then(res=>{
            navigate(`/`)

        })
        .catch(err=>console.log(err))
    }
  return (
    <div>
        {
            product&&
            <div>
                <h1>{product.title}</h1>
                <h2>Price:${product.price}</h2>
                <p>Description:{product.description}</p>
                <Link to={`/product/edit/${product._id}`}>Edit</Link>
                <button onClick={()=>handleDelete()}>Delete</button>
            </div>
        }
    </div>
  )
}

export default OneProduct