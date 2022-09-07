import React from "react"
import {
  Link,
  Routes,
  Route
} from "react-router-dom";
import {useParams} from 'react-router-dom'
import Home from "./Components/Home";
import Word from "./Components/Word";
import Number from "./Components/Number";
import WordColor from "./Components/WordColor";
import ErrorPage from "./Components/ErrorPage";
import Display from "./Components/Display";

function App() {
  return (
    <div>
      <p>
        <Link to="/home">Home</Link>| 
        <Link to="/4">Number</Link>| 
        <Link to="/hello">Word</Link>|
        <Link to="/home/blue/red">Word with Color</Link>
      </p>
      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/:first" element={<Display />}/>
        <Route path="/:first/:color" element={<Display/>}/>
        <Route path="/:first/:color/:bgcolor" element={<Display />}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
      </div>
  );
}

export default App;
