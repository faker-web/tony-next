import React from 'react'
import { PersonTag } from '../Tag'
import style from './style.module.css'

export default ({
  time,
  type = 'consumer',
  name = 'Tony',
  conutBalance,
  costs,
}) => {
  const role = type === 'consumer' ? '顾客：' : '服务理发师：'
  return (
    <div className={style['staff-row-box']}>
      <div className={style['row-left']}>
        <p className={style['row-time']}>{time}</p>
        <p className={style['row-name']}>{role}</p>
        <PersonTag
          name={name}
          size='small'
        />
      </div>
      <p className={style['row-right']}>
        { conutBalance &&  <span className={style['row-right-count']}>次卡剩余：{conutBalance}次</span>}
        { costs &&  <span className={style['row-right-costs']}>消费：¥{costs}</span>}
      </p>
    </div>
  )
}