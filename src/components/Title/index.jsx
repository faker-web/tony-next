import React from "react";
import { AreaTitleSelect } from '../Province'
import { Teturn } from '../Icons'
import { useRouter } from "next/navigation";

import './style.css'
  
export default ({
  areaValue,
  onAreaChange,
  showAreaSelect,
  title,
  ShowReturn = false
}) => {
  const router = useRouter()
  const onReturn = () => {
    if (!ShowReturn) return
    router.back()
  }

  return (
    <div className="title-box">
          <div className="title-box-area-select">
            {
              showAreaSelect && <AreaTitleSelect value={areaValue} onChange={onAreaChange} />
            }
            {
              title && (
                <div className="title-bar-box" onClick={onReturn}>
                  { ShowReturn && (
                    <div className="title-bar-box-return">
                      <Teturn />
                    </div>
                  ) }
                  <div className="title-bar-box-text">
                    {title}
                  </div>
                </div>
              )
            }
          </div>
      <div className="user-info-box">
        <span className="user-info-name">
          HI, Tony
        </span>
        <img
          className="avatar"
          src="/avatar.png"
        />
      </div>
    </div>
  )
}