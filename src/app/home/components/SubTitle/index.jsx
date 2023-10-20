"use client"

import React, { useEffect, useState } from 'react';
import PersonNum from '@/components/PersonNum'
import SelectMini from '@/components/SelectMini'
import CreateButton from '@/components/Button/CreateButton'
import Search from '@/components/Input/Search'
import Modal from '@/components/Modal'
import { staff } from '@/app/util/modal'

import style from './style.module.css'

export default ({
  onSelect
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [searchData, setSearchData] = useState(null)
  const [selectData, setSelectData] = useState(null)

  useEffect(() => {
    onSelect(selectData)
  }, [selectData])

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleOK = () => {
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  const onAdd = (value) => {
    console.log(value)
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
    <div className={style["box"]}>
      <PersonNum 
        title="组织架构管理"
        num="2456"
      />
      <SelectMini
        initValue={{ text: "理发学徒" }}
      />
      <div className={style["action-box"]}>
        <CreateButton 
          text="新建员工"
          onClick={showModal}
        />
      </div>
      <Search
        placeholder="搜索"
        searchData={searchData}
        onSearch={onSearch}
        onSeletct={onSeletct}
        onAdd={onSearchAdd}
      />
      {
        isModalOpen && (
          <Modal
            data={staff}
            onOK={handleOK}
            onCancel={handleCancel}
            onSubmit={onAdd}
          />
        )
      }
    </div>
  )
}