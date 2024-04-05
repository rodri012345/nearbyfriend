import React from "react";
import { useState } from "react";
export const About = () => {
  const [image,setImage ]=useState("");
  const handleChange=(e)=>{
    const urlImg = URL.createObjectURL(e.target.files[0]) 
    console.log(urlImg)
    console.log(e.target.files[0])
    setImage(urlImg)
  }
  return (
    <>
    <input type="file" accept=".jpg,.jpeg,.png" onChange={(e)=>handleChange(e)}></input>
    <img src={image} alt="cargando imagen"/>
    
    </>
  );
};
