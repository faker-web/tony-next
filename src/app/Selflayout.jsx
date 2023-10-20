"use client"

import React from 'react';
import SiderBar from '../components/SiderBar'
import Title from '../components/Title'

import './layout.css'

export default ({
  children,
  titleProps
}) => {
  return (
    <div className='layout-box'>
      <SiderBar />
      <div className='layout-box-content'>
        <Title {...titleProps} />
        { children }
      </div>
    </div>
  )
}