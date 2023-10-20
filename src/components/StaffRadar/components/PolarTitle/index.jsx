import React, { useState, useEffect } from "react";
import { Chart } from '@antv/g2';
import './style.css'

export default () => {
  const list = [
    { icon: '#5297ff', label: '剪发' },
    { icon: '#5297ff', label: '美发' },
    { icon: '#5297ff', label: '烫发' },
    { icon: '#5297ff', label: '烫染' },
    { icon: '#5297ff', label: '办卡' },
  ]
  return (
    <div className="polar-title-box">
      {
        list.map(({ icon, label }) => {
          return (
            <div className="polar-title-item" key={label}>
              <div className="polar-title-icon" style={{ backgroundColor: icon }} />
              <span className="polar-title-label">{label}</span>
            </div>
          )
        })
      }
    </div>
  )
}