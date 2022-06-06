import React,{useState} from "react";
import './App.css';
import Register from "./components/signup/signup"
import {Routes,Route} from "react-router-dom";
import Login from "./components/login/login";
import Homepage from "./components/homepage/homepage"
import CSC from "./components/form/csc"
import Upload2 from "./components/upload_2.0/upload2"
function App() {

  return (
    <div className="App">
      <Routes>
        <Route exact path ="/" element={<Homepage />}/>
        <Route exact path ="/signup" element={<Register />}/>
        <Route exact path ="/Login" element={<Login />}/>
        <Route exact path ="/upload" element={<Upload2 />}/>
      </Routes>
    </div>
  );
}

export default App;
