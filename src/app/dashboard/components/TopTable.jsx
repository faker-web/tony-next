import React from "react";
import CommonTopTable from '../../../components/CommonTopTable'
import { First, Second, Third } from '../../../components/Icons'

export default () => {
  const tabs = ["员工人数", "服务人数", "办卡人数"]

  const columns = [
    {
      title: '员工',
      dataIndex: 'name',
      width: '30%',
      render: (name, _, idx) => {
        return (
          <div className="table-name-render">
            { idx == 0 && <First className="table-name-render-icon" /> }
            { idx == 1 && <Second className="table-name-render-icon" /> }
            { idx == 2 && <Third className="table-name-render-icon" /> }
            { idx > 2 && <p className="table-name-render-icon" /> }
            <span className="table-name-render-text">{name}</span>
          </div>
        )
      },
    },
    {
      title: '人数',
      dataIndex: 'num',
      width: '70%',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.num - b.num,
      render: (num, record) => {
        return (
          <div className="table-num-render" style={{ width: `${record.w}px` }}>
            {num} 人
          </div>
        )
      },
    },
  ];

  const data = [
    {
      key: '1',
      name: 'John Brown',
      num: 312,
    },
    {
      key: '2',
      name: 'Jim Green',
      num: 42,
    },
    {
      key: '3',
      name: 'Joe Black',
      num: 12,
    },
    {
      key: '4',
      name: 'Jim Red',
      num: 32,
    },
  ];

  return (
    <CommonTopTable 
      title="员工榜单"
      desc="（厅店级）"
      tabs={tabs}
      columns={columns}
      data={data}
    />
  )
}