import React from "react";
import PersonalMainInfo from '../PersonalMainInfo'
import { VIPTag } from '../Tag'
import { Edit } from '../Icons'
import TitleBarRight from './components/TitleBarRight'

import style from './style.module.css'
  
export default ({
  type = 'consumer',
  onEdit,
  onCosts,
}) => {

  const isConsumer = type === 'consumer'
  const isStaff = !isConsumer

  return (
    <div className={style['title-bar-box']}>
      <div className={style['title-bar-user-box']}>
        <PersonalMainInfo />
        <p className={style['user-age']}>32岁</p>
        <p className={style['user-sex']}>女</p>
        {
          isStaff && (<p className={style['user-title']}>理发学徒</p>)
        }
        {
          isConsumer && (
            <div className={style['vip-tag-box']}>
              <VIPTag size="small">vip-2</VIPTag>
            </div>
          )
        }
        <div onClick={onEdit}>
          <Edit />
        </div>
      </div>
      <TitleBarRight
        isConsumer={isConsumer}
        onClick={onCosts}
      />
    </div>
  )
}