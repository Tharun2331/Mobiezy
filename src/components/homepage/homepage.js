import React from 'react'
import {Link} from 'react-router-dom';
function Homepage() {
    return (
        <div className="home">
            <div>
            <Link to="/signup">
                <button>
                        Sign up
                </button>
           </Link>
           </div>
           <Link to="/Login">
                <button>
                    Login
                </button>
           </Link>
        </div>
        
        )
}

export default Homepage;