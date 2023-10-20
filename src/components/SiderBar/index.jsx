import React, { useState } from "react";
import classNames from "classnames";
import { icon1, icon2, icon3 } from './components/Icons'
import Logo from './components/Logo'
import { useRouter, usePathname } from "next/navigation";

import './style.css'

const navigation = [
  { Icon: icon1, text: '数据概览', pathname: '/dashboard' },
  { Icon: icon2, text: '会员管理', pathname: '/consumers' },
  { Icon: icon3, text: '员工中心', pathname: '/staffs' },
  // { Icon: icon4, text: '排行榜' },
]

const getNavigationClass = (isExpand, isSelect) => {
  const cls = classNames({
    'sider-navigation-extend': isExpand,
    'sider-navigation-fold': !isExpand,
    'sider-navigation-select': isSelect
  })

  return cls
}

export default () => {
  const router = useRouter()
  const currentPathname = usePathname()
  const [isExpand, setIsExpand] = useState(true)
  const [tabId, selectTabId] = useState(() => {
    const currenntNavigation = navigation.find(({ pathname }) => {
      return pathname.indexOf(currentPathname) > -1
    })
    return navigation.indexOf(currenntNavigation)
  })

  const onControl = () => {
    setIsExpand(!isExpand)
  }

  const onNavigation = (id, pathname) => {
    selectTabId(id)
    router.push(pathname)
  }

  const goHome = () => {
    router.push('/home')
  }
  
  return (
    <div className={isExpand ? "sider-bar-extend sider-bar" : "sider-bar"}>
      <div className="sider-bar-logo-box">
        <Logo onClick={goHome} />
        { isExpand && <span className="sider-bar-logo-text">logo</span> }
      </div>
      <div className="sider-navigation">
        {
          navigation.map(({ Icon, text, pathname }, id) => (
            <div
              className={getNavigationClass(isExpand, tabId === id)}
              onClick={() => { onNavigation(id, pathname) }}
              key={text}
            >
              <Icon />
              {
                isExpand && (
                  <span className="navigation-box-text">{text}</span>
                )
              }
            </div>
          ))
        }
      </div>

      <div className="sider-bar-control" onClick={onControl}>
        {
          isExpand
            ? <img src="/fold.png" className="control-flod" />
            : <img src="/expand.png" className="control-expand" />
        }
      </div>
    </div>
  )
}