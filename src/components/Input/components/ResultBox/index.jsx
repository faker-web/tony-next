import React from "react";
import PersonalMainInfo from '../../../PersonalMainInfo'

import style from './style.module.css'

const noop = () => {}
export default ({
  searchData = [],
  onSeletct = noop
}) => {
  return (
    <div className={style["box"]}>
      {
        searchData.map((item, idx) => {
          return (
            <div
              className={style["box-item"]}
              onClick={() => { onSeletct(item, idx) }}
              key={item.phone}
            >
              <PersonalMainInfo
                size="small"
                name={item.name}
                phone={item.phone}
              />
            </div>
          )
        })
      }
    </div>
  )
}