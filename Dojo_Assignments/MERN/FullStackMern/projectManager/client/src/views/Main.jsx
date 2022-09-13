import React, {useEffect, useState} from 'react'
import axios from "axios"
import AllProducts from './AllProducts'
import ProductForm from './ProductForm'


const Main = (props) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product`)
        .then(res=>setProducts(res.data.Products))
        .catch(err=>console.log(err))
    })
  return (
    <div>
        <ProductForm/>
        {
        products?
        <AllProducts products={products}/>:
        <h1>No products</h1>
        }
    </div>
  )
}

export default Main