import React, { useMemo } from 'react'
import { ServiceIcon, DataIcon, TagIcon } from '../Icons'
import TableTabs from '../TableTabs'

import style from './style.module.css'

export default ({
  icon,
  title,
  desc,
  tabs,
  children
}) => {
  console.log('icon', icon)

  const IconComponent = useMemo(() => {
    if (icon === 'ServiceIcon') {
      return ServiceIcon
    } else if (icon === 'DataIcon') {
      return DataIcon
    } else if (icon === 'tag') {
      return TagIcon
    } 
  }, [icon]) 

  return (
    <div className={style['common-box']}>
      <div className={style['common-title']}>
        <div className={style['common-title-left']}>
          {
            icon && <IconComponent />
          }
          {
            title && <span className={style['common-box-title']}>{title}</span>
          }
          
          {
            desc && <span className={style['common-box-desc']}>{desc}</span>
          }
        </div>
        { tabs && <TableTabs tabs={tabs} /> }
      </div>
      {children}
    </div>
  )
}