import React, { useEffect, useRef, useState } from "react"; 
import { Table } from 'antd';
import CommonBox from '../CommonBox'

import './style.css'

export default ({
  title,
  desc,
  tabs,
  icon,
  columns,
  data,
}) => {
  const [formatData, setFormatData] = useState(data)
  const tableRef = useRef(null)

  useEffect(() => {
    const fullWidth = tableRef.current.offsetWidth * 0.6 // 最大宽度为整体宽度的90%
    const nums = formatData.map(({ num }) => num)
    const maxNum = Math.max.apply(Math, nums)
    const minNum = Math.min.apply(Math, nums)
    const minWidth = fullWidth / 2
    const residueWidth = fullWidth - minWidth // 剩余宽度
    const preWidth = residueWidth / (maxNum - minNum) // 剩余每分宽度
    const record = formatData.map((item) => {
      const w = minWidth + (item.num - minNum) * preWidth
      item.w = w
      return item
    })
    setFormatData(record)
  }, [data])

  return (
    <div ref={tableRef}>
      <CommonBox
        title={title}
        desc={desc}
        tabs={tabs}
        icon={icon}
      >
        <Table
          columns={columns}
          dataSource={data}
          pagination={false}
        />
      </CommonBox>
    </div>
  )
}