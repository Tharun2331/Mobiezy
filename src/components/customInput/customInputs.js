import React from 'react'


function CustomInput({type,placeholder,className,ref})
{
 return (
    <input type={type} ref={ref} placeholder={placeholder}  autocomplete="off" class={className}  />
  
    )


}

export default CustomInput;