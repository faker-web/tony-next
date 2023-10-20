import React from "react";
import classNames from "classnames/bind";

import style from './style.module.css'

const cx = classNames.bind(style)

const noop = () => {}
export default ({
  name = "王某",
  phone = "130****1234",
  size = 'defalt',
  onClick = noop
}) => {
  const isSmall = size === 'small'
  const iconcls = cx({
    'user-icon': true,
    'user-icon-small': isSmall,
  })

  const namecls = cx({
    'user-name': true,
    'user-name-small': isSmall,
  })

  const phonecls = cx({
    'user-phone': true,
    'user-phone-small': isSmall,
  })
  return (
    <div className={style['user-box']} onClick={onClick}>
      <div className={iconcls}>
        {name[0]}
      </div>
      <div className={style['user-name-phone']}>
        <p className={namecls}>{name}</p>
        <p className={phonecls}>{phone}</p>
      </div>
    </div>
  )
}