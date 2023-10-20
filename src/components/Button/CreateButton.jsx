import React from "react";
import './style.css'
  
export default ({
  text,
  onClick,
}) => {
  return (
    <div className='create-button-box'>
      <span className="create-button-add">+</span>
      <span className="create-button-name" onClick={onClick}>{text}</span>
    </div>
  )
}