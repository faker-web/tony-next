import React from 'react'
import CommonBox from '../CommonBox'
import CommonRow from '../CommonRow'

export default () => {
  return (
    <CommonBox
      title="服务记录"
      icon="ServiceIcon"
    >
      <CommonRow
        time="2023-10-10"
        conutBalance="10"
        costs="50"
      />
      <CommonRow
        time="2023-10-10"
        conutBalance="10"
      />
      <CommonRow
        time="2023-10-10"
        costs="10"
      />
    </CommonBox>
  )
}