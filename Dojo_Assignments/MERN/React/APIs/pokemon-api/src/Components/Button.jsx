import React, {useState} from 'react'
import Pokemon from './Pokemon'

const Button =(props) => {
  const [clickbutton, setClickButton] = useState('')

    const handleSubmit=(e) => {
      e.preventDefault()
      props.sendRequest({clickbutton})
    }
  return (
    <form onClick={handleSubmit}>
        <button onClick={e=>setClickButton(true)}>Click for Pokemon</button>
    </form>

  )
}

export default Button