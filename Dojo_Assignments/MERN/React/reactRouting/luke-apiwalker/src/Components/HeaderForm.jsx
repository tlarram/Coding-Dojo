import React,  {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const HeaderForm = () => {
    const[id, setId] = useState('');
    const [category, setCategory]= useState("")
    const navigate= useNavigate();

    const handleSubmit= (e) =>{
        e.preventDefault()
        navigate(`/${category}/${id}`)
        clearForm()
    }

    const clearForm = () =>{
        setId("")
        setCategory("")
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            Search for:
            <select name="category"  onChange={e=>setCategory(e.target.value)} value={category}>
                <option hidden>Choose a category</option>
                <option value="people">Person</option>
                <option value='planets'>Planet</option>
            </select>
            Search for: 
            <input type='text' name="id" value={id} onChange={e=>setId(e.target.value)}/>
            <button type="submit">Submit</button>
        </form>
    
    </div>
  )
}

export default HeaderForm