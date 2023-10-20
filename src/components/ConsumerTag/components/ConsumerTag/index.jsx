import React, { useMemo } from "react";
import classNames from "classnames/bind";
import { TagDelete, TagAdd } from '../../../Icons'
import style from './style.module.css'

const cx = classNames.bind(style)

const noop = () => {}
export const CommonTag = ({
  idx,
  type = 'default',
  label,
  showModal = noop,
  onDelete = noop
}) => {
  const isDefault = type === 'default'
  const isAdd = type === 'add'

  const boxCls = useMemo(() => {
    return cx({
      "consumer-tag-box": true,
      "consumer-add-box": isAdd
    })
  }, [isAdd])

  const _onDelete = () => {
    onDelete(idx)
  }
  const _showModal = () => {
    if (isAdd) {
      showModal()
    }
  }

  return (
    <div onClick={_showModal}>
      <div className={boxCls}>
        { isAdd && (
          <div className={style['consumer-add-tag']}>
            <TagAdd />
          </div>
          )
        }
        <span className={style['consumer-tag-text']}>{label}</span>
        { isDefault && (
          <div className={style['consumer-TagClose-tag']} onClick={_onDelete}>
            <TagDelete />
          </div>
          )
        }
      </div>
    </div>
  )
}

export const TagList = ({
  list = [],
  ...props
}) => {
  const formatList = useMemo(() => {
    const newList = list.map((label) => {
      return { label, type: 'default' }
    })
    newList.push({ label: '新增标签', type: 'add' })
    return newList
  }, [list])

  return (
    <div className={style["tag-list-box"]}>
      {
        formatList.map(({ label, type }, idx) => {
          return (
            <CommonTag
              key={idx+label}
              idx={idx}
              label={label}
              type={type}
              {...props}
            />
          )
        })
      }
    </div>
  )
}