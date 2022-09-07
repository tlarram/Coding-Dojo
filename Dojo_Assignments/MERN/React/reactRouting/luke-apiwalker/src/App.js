import React from "react"
import {
  Routes,
  Route
} from "react-router-dom";
import HeaderForm from "./Components/HeaderForm"
import DisplayPerson from "./Components/DisplayPerson"
import DisplayPlanet from "./Components/DisplayPlanet"
import Error from "./Components/Error";
import Home from "./Components/Home";

function App() {
  return (
    <div>
      <h1>Star Wars</h1>
      <HeaderForm/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/people/:id" element={<DisplayPerson/>}/>
        <Route path="/planets/:id" element={<DisplayPlanet/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </div>
  );
}

export default App;
