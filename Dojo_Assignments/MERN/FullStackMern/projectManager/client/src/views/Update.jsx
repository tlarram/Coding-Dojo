import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";

const Update = (props) => {
    const { id } = useParams();
    const navigate= useNavigate("")
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('');
    
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/product/${id}`)
        .then(res=>{
            const prod =res.data
            setTitle(prod.Product.title);
            setPrice(prod.Product.price);
            setDescription(prod.Product.description)
        })
        .catch(err=>console.log(err))
    },[])
    
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/product/edit/${id}`, {
            title,
            price,
            description
        })
            .then(res => {
                navigate(`/product/${res.data.Product._id}`)
            })
            .catch(err => console.error(err));
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title: </label>
            <input type="text" name='title' value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div>
                <label>Price: </label>
            <input type="number" name='price' value={price} onChange={(e) =>setPrice(e.target.value)} />
            </div>
            <div>
                <label>Description </label>
            <input type="text" name='description' value={description} onChange={(e) =>setDescription(e.target.value)} />
            </div>
            <button type="submit">Update</button>
        </form>
    )
    }

export default Update