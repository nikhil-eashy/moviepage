import logo from './logo.svg';
import './App.css';
import Addmovie from './components/Addmovie';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Movie from './components/Movies';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
      <Route path='/' element={<Movie></Movie>}></Route>
        <Route path='/add' element={<Addmovie></Addmovie>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
