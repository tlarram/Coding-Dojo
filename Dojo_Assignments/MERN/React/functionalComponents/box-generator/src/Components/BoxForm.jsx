import React, { useState } from 'react';
import StyledBox from './StyledBox';
import StyledButton from './StyledButton';
import StyledInput from './StyledInput';
    
const BoxForm = (props) => {
    const colorField = React.createRef();
    const widthField = React.createRef();

    const [box, setBox] = useState({
        boxes:[],
        newColor:'',
        newWidth: 0
});
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setBox({
            boxes:[...box.boxes,{
                color: box.newColor,
                width: box.newWidth
            }]
        })
};
    const onChangeColorHandler = e => {
    e.preventDefault();
    setBox({
    ...box,
    newColor: e.target.value
    });
};
    const onChangeWidthHandler = e => {
    e.preventDefault();
    setBox({
        ...box,
        newWidth: e.target.value
    });
};
    
return (
    <div>
    <h1>Add a box box!</h1>
    <label>Color:</label>
    <StyledInput
        ref={colorField}
        onChange={onChangeColorHandler}
        placeholder="Color. Ex: red, green, blue..."/>
    <label>Width:</label>
    <StyledInput
        ref={widthField}
        onChange={onChangeWidthHandler}
        placeholder="Choose you pixels Ex: 20px"/>
    <StyledButton onClick={handleSubmit}>Submit</StyledButton>
    <div>
        {box.boxes.map((box, i) => (
        <StyledBox
            key={i}
            bgColor={box.color}
            width={box.width}
            height={box.width}
        ></StyledBox>
        ))}
    </div>
    </div>
    );
};

export default BoxForm;