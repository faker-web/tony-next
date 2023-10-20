import React, { useState } from 'react'
import useInterval from '../../../../hooks/useInterval'
import '../../style.css'

export const SendCode = (props) => {
  return (
    <div className='send-code' onClick={props.onClick}>{props.children}</div>
  )
}

export const Timer = (props) => {
  const [nextTime, setBextTime] = useState(props.delay)
  const clear = useInterval(() => {
    setBextTime(nextTime - 1)
    if (nextTime === 1) {
      clear()
      props?.onRest()
    }
  }, 1000)

  return (
    <div className='timer-box' onClick={props.onClick}>{nextTime}s</div>
  )
}