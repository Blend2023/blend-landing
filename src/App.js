import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"; 
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";

import "./App.css"

 function App() {
  return (
    <div className="App"> 
    <BrowserRouter>
      <Routes> 
        <Route path="/" element={<Home />} />  
        <Route path="/login" element={<Login />} />  
        <Route path="/signup" element={<Signup />} />  

      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;