import React, { useMemo } from "react";
import classNames from "classnames";
import './style.css'
  
export default ({
  text,
  onClick,
  size = 'large',
  type = 'default',
  ...props
}) => {
  const cls = useMemo((inputcls) => {
    return classNames({
      [inputcls]: true,
      'self-button': true,
      'small-self-button': size === 'small',
      'cancel-self-button': type === 'cancel'
    })
  })

  return (
    <button
      onClick={onClick}
      {...props}
      className={cls}
    >
      {props.children}
    </button>
  )
}
