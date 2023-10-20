import React, { useState } from "react";
import { SelectIcon, ExpandCircleIcon } from '@/components/Icons'
import Options from "./components/Options";
import classNames from "classnames/bind";
import { TitleTag } from '@/components/Tag'

import style from './style.module.css'

const cx = classNames.bind(style)

const options = [{
  text: '洗发学徒',
}, {
  text: '全部'
}, {
  text: '店长'
},{
  text: '副店长'
},{
  text: '总监'
}]
export default ({
  initValue = {},
  type = 'default',
  icon = 'default',
  ...props
}) => {
  const [item, setItem] = useState(initValue)
  const [selectId, setSelectId] = useState(0)
  const [isExpand, setIsExpand] = useState(false)

  const SelectIconCls = cx({
    "select-img": true,
    "select-img-rotated": isExpand
  })

  const _onClick = () => {
    setIsExpand(true)
  }

  const onSelect = (idx, item) => {
    setIsExpand(false)
    setItem(item)
    setSelectId(idx)
  }

  return (
    <div className={style['box']}>
      {
        type === 'default' && (
          <div className={style['select-box']} onClick={_onClick}>
            <span className={style['select-value']}>{item.text}</span>
            {
              icon === 'default' && (
                <div className={SelectIconCls}><SelectIcon /></div>
              )
            }
            {
              icon === 'circle' && (
                <div className={style['expand-box']}>
                  <ExpandCircleIcon />
                </div>
              )
            }
          </div>
        )
      }
      {
        type === 'title' && (
          <div className={style['select-title-box']} onClick={_onClick}>
            <TitleTag
              title={item.text}
              {...item}
            />
            <div className={style['expand-box']}>
              <ExpandCircleIcon />
            </div>
          </div>
        )
      }
      {
        isExpand && (
          <div className={style['option-box']}>
            <Options 
              type={type}
              idx={selectId}
              onSelect={onSelect}
              options={options}
              {...props}
            />
          </div>
        )
      }
    </div>
  )
}
