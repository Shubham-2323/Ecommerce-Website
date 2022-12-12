import React from 'react';
import './App.css';
import {

  Routes,
   
   Route,
   
 } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import Offers from './components/Offers';
import Products1 from './components/Products1';

function App() {
  return (
    <>
    <Navbar/>
    <div className='container'>
      
    <Routes>

   
    <Route path="/" element={<Home/>}/>
    <Route path="/products" element={<Products/>}/>
    <Route path="/products1/:id" element={<Products1/>}/>
    <Route path="/about" element={<About/>}/>
    
  
  
</Routes>
    </div>
  
  
    </>



  );
}


export default App;
