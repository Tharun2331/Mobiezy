import React from 'react'
function CustomButton({children, className})
{
    return(
        <button class = {className == "undefined"? "form_btn" : className} >
                {children}
        </button>
    )
}

export default CustomButton;