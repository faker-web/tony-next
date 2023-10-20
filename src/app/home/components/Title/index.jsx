"use client"

import React from 'react';
import style from './style.module.css'
import { Edit } from '../../../../components/Icons'

export default () => {
  return (
    <div className={style["box"]}>
      <img src='/logo.png' className={style["store-logo"]} />
      <div className={style['info-box']}>
        <div className={style['info-box-top']}>
          <span className={style['info-name']}>企业名称</span>
          <Edit />
        </div>
        <div className={style['info-box-bottom']}>
          <span className={style['info-time']}>2023-12-01到期</span>
          <img src='/renew.png' className={style["renew"]} />
        </div>
      </div>
      <div className={style['code-box']}>
        <p className={style['code-text']}>
          扫码续费
        </p>
        <div className={style['code-container']}>
          <img src='/logo.png' className={style["code"]} />
        </div>
      </div>

    </div>
  )
}