import React, { useState,useRef,useEffect } from "react";
import "./upload.css"

import CustomButton from "../custombutton/custombutton";

function Upload() {

  const [images, setImages] = useState([])
  const [imageUrls, setImageUrls] = useState([])
  const [displayImage, setDisplayImage] = useState(true)
  const [tryAgain, setTryAgain] = useState(false)
  
  useEffect(() => {
      if (images.length < 1) return;
      setDisplayImage(true)
      const newImageUrls = []
      images.forEach(image => newImageUrls.push(URL.createObjectURL(image)))
      setImageUrls(newImageUrls)
      if (displayImage) {
          setDisplayImage(true)
      }
  }, [images, displayImage])
  
  const onImageChange = (e) => {
      setImages([...e.target.files])
      const img = new Image();
      img.src = imageUrls;
      img.onload = () => {
          const width = img.width;
          const height = img.height;
          if ((height > 224) || (width > 224)) {
              setDisplayImage(false)
              alert("Image size is too large")
              setDisplayImage(false)
              images.pop()
          }}
  }
  const onImageLoad = ({ target: img}) => {
    const height = img.naturalHeight;
    const width = img.naturalWidth;
    if ((height > 224) || (width > 224)) {
        setDisplayImage(false)
        setTryAgain(true)
        alert("Image size is too large")
        images.pop()
    }
}

  
  return (
    <>
           
            <input type="file" multiple accept="image/*" onChange={onImageChange} />
            
           
         { imageUrls.map(imageSrc => <img src={displayImage ? imageSrc : 'undefined'} onLoad={onImageLoad} />) }
        
        <div onClick={() => window.location.reload(false)} class="try_again">
        { tryAgain ? 
                 <CustomButton className="form_btn_2">TRY AGAIN</CustomButton> : 
                                <></>   }

        </div>
        
    

   </>
)
 
  } 
           
           
                   
         
                 
       
  
  // } 
  
  export default Upload
  