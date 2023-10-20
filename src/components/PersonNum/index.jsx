import React from "react";
import style from './style.module.css'
  
export default ({
  title,
  num
}) => {
  return (
    <div className={style['box']}>
      <span className={style['title']}>
        {title}
      </span>
      <span className={style['num']}>
        {num}人
      </span>
    </div>
  )
}
