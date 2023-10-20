"use client"

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Selflayout from '../Selflayout'
import TitleBar from '@/components/TitleBar'
import StaffOverivew from '@/components/StaffOverivew'
import StaffList from '@/components/StaffList'
import StaffRadar from '@/components/StaffRadar'
import Modal from '@/components/Modal'
import { staff } from '@/app/util/modal'

import './style.css'

export default () => {
  const router = useRouter()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { id } = router?.query?.path || {}

  // 模拟返回数据
  const fetchData = async () => {
    setLoading(true);
    try {
      let res = await fetch(`/api/searchStaff?id=${id}`)
      res = await res.json()
      console.log('res', res)
    } catch(err) {
      console.log(err)
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

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
    setIsModalOpen(value)
  }

  return (
    <Selflayout
      titleProps={{
        title: '员工详情',
        ShowReturn: true
      }}
    >
      <TitleBar
        type="staff"
        onEdit={showModal}
      />
      <div className='staff-info-box'>
        <div className='staff-info-left'>
          <StaffOverivew />
          <StaffList />
        </div>
        <div className='staff-info-right'>
          <StaffRadar />
        </div>
      </div>
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
    </Selflayout>
  )
}