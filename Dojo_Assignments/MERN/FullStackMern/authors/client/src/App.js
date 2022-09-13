import logo from './logo.svg';
import './App.css';
import {Routes, Route, Link} from "react-router-dom";
import AuthorDashboard from './views/AuthorDashboard';
import CreateAuthor from './views/CreateAuthor';
import UpdateAuthor from './views/UpdateAuthor';
import DetailPage from './views/DetailPage';

function App() {
  return (
    <div >
      <h1>Favorite Authors</h1>

      <Link to={`/`}>Home</Link>
      <Link to={'/author/add'}>Create Author</Link>
      <Routes>
        <Route path='/' element={<AuthorDashboard/>} />
        <Route path='/author/add' element={<CreateAuthor/>} />
        <Route path='/author/:id' element={<DetailPage/>} />
        <Route  path="/author/edit/:id/" element={<UpdateAuthor/>}/>
      </Routes>
    </div>
  );
}

export default App;
