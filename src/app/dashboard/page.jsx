"use client"

import React, { useState, useMemo } from 'react';
import Selflayout from '../Selflayout'
import DataOverview from '../../components/DataOverview';
import OverviewArea from '../../components/OverviewArea';
import TopTable from './components/TopTable';

const areaRes = {
  staff: {
    label: "员工人数",

    data: [{
      date: '2023-10-11',
      num: 100
    }, {
      date: '2023-10-12',
      num: 200
    }, {
      date: '2023-10-13',
      num: 600
    }]
  },
  service: {
    label: "服务人数",
    data: [{
      date: '2023-10-11',
      num: 3300
    }, {
      date: '2023-10-12',
      num: 200
    }, {
      date: '2023-10-13',
      num: 600
    }]
  },
  card: {
    label: "办卡人数",
    data: [{
      date: '2023-10-11',
      num: 500
    }, {
      date: '2023-10-12',
      num: 200
    }, {
      date: '2023-10-13',
      num: 600
    }]
  },
}

export default () => {
  const overviewList = [
    { label: "员工人数", num: 500 },
    { label: "服务人数", num: 500 },
    { label: "办卡人数", num: 500 },
    { label: "营业额", num: 452100 },
  ]

  const [areaData, setAreaData] = useState(areaRes.staff.data)

  const areaSubtitles = useMemo(() => {
    return Object
      .keys(areaRes)
      .map((key) => {
        return areaRes[key].label
      })
  }, [areaRes])

  const onAreaChatChange = (selectLabel) => {
    const selectDataKey = Object
      .keys(areaRes)
      .find((key) => {
        const { data, label } = areaRes[key]
        return label === selectLabel
      })
    const data = areaRes[selectDataKey]
    setAreaData(data.data)
  }
  
  const [area, changeArea] = useState("北京市")

  const onAreaChange = ([value]) => {
    changeArea(value)
  }

  return (
    <Selflayout
      titleProps={{
        showAreaSelect: true,
        areaValue: area,
        onAreaChange: onAreaChange
      }}
    >
      <>
        <DataOverview list={overviewList} />
        <OverviewArea
          data={areaData}
          subtitles={areaSubtitles}
          onChange={onAreaChatChange}
        />
        <TopTable />
      </>
    </Selflayout>
  )
}