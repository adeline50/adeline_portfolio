import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
export default  function Navbar(){
  return(
    <div className="bg-blue grid grid-cols-4 sm:grid-cols-2">
<BrowserRouter>
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/product" element={<Product/>}/>
<Route path="/contact" element={<Contact/>}/>
</Routes>
</BrowserRouter>
    </div>
  );
}