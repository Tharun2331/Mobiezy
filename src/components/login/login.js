import React,{useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom'
import Axios from "axios";
import "./login.css";
import CustomButton from "../custombutton/custombutton";
import CustomInput from "../customInput/customInputs";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [invalid, setInvalid] = useState("")
    const navigate = useNavigate();

    useEffect(() => {
      setEmail("")
      setPassword("")
    }, [])

    const emailCallback = (value) => {
      setEmail(value);
    }

    const passwordCallback = (value) => {
      setPassword(value);
    }

    // const toggleInvalid = () => setInvalid((state) => !state);

    const handleSubmit = async e => {
        // e.preventDefault();
        setInvalid("false")
        let a = false

        if (!(/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(email)))
            {      
              // toggleInvalid()
              setInvalid("true")
              a = true
              // alert("hello")
              // alert(a)
              alert("You have entered an invalid email address!")
            }
        if (!a) {
          if (password.length < 6) {
                setInvalid(true)
                a = true
                alert("The password must be at least 6 characters")
                // toggleInvalid()
            }
          }
          // alert(a)
        if (!a) {

          navigate('/upload', { replace: true });

          try {
            await Axios.post("http://localhost:8000/login", {
                email: email,
                password: password
            })
          } catch (error) {
            console.log(error)
          }
        
        }
        
      
        // setInvalid("false")
}

return (
  <html>
  <head>
  </head>
  <body>
  <div class="wrapper">
  <div class="container">
    <div class="sign-in-container">
      <form class="form">
        <h1>LOGIN</h1>
        <div class="login_headline">
          <h3 style={{"marginLeft": "25%"}}>Welcome back.</h3> 
          <h3>Feel free to browse through....</h3>
        </div>

        <CustomInput placeholder="Email" className="custom_input" name="email" callback={emailCallback}/>
        <CustomInput type="password" placeholder="Password" className="custom_input" name="password" callback={passwordCallback}/>
        <div onClick={handleSubmit}>
          <CustomButton className="form_btn" >
            SIGN IN
          </CustomButton>
        </div>

      </form>
    </div>
    <div class="overlay-container">
      <div class="overlay-right">
        <h1>Hello Friend,</h1>
        <p class="para">Let us know you better !!</p>
        <Link to="/">
          <CustomButton className="overlay_btn" >
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


export default Login