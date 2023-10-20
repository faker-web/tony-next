import React from "react";
import CommonTopTable from '@/components/CommonTopTable'

export default () => {
  const columns = [
    {
      title: '服务类型',
      dataIndex: 'type',
      width: '30%',
    },
    {
      title: '次数',
      dataIndex: 'num',
      width: '70%',
      // defaultSortOrder: 'descend',
      sorter: (a, b) => a.num - b.num,
      render: (num, record) => {
        return (
          <div className="table-num-render" style={{ width: `${record.w}px` }}>
            {num} 次
          </div>
        )
      },
    },
  ];

  const data = [
    {
      key: '1',
      type: '剪发',
      num: 312,
    },
    {
      key: '2',
      type: '染发',
      num: 42,
    },
    {
      key: '3',
      type: '烫发',
      num: 12,
    },
    {
      key: '4',
      type: '染烫',
      num: 32,
    },
    {
      key: '5',
      type: '办卡',
      num: 55,
    },
  ];

  return (
    <CommonTopTable
      icon="DataIcon"
      title="服务数据图"
      columns={columns}
      data={data}
    />
  )
}