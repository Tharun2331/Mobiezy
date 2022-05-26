import React from 'react'
import {Link} from 'react-router-dom';
import "./homepage.css";
import CustomButton from '../custombutton/custombutton';
function Homepage() {
    return (
        <div className="home">
            <div>
                <Link to="/signup">
                    <CustomButton className="form_btn ">
                            Sign up
                    </CustomButton>
                </Link>
           </div>
           <div> 
                <Link to="/Login">
                        <CustomButton className="form_btn ">
                            Sign In
                        </CustomButton>
                </Link>
           </div>
        </div>
        
        )
}

export default Homepage;