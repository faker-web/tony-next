import React, { useEffect, useMemo, useState } from 'react';
import { Table } from 'antd';
import { useRouter } from "next/navigation";
import { PersonTag } from '../Tag'
import IDArea from '../IDArea'
import SelectMini from '@/components/SelectMini'
import { titleOptions, roleOptions } from './util'

import style from './styles.module.css'

const staffColor = [
  { color: '#608cfd' , backgroundColor: '#e7edfd', titleColor: '#f1f5ff' },
  { color: '#ffd02c' , backgroundColor: '#fff7da', titleColor: '#fff7da' },
  { color: '#ffaf51' , backgroundColor: '#fff3e6', titleColor: '#ffe2b6' },
  { color: '#ff845b' , backgroundColor: '#ffe5dc', titleColor: '#ffd1c2' },
  { color: '#6fe1c6' , backgroundColor: '#e5f9f2', titleColor: '#cff6e8' }
]

const App = ({
  selectData
}) => {
  const router = useRouter()
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState();
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    showQuickJumper: true
  });

  const columns = useMemo(() => {
    return [
      {
        title: '工号',
        dataIndex: 'id',
        width: '20%',
        render: (id) => {
          return (
            <IDArea
              id={id}
              onClick={() => {
                router.push('/staff')
              }}
            />
          )
        },
      },
      {
        title: '员工姓名',
        dataIndex: 'name',
        width: '20%',
        render: (name, record) => {
          record.colorId =  Math.floor(Math.random() * staffColor.length)
          const { color, backgroundColor } = staffColor[record.colorId]
          return (
            <PersonTag
              name={name}
              color={color}
              backgroundColor={backgroundColor}
            />
          )
        }
      },
      {
        title: '职位',
        dataIndex: 'title',
        width: '20%',
        render: (title) => {
          const initValue = titleOptions.find(({ text }) => {
            return text === title
          })
          return (
            <SelectMini 
              initValue={initValue}
              type="title"
              options={titleOptions}
            />
          )
        }
      },
      {
        title: '权限',
        dataIndex: 'role',
        width: '40%',
        render: (role) => {
          return (
            <SelectMini 
              initValue={{ text: role }}
              icon="circle"
              options={roleOptions}
            />
          )
        }
      },
    ]
  }, []);

  // 模拟返回数据
  const fetchData = () => {
    setLoading(true);
    fetch(`/api/staff`)
      .then((res) => res.json())
      .then(({ results, total }) => {
        setData(results);
        setLoading(false);
        setTotal(total);
      });
  };

  useEffect(() => {
    fetchData();
  }, [JSON.stringify(pagination)]);

  const handleTableChange = (
    nextPagination,
  ) => {
    setPagination({
      ...pagination,
      ...nextPagination,
    });

    if (pagination.pageSize !== nextPagination?.pageSize) {
      setData([]);
    }
  };

  // search > fetch
  const finallyData = !!selectData ? [selectData] : data

  const paginationWithTotal = {
    ...pagination,
    total: !!selectData ? 1 : total
  }
  return (
    <Table
      columns={columns}
      dataSource={finallyData}
      pagination={paginationWithTotal}
      loading={loading}
      onChange={handleTableChange}
    />
  );
};

export default React.memo(App);