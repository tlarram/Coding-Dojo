import React, {useEffect, useState} from 'react'
import axios from "axios"
import {useParams} from 'react-router-dom'

const OneProduct = (props) => {
    const {id} = useParams();
    const [product, setProduct] = useState()
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/product/${id}`)
        .then(res=>setProduct(res.data.Product))
        .catch(err=>console.log(err))
    },[])
  return (
    <div>
        {
            product&&
            <div>
                <h1>{product.title}</h1>
                <h2>{product.price}</h2>
                <p>{product.description}</p>
            </div>
        }
    </div>
  )
}

export default OneProduct