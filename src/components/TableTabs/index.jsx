"use client"

import React, { useState } from "react";
import classNames from "classnames/bind";
import style from './style.module.css'  

const cx = classNames.bind(style)

const noop = () => {}
const Tabs = ({
  label,
  tabs,
  onSelect = noop,
}) => {  
  const [activeTab, setActiveTab] = useState(0);

  const _onClick = (idx) => {
    setActiveTab(idx)
    onSelect(idx)
  }

  const getTableTabCls = (idx) => {
    return cx({
      'table-tabs-box': true,
      'table-tabs-box-select': idx === activeTab,
    })
  }

  return (  
    <div className={style['table-tabs-box']}>
      {label && (
        <span className={style["label-text"]}>{label}</span>
      )}
      <div className={style['table-tabs']}>
        {
          tabs.map((text, id) => {
            return (
              <div
                className={getTableTabCls(id)}
                onClick={() => { _onClick(id) }}
                key={text}
              >
                {text}
              </div>
            )
          })
        }
      </div>
    </div>
  );  
};  
  
export default Tabs;