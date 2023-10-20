import React, { useEffect, useState } from 'react';
// import qs from 'qs';
import { Table } from 'antd';
import { useRouter } from "next/navigation";
import
  DefaultTag,
  { PersonTag, SexTag, VIPTag, ServiceTag }
from '../Tag'
import IDArea from '../IDArea'
import style from './styles.module.css'

const consumerColor = [
  { nameColor: '#608cfd' , nameBackgroundColor: '#e7edfd', titlenameColor: '#f1f5ff' },
  { nameColor: '#ffd02c' , nameBackgroundColor: '#fff7da', titlenameColor: '#fff7da' },
  { nameColor: '#ffaf51' , nameBackgroundColor: '#fff3e6', titlenameColor: '#ffe2b6' },
  { nameColor: '#ff845b' , nameBackgroundColor: '#ffe5dc', titlenameColor: '#ffd1c2' },
  { nameColor: '#6fe1c6' , nameBackgroundColor: '#e5f9f2', titlenameColor: '#cff6e8' }
]

const storeIdColor = [
  '#f1f5ff',
  '#e9fbff',
  '#fff6e0',
  '#ebffe3',
]

const getRandomuserParams = (params) => ({
  results: params.pagination?.pageSize,
  page: params.pagination?.current,
  ...params,
});

const App = ({
  selectData
}) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  const [total, setTotal] = useState();
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    showQuickJumper: true
  });

  const router = useRouter()

  const columns = [
    {
      title: '会员卡号',
      dataIndex: 'id',
      render: (id) => {
        return (
          <IDArea
            id={id}
            onClick={() => {
              router.push('/consumer')
            }}
          />
        )
      },
      width: 150,
      fixed: 'left'
    },
    {
      title: '手机号',
      dataIndex: 'phone',
      width: 150,
      fixed: 'left'
    },
    {
      title: '顾客姓名',
      dataIndex: 'name',
      render: (name) => {
        const colorId =  Math.floor(Math.random() * consumerColor.length)
        const { nameColor, nameBackgroundColor } = consumerColor[colorId]
        return (
          <PersonTag
            name={name}
            color={nameColor}
            backgroundColor={nameBackgroundColor}
          />
        )
      },
      width: 150,
      fixed: 'left'
    },
  
    {
      title: '性别',
      dataIndex: 'sex',
      render: (sex) => {
        return (
          <SexTag sex={sex} />
        )
      },
      width: 150,
      fixed: 'left'
    },
  
    {
      title: '最近活跃',
      dataIndex: 'lastTime',
      render: (lastTime) => {
        return (
          <DefaultTag>{lastTime}</DefaultTag>
        )
      }
    },
  
    {
      title: '生日',
      dataIndex: 'birthday',
      render: (birthday) => {
        return (
          <DefaultTag>{birthday}</DefaultTag>
        )
      }
    },
  
    {
      title: '年龄',
      dataIndex: 'age'
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      render: (createTime) => {
        return (
          <DefaultTag>{createTime}</DefaultTag>
        )
      }
    },
    {
      title: '会员等级',
      dataIndex: 'vip',
      render: (vip) => {
        return (
          <VIPTag>{vip}</VIPTag>
        )
      }
    },
    {
      title: '服务次数',
      dataIndex: 'serviceCount',
      render: (serviceCount) => {
        return <ServiceTag serviceCount={serviceCount} />
      }
    },
    {
      title: '卡内余额',
      dataIndex: 'balance',
      render: (createTime) => {
        return (
          <DefaultTag>{createTime}</DefaultTag>
        )
      }
    },
    {
      title: '店铺名称',
      dataIndex: 'storeName',
      render: (storeName, record) => {
        record.storeBg = storeIdColor[Math.floor(Math.random() * storeIdColor.length)]
        return (
          <DefaultTag backgroundColor={record.storeBg}>{storeName}</DefaultTag>
        )
      }
    },
    {
      title: '店铺电话',
      dataIndex: 'storePhone',
      render: (storePhone, record) => {
        return (
          <DefaultTag backgroundColor={record.storeBg}>{storePhone}</DefaultTag>
        )
      }
    },
    {
      title: '店铺地址',
      dataIndex: 'storeAddress',
      render: (storeAddress, record) => {
        return (
          <DefaultTag backgroundColor={record.storeBg}>{storeAddress}</DefaultTag>
        )
      }
    },
  ];

  const fetchData = () => {
    setLoading(true);
    fetch(`/api/consumers`)
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
      pagination,
      ...nextPagination
    });

    // `dataSource` is useless since `pageSize` changed
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
    <div className={style['consumer-table-box']}>
      <Table
        columns={columns}
        dataSource={finallyData}
        pagination={paginationWithTotal}
        loading={loading}
        onChange={handleTableChange}
        scroll={{ x: 2000 }}
      />
    </div>
  );
};

export default App;