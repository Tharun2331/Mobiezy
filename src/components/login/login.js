import React,{useState,useRef} from 'react';
import Axios from "axios";
import "./login.css";
import {Link} from 'react-router-dom';
import CustomButton from '../custombutton/custombutton';
import CustomInput from '../customInput/customInputs';
function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");



    const handleSubmit = async e => {
        e.preventDefault();
          
        setEmail(e.target.value)
        setPassword(e.target.value)
        try {
            Axios.post("http://localhost:8000/login", {
                email: email,
                password: password
            })
        } catch (error) {
            alert(error)
        }
          
}

return (
  <html>
  <head>
  </head>
  <body>
        <div class="wrapper">
  <div class="container">

    <div class="sign-in-container">
      <form>
        <h1>LOGIN</h1>
        
        <h3>Welcome back, Feel free to browse through </h3>
        <CustomInput  type="email" placeholder="Email"/>
        <CustomInput  type="password" placeholder="Password"/>
        <CustomButton onClick={handleSubmit} className="form_btn">
                    Sign In
        </CustomButton>
      </form>
    
    </div>
    <div class="overlay-container">
      <div class="overlay-right">
        <h1>Hello Friend,</h1>
        <p class="para">Let us know you better !!</p>
        <Link to="/signup">
          <CustomButton className="form_btn overlay_btn">
              Please Register
          </CustomButton>
        </Link>
      </div>
    </div>
    </div>
    </div>
    </body>
    </html>


    )
}


export default Login;