import React, { useState } from 'react';
import StyledButton from './StyledButton';
import StyledInput from './StyledInput';
    
const BoxForm = (props) => {
    const [colorField, setColorField] = useState('')
    const [widthField, setWidthfield]= useState("") 

    const [box, setBox] = useState([]);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        props.newBox(colorField)
};
    const onChangeColorHandler = e => {
    // e.preventDefault();
    setColorField(e.target.value
    );
};
//     const onChangeWidthHandler = e => {
//     e.preventDefault();
//     setWidthfield(e.target.value
//     );
// };
    
return (
    <div>
    <h1>Add a box box!</h1>
    <form onSubmit={handleSubmit}>
    <label>Color:</label>
    <StyledInput
        value= {colorField}
        onChange={onChangeColorHandler}
        placeholder="Color. Ex: red, green, blue..."/>
    <label>Width:</label>
    {/* <StyledInput
        value= {widthField}
        onChange={onChangeWidthHandler}
        placeholder="Choose you pixels Ex: 20px"/> */}
    {/* <StyledButton type="submit">Submit</StyledButton> */}
    <button type='submit'>Submit</button>
    </form>
    </div>
    );
};

export default BoxForm;