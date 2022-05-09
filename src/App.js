import logo from './logo.svg';
import React from 'react';
import './App.css';
import {BrowserRouter , Route, Routes} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Error from './pages/Error';
import About from './pages/About';
import Singlecocktail from './pages/Singlecocktail';
import Creator from './pages/Creator';
function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/cocktail/:id' element={<Singlecocktail/>}/>
        <Route path='/creator' element={<Creator />} />
        <Route path='*' element={<Error/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
