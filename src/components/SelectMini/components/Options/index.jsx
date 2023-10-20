import React, { useState } from "react";
import classNames from "classnames/bind";
import { TitleTag } from '@/components/Tag'
import style from './style.module.css'

const cx = classNames.bind(style)

export default ({
  idx = 0,
  options,
  type = 'default',
  onSelect
}) => {

  console.log('type', type)
  const [selectId, setSelectId] = useState(idx)
  const itemCls = (itemId) => {
    return cx({
      'options-item': true,
      'options-title-item': type === 'title',
      'options-item-selected': itemId === selectId,
    })
  }

  const _onSelect = (idx, item) => {
    setSelectId(idx)
    onSelect(idx, item)
  }

  return (
    <div className={style['options-box']}>
      {
        options.map((item, idx) => (
          <div
            className={itemCls(idx)}
            onClick={() => { _onSelect(idx, item) }}
            key={item.text}
          >
            {
              type === 'title' && (
                <div className={style['select-title-tag-box']}>      
                  <TitleTag
                    title={item.text}
                    {...item}
                  />
                </div>
              )
            }
            {
              type === 'default' && <span className={style['select-text']}>{ item.text }</span>
            }
            {
              selectId === idx && (
                <img src="/select.png" className={style['select-img']}/>
              )
            }
          </div>
        ))
      }
    </div>
  )
}
