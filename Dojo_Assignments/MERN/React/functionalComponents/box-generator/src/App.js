import React, { useState } from 'react';
import BoxForm from './Components/BoxForm';
import DisplayBoxes from './Components/DisplayBoxes';
    
function App() {
const [boxes, setBoxes]= useState([])
const collectInfo = (data)=>{
    setBoxes([...boxes, data])
}

    
    return (
        <>
            <BoxForm newBox={collectInfo}/>
            <DisplayBoxes boxes={boxes}/>
            <p></p>
        </>
    );
}
    
export default App;
