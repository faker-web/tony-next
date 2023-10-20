import React, { useMemo } from "react";
import Detail from "./components/Detail";
import classNames from "classnames";
import './style.css'

const noop = () => {}

export default ({
  children,
  backgroundColor = 'f7f7fa'
}) => {
  return (
    <div className="default-tag-box" style={{ backgroundColor }}>
      {children}
    </div>
  )
}

export const PersonTag = ({
  name = '',
  color,
  backgroundColor,
  size = 'large'
}) => {
  const consumerColor = [
    { color: '#608cfd' , backgroundColor: '#e7edfd' },
    { color: '#ffd02c' , backgroundColor: '#fff7da' },
    { color: '#ffaf51' , backgroundColor: '#fff3e6' },
    { color: '#ff845b' , backgroundColor: '#ffe5dc' },
    { color: '#6fe1c6' , backgroundColor: '#e5f9f2' }
  ]
  let defaultColor
  let defaultBackgroundColor
  if (!color && !backgroundColor) {
    const colorId =  Math.floor(Math.random() * consumerColor.length)
    defaultColor = consumerColor[colorId].color
    defaultBackgroundColor = consumerColor[colorId].backgroundColor
  }

  const lastnameCls = useMemo(() => {
    return classNames({
      'person-tag-lastname': true,
      'small-person-tag-lastname': size === 'small',
    })
  }, [size])

  const fullnameCls = useMemo(() => {
    return classNames({
      'person-tag-fullname': true,
      'small-person-tag-fullname': size === 'small',
    })
  }, [size])

  return (
    <div className="person-tag-box" style={{ backgroundColor: backgroundColor || defaultBackgroundColor }}>
      <div className={lastnameCls} style={{ backgroundColor: color || defaultColor }}>
        {name[0]}
      </div>
      <div className={fullnameCls}>
        {name}
      </div>
    </div>
  )
}

export const TitleTag = ({
  title,
  backgroundColor
}) => {
  return (
    <div className="title-tag-box" style={{ backgroundColor }}>
      {title}
    </div>
  )
}

export const DetailTag = ({
  label = '详情',
  onClick = noop
}) => {
  return (
    <div className="detail-tag-box" onClick={onClick}>
      <Detail />
      <span className="detail-tag-text">{label}</span>
    </div>
  )
}

export const SexTag = ({
  sex = 0
}) => {
  const cls = useMemo(() => {
    return classNames({
      'sex-box': true,
      'girl-sex-box': sex === 1,
      'boy-sex-box': sex === 0,
    })
  }, [sex])
 
  return (
    <div className={cls}>
      {sex === 0 ? '男' : '女'}
    </div>
  )
}

export const VIPTag = ({
  children,
  size = 'large'
}) => {
  const cls = useMemo(() => {
    return classNames({
      'vip-tag-box': true,
      'small-vip-tag-box': size === 'small',
    })
  }, [size])
  return (
    <div className={cls}>
      {children}
    </div>
  )
}

export const ServiceTag = ({
  serviceCount
}) => {
  let backgroundColor
  if (serviceCount === 1) backgroundColor = '#f1f5ff'
  else if (serviceCount === 2) backgroundColor = '#fff7da'
  else if (serviceCount === 3) backgroundColor = '#fffeee4'
  else backgroundColor = '#ffdd66'
  return (
    <div className='service-tag-box' style={{ backgroundColor }}>
      {serviceCount}次
    </div>
  )
}