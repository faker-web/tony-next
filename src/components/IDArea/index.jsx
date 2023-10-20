import React, { useState } from 'react';
import {DetailTag} from '../Tag'
import style from './styles.module.css'

const noop = () => {}

export default ({
  id,
  label,
  onClick = noop
}) => {
  const [showTag, setShowTag] = useState(false)

  const showTagFn = () => {
    setShowTag(true) 
  }

  const hideTagFn = () => {
    setShowTag(false) 
  }
  return (
    <div className={style['id-box']} onMouseEnter={showTagFn} onMouseLeave={hideTagFn}>
      <span className={style['id-text']}>{id}</span>
      {showTag && <DetailTag onClick={onClick} label={label} />}
    </div>
  )
}