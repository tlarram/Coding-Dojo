import React from 'react'
import StyledBox from './StyledBox'

function DisplayBoxes(props) {
  return (
    <div style={{ display: 'flex' }}>

{
        props.boxes.map((box, i) => {
        return(
        <StyledBox
        key= {i}
        width={100} 
        style={{
            backgroundColor: box
        }}>
        </StyledBox>
        )        
}
)
}
    </div>
  )
}

export default DisplayBoxes
 
 
 
