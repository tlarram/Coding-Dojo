import logo from './logo.svg';
import './App.css';
import Main from './views/Main';
import {Routes, Route, Link} from "react-router-dom";
import OneProduct from './views/OneProduct';
import Update from './views/Update';
function App() {
  return (
    <div >
      <h1>Product Dashboard</h1>
      {/* <Main/> */}
      <Link to={`/`}>Home</Link>
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/product/:id' element={<OneProduct/>} />
        <Route  path="/product/edit/:id/" element={<Update/>}/>
      </Routes>
    </div>
  );
}

export default App;