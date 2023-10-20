import React from "react";  
import './style.css'
  
export default ({ list }) => {
  return (
    <div className="overview-box">
      {
        list.map(({ label, num }) => (
          <div className="overview-content" key={label}>
            <p className="overview-content-label">{label}</p>
            <p className="overview-content-num">{num}</p>
          </div>
        ))
      }
    </div>
  )
}