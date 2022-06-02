import React,{useState} from "react";
import './App.css';
import Register from "./components/signup/signup"
import {Routes,Route} from "react-router-dom";
import Login from "./components/login/login";
import Homepage from "./components/homepage/homepage"
import Upl from "./components/upl"
import CSC from "./components/form/csc"
function App() {

  return (
    <div className="App">
      <Routes>
        <Route exact path ="/" element={<Homepage />}/>
        <Route exact path ="/signup" element={<Register />}/>
        <Route exact path ="/Login" element={<Login />}/>
        <Route exact path ="/upload" element={<CSC />}/>
      </Routes>
    </div>
  );
}

export default App;
