import logo from './logo.svg';
import './App.css';
import Main from './views/Main';
import {Routes, Route, Link} from "react-router-dom";
import OneProduct from './views/OneProduct';
function App() {
  return (
    <div >
      <h1>Product Dashboard</h1>
      {/* <Main/> */}

      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/api/product/:id' element={<OneProduct/>} />
      </Routes>
    </div>
  );
}

export default App;
