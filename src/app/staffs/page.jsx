"use client"

import React, { useState } from 'react';
import Selflayout from '../Selflayout'
import TableBox from '@/components/TableBox'
import StaffTable from '@/components/StaffTable'
import Modal from '@/components/Modal'
import { staff } from '@/app/util/modal'

export default () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [searchData, setSearchData] = useState(null)
  const [selectData, setSelectData] = useState(null)
  const [initialValues, setInitialValues] = useState(null)

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleOK = () => {
    setTimeout(() => {
      setIsModalOpen(false)
    }, 500);
  }

  const handleCancel = () => {
    setIsModalOpen(false)
    setInitialValues(null)
  }

  const onAdd = (value) => {
    console.log(value)

    setTimeout(() => {
      window.location.reload()
    }, 500)
  }

  const clear = () => {
    setSearchData(null)
    setSelectData(null)
  }

  const onSearch = async (e) => {
    const name = e?.target?.value
    if (!name) {
      clear()
      return
    }
    try {
      const res = await fetch(`/api/searchStaff?name=${name}`)
      const data = await res.json()
      setSearchData(data?.results || [])
    } catch(err) {
      console.log('err', err)
    }
  }

  const onSeletct = (_, idx) => {
    setSelectData(searchData[idx])
    setSearchData(null)
  }

  const onSearchAdd = (value) => {
    showModal()
    setInitialValues(value)
  }

  return (
    <Selflayout
      titleProps={{
        title: '员工管理'
      }}
    >
      <TableBox
        title="员工档案表"
        subtitle="250人"
        actionText="新建员工"
        showModal={showModal}
        onSearch={onSearch}
        searchData={searchData}
        onSeletct={onSeletct}
        onAdd={onSearchAdd}
      >
        <StaffTable
          selectData={selectData}
        />
      </TableBox>
      {
        isModalOpen && (
          <Modal
            data={staff}
            initialValues={initialValues}
            onOK={handleOK}
            onCancel={handleCancel}
            onSubmit={onAdd}
          />
        )
      }
    </Selflayout>
  )
}

