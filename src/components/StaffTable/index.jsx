import React, { useEffect, useMemo, useState } from 'react';
// import qs from 'qs';
import { Table } from 'antd';
import { useRouter } from "next/navigation";
import TimeTag, { PersonTag, TitleTag } from '../Tag'
import IDArea from '../IDArea'
import style from './styles.module.css'

const staffColor = [
  { color: '#608cfd' , backgroundColor: '#e7edfd', titleColor: '#f1f5ff' },
  { color: '#ffd02c' , backgroundColor: '#fff7da', titleColor: '#fff7da' },
  { color: '#ffaf51' , backgroundColor: '#fff3e6', titleColor: '#ffe2b6' },
  { color: '#ff845b' , backgroundColor: '#ffe5dc', titleColor: '#ffd1c2' },
  { color: '#6fe1c6' , backgroundColor: '#e5f9f2', titleColor: '#cff6e8' }
]

const getRandomuserParams = (params) => ({
  results: params.pagination?.pageSize,
  page: params.pagination?.current,
  ...params,
});

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
        width: '188px',
        render: (id) => {
          return (
            <IDArea
              id={id}
              onClick={() => {
                router.push(`/staff?id=${id}`)
              }}
            />
          )
        },
      },
      {
        title: '员工姓名',
        dataIndex: 'name',
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
        render: (title, record) => {
          return (
            <TitleTag
              title={title}
              backgroundColor={staffColor[record.colorId].titleColor}
            />
          )
        }
      },
      {
        title: '服务人数',
        dataIndex: 'serviceNum',
      },
      {
        title: '入职时间',
        dataIndex: 'entryTime',
        render: (time) => {
          return <TimeTag>{time}</TimeTag>
        }
      },
      {
        title: '办卡人数',
        dataIndex: 'cardNum',
      },
      {
        title: '办卡率',
        dataIndex: 'cardRate',
      },
      {
        title: '被投诉次数',
        dataIndex: 'complainedNum',
      },
      {
        title: '操作',
        key: 'operation',
        fixed: 'right',
        width: 100,
        render: () => {
          return (
            <div>
              <a>编辑</a>
              <a className={style['delete-action']}>删除</a>
            </div>
          )
        },
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