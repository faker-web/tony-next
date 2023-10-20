import React, { useMemo } from 'react'
import style from './style.module.css'
import StaffValueTag from '@/components/Tag'
import Default, { PersonTag } from '@/components/Tag'

const ConsumptionTag = ({ onClick }) => {
  return (
    <Default>
      <p onClick={onClick}>
        <span>¥2000</span>
        <span className={style['consumption-use-text']}>消费</span>
      </p>
    </Default>
  )
}

export default ({ isConsumer, onClick }) => {
  const data = useMemo(() => {
    const list = [
      { label: '入职时间', value: '2023-02-24' },
      { label: '所属店铺', value: '北京三里屯店' },
      { label: '累计关联次数', value: '两次' },
    ]
    if (isConsumer) {
      list.unshift({ label: '注册理发师', Component: <PersonTag name="Mark" size="small" /> })
      list.unshift({ label: '卡内余额', Component: ConsumptionTag({ onClick }) })
    }
    return list
  }, [isConsumer])


  return (
    <div className={style['staff-right-box']} style={{ width: isConsumer ? '60%' : '40%' }}>
      {
        data.map(({ label, value, Component }) => {
          return (
            <div className={style['item-box']} key={label}>
              <p className={style['item-box-label']}>{label}：</p>
              { Component }
              { value && <StaffValueTag>{value}</StaffValueTag> }
            </div>
          )
        })
      }
    </div>
  )
}