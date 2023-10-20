import React from 'react'
import style from './style.module.css'

export default (props) => {
  const data = [
    { label: '剪发人树', value: '236' },
    { label: '染发人数', value: '206' },
    { label: '烫发人数', value: '206' },
    { label: '办卡人数', value: '206' },
    { label: '办卡率', value: '20%' },
  ]
  return (
    <div className={style['staff-overview']}>
      {
        data.map(({ label, value }) => {
          return (
            <div className={style['overview-box']} key={label}>
              <p className={style['overview-label']}>{label}</p>
              <p className={style['overview-value']}>{value}</p>
            </div>
          )
        })
      }
    </div>
  )
}