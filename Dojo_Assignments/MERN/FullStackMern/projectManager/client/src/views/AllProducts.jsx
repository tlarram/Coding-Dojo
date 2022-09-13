import React, {useState, useEffect} from 'react'
import axios from 'axios'
import{Link} from 'react-router-dom'

const AllProducts = (props) => {

  return (
    <div>
        <h1>All Products</h1>
        {props.products.map((product,i) =>
        <p key={i}><Link to={`/product/${product._id}`}>{product.title}</Link><Link to={`/product/edit/${product._id}`}>Edit</Link></p>

        )}
            {/* {props.products.map((eachProduct,i) => {
            return(
            <p key={i}>{eachProduct.title}</p>
            )
            })
            } */}
            
    </div>
  )
}

export default AllProducts