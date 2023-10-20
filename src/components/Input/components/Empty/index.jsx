import React from "react";

import style from './style.module.css'

export default ({
  text,
  onAdd
}) => {
  const _onAdd = () => {
    onAdd()
  }

  return (
    <div className={style["box"]} onClick={_onAdd}>
      新建用户「 {text} 」
    </div>
  )
}