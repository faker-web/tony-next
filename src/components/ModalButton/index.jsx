import React from "react";  
import style from './style.module.css'
import Button from "../Button";
  
const noop = () => {}

export default ({
  onOK = noop,
  onCancel = noop,
}) => {
  return (
    <div className={style['modal-btn-box']}>
      <Button type="cancel" size="small" onClick={onCancel}>取消</Button>
      <div className={style['modal-btn-default']}>
        <Button size="small" onClick={onOK}>确定</Button>
      </div>
    </div>
  )
}
