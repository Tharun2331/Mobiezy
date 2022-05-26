import React, { useState } from 'react'

const CustomButton = ({children, className, email, password,callback}) => {

   

    return (
      <button className={className === "Undefined" ? "overlay_btn" : className}>
        {children}
    </button>
  )

}


export default CustomButton;