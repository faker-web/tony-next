"use client"

import React, { useState } from 'react';
import Selflayout from '../Selflayout'
import CommonBox from '@/components/CommonBox';
import HomeTable from '@/components/HomeTable';
import Title from './components/Title'
import SubTitle from './components/SubTitle'

export default () => {
  const [selectData, setSelectData] = useState(null)

  return (
    <Selflayout
      titleProps={{
        title: "企业信息"
      }}
    >
      <CommonBox>
        <Title />
        <SubTitle
          onSelect={setSelectData}
        />
        <HomeTable
          selectData={selectData}
        />
      </CommonBox>
    </Selflayout>
  )
}