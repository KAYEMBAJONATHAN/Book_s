import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Categories from './Components/Categories';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/categories" element={<Categories />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
