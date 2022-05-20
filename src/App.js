import './App.css';
import Register from "./components/signup/signup"
import {Routes,Route} from "react-router-dom";
import Login from "./components/login/login";
import Homepage from "./components/homepage/homepage"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path ="/" element={<Homepage />}/>
        <Route exact path ="/signup" element={<Register />}/>
        <Route exact path ="/Login" element={<Login />}/>
      </Routes>
    </div>
  );
}

export default App;
