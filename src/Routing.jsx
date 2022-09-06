import React from 'react'
import { Routes, Route, Navigate, Link } from 'react-router-dom';
import Homepage from './pages/Homepage.jsx';
import About from './pages/About.jsx';
import Creators from './pages/Creators.jsx';
import Install from './pages/Install.jsx';
const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage />}>
        </Route>
        <Route path='/about' element={<About />}>
         
        </Route>
        <Route path='/install' element={<Install />}></Route>
        <Route path='/creators' element={<Creators />}></Route>
      </Routes>
    </div>
  );
}

export default Routing