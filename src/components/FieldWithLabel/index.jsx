import React from "react";
import './style.css'
  
export default (props) => {
  const {
    label,
    required,
    children
  } = props

  return (
    <div className="input-box">
      {label && (
        <div className="input-label">
          {required && <span className="input-label-required">*</span> }
          <span className="input-label-text">{label}</span>
        </div>
      )}
      { children }
    </div>
  )
}