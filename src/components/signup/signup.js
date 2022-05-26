import React,{useState} from 'react';
import Axios from "axios"
import "./signup.css";
import CustomButton from '../custombutton/custombutton';
import CustomInput from '../customInput/customInputs';


function Register() {

        const [user, setUser] = useState("");
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [confirmPassword, setConfirmPassword] = useState("");

        const handleSubmit = async e => {
          e.preventDefault();

          try {
            Axios.post("http://localhost:8000/signup", 
            {
              user: user,
              email: email,
              password: password,
              confirmPassword: confirmPassword
            })
          } catch (e) {
            alert(e);
          }
  
          setUser("");
          setEmail("");
          setPassword(""); 
          setConfirmPassword("");
  
      }
  
      const css=` 
          * {
          box-sizing: border-box;
          }
          body {
          margin: 0;
          /*Display width and height*/
          height: 100vh;
          width: 100vw;
          overflow: hidden;
          font-weight: 700;
          /* To make all the elements center */
          display: flex;
          align-items: center;
          justify-content: center;
          /*Font color and background Color*/
          background: #ecf0f3;
          color: black
      }
      .gfg-div {
          /* Login Card Width and height */
          width: 430px;
          height: 95%;
          /* padding */
          padding: 20px 35px 15px 35px;
          border-radius: 35px;
          background: #ecf0f3;
          /* Box-shadow for 3d visualization*/
          box-shadow:
            -6px -6px 6px rgba(255, 255, 255, 0.8),
            6px 6px 6px rgba(0, 0, 0, 0.2);
      }
      .gfg-logo {
          background: url("gfg-logo.png");
          background-size: cover;
          width: 100px;
          height: 100px;
          border-radius: 50%;
          margin: 0 auto;
          /* Box-shadow for logo */
          box-shadow: 0px 0px 2px #5f5f5f,
            0px 0px 0px 5px #ecf0f3,
            8px 8px 15px #a7aaaf,
            -8px -8px 15px #ffffff;
      }
      .gfg-title {
          text-align: center;
          font-size: 34px;
          padding-top: 20px;
          letter-spacing: 0.5px;
      }
      .gfg-sub-title {
          text-align: center;
          font-size: 15px;
          padding-top: 7px;
          letter-spacing: 3px;
          color: #5eaa77;
      }
      .gfg-input-fields {
          width: 100%;
          padding: 20px 5px 10px 5px;
          margin-top: 5%
      }
      .gfg-input-fields input {
  /* To hide default browser options of input field */
          border: none;
          outline: none;
          /* Custom design for the input field */
          background: none;
          font-size: 18px;
          color: #555;
          padding: 15px 10px 15px 5px;
      }
      .gfg-email,
      .gfg-password {
          margin-bottom: 20px;
          border-radius: 20px;
          /* Box-shadow for 3d */
          box-shadow: inset 5px 5px 5px #cbced1,
            inset -5px -5px 5px #ffffff;
      }
      .gfg-input-fields svg {
          height: 22px;
          margin: 0 10px -3px 25px;
      }
      .gfg-button {
  /* To hide default browser options of input field */
          outline: none;
          border: none;
          /* Custom design for the Button */
          cursor: pointer;
          width: 95%;
          height: 60px;
          border-radius: 25px;
          font-size: 20px;
          font-weight: 700;
          font-family: 'Noto Sans JP', sans-serif;
          box-shadow: -5px -5px 10px #fff, 5px 5px 8px #babebc;
          color: #fff;
          text-align: center;
          background-color: #ff4b2b;
          box-shadow: 7px 7px 8px #cbced1,
            -7px -7px 8px #ffffff;
          transition: 0.5s;
      }
      // .gfg-button:hover {
      //     background: #5fb87d;
      // }
      .gfg-button:active {
          background: #4a9764;
      }
      .gfg-link {
          padding-top: 20px;
          text-align: center;
      }
      .gfg-link a {
          text-decoration: none;
          color: #aaa;
          font-size: 15px;
          transition: 0.5s;
      }
      .gfg-link a:hover {
          text-decoration: none;
          color: #67d18a;
          font-size: 15px;
      }
  `
      
      return (
          <html>
          <head>
              <meta charset="utf-8" />
              <meta http-equiv="X-UA-Compatible"
                    content="IE=edge" />
              <meta name="description"
                    content="" />
              <meta name="viewport"
                    content="width=device-width,
                             initial-scale=1" />
              <style>
                  {css}
              </style>
          </head>
          <body>
              <div class="gfg-div">
                  <div class="contain">
                  <div class="gfg-title">SIGN UP</div>
                  
                  <div class="gfg-input-fields">
                      <div class="gfg-email">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                     <path d="M0 128C0 92.65 28.65 64 64 64H448C483.3 64 512 92.65 512 128V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V128zM48 128V150.1L220.5 291.7C241.1 308.7 270.9 308.7 291.5 291.7L464 150.1V127.1C464 119.2 456.8 111.1 448 111.1H64C55.16 111.1 48 119.2 48 127.1L48 128zM48 212.2V384C48 392.8 55.16 400 64 400H448C456.8 400 464 392.8 464 384V212.2L322 328.8C283.6 360.3 228.4 360.3 189.1 328.8L48 212.2z"/>
                     </svg>
                          <CustomInput type="name"
                                 placeholder="Username" name="username" value={user} onChange={e => setUser(e.target.value)} required  />
                      </div>
                      <div class="gfg-email">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                     <path d="M0 128C0 92.65 28.65 64 64 64H448C483.3 64 512 92.65 512 128V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V128zM48 128V150.1L220.5 291.7C241.1 308.7 270.9 308.7 291.5 291.7L464 150.1V127.1C464 119.2 456.8 111.1 448 111.1H64C55.16 111.1 48 119.2 48 127.1L48 128zM48 212.2V384C48 392.8 55.16 400 64 400H448C456.8 400 464 392.8 464 384V212.2L322 328.8C283.6 360.3 228.4 360.3 189.1 328.8L48 212.2z"/>
                     </svg>
                          <CustomInput type="email"
                                 placeholder="Email" value={email} name="email" onChange={e => setEmail(e.target.value)} required  />
                      </div>
                      <div class="gfg-password">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                          <path d="M80 192V144C80 64.47 144.5 0 224 0C303.5 0 368 64.47 368 144V192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H80zM144 192H304V144C304 99.82 268.2 64 224 64C179.8 64 144 99.82 144 144V192z"/>
                          </svg>
                          <CustomInput type="password"
                                 placeholder="Password" name="password" value={password} onChange={e => setPassword(e.target.value)} required />
                      </div>
                      <div class="gfg-password">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                          <path d="M80 192V144C80 64.47 144.5 0 224 0C303.5 0 368 64.47 368 144V192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H80zM144 192H304V144C304 99.82 268.2 64 224 64C179.8 64 144 99.82 144 144V192z"/>
                          </svg>
                          <CustomInput type="password"
                                 placeholder="Confirm password" name="confirm password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} required  />
                      </div>
                  </div>
           
              </div>
                 <CustomButton onClick={handleSubmit} className="gfg-button">
                    Sign Up
                 </CustomButton>
              </div>
          </body>
      </html>
      )
  }


export default Register;