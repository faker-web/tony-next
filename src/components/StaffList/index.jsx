import React from 'react'
import TableTabs from '../TableTabs'
import TableRow from '../CommonRow'
import CommonBox from '../CommonBox'

const tabs = ["剪发服务", "染发服务", "烫发服务", "办卡服务"]

export default (props) => {
  return (
    <CommonBox
      title="服务记录"
      icon="ServiceIcon"
      tabs={tabs}
    >
      <>
        <TableRow
            type="staff"
            time="2023-10-10"
            costs="50"
          />
          <TableRow
            type="staff"
            time="2023-10-10"
          />
          <TableRow
            type="staff"
            time="2023-10-10"
            costs="10"
          />
        </>
    </ CommonBox>
  )
}