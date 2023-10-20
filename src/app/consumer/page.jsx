"use client"

import React, { useState } from 'react';
import Selflayout from '../Selflayout'
import TitleBar from '@/components/TitleBar'
import ConsumerRecord from '@/components/ConsumerRecord'
import ConsumerTop from './components/ConsumerTop';
import ConsumerTag from '@/components/ConsumerTag';
import Modal from '@/components/Modal'
import { consumer, getCosts } from '@/app/util/modal'

import './style.css'

let mockList = [
  "多次到店",
  "多次到店多次到店多次到店",
  "多次到多次到店多次到店多次到店多次到店多次到店多次到店店",
  "多次到店",
  "多次到店",
  "多次到店",
  "多次到店",
]
export default () => {
  const [isEditModalOpen, seIsEditModalOpen] = useState(false)
  const [isCostsModalOpen, seIsCostsModalOpen] = useState(false)
  const [tagList, setTagList] = useState(mockList)
  const [costsTypeIdx, setCostsTypeIdx] = useState(0)

  const onCostsTypeIdxSelect = (idx) => {
    setCostsTypeIdx(idx)
  }

  const costs = getCosts({
    idx: costsTypeIdx,
    onSelect: onCostsTypeIdxSelect
  })

  const addTag = (tag) => {
    const nextTagList = [...tagList]
    nextTagList.push(tag)
    setTagList(nextTagList)
  }

  const deleteTag = (idx) => {
    const nextTagList = [...tagList]
    nextTagList.splice(idx, 1)
    setTagList(nextTagList)
  }

  const showModal = () => {
    seIsEditModalOpen(true)
  }

  const handleOK = () => {
    seIsEditModalOpen(false)
  }

  const handleCancel = () => {
    seIsEditModalOpen(false)
  }

  const onEdit = (value) => {
    console.log(value)
  }

  const showCostsModal = () => {
    seIsCostsModalOpen(true)
  }

  const handleCostsOK = () => {
    seIsCostsModalOpen(false)
  }

  const handleCostsCancel = () => {
    seIsCostsModalOpen(false)
  }

  const onCostsSubmit = (value) => {
    console.log(value)
  }

  return (
    <Selflayout
      titleProps={{
        title: '客户详情',
        ShowReturn: true
      }}
    >
      <TitleBar
        onEdit={showModal}
        onCosts={showCostsModal}
      />
      <ConsumerTag
        title="客户标签"
        icon="tag"
        list={tagList}
        onAdd={addTag}
        onDelete={deleteTag}
      />
      <div className='staff-info-box'>
        <div className='staff-info-left'>
          <ConsumerRecord />
        </div>
        <div className='staff-info-right'>
          <ConsumerTop />
        </div>
      </div>
      {
        isEditModalOpen && (
          <Modal
            data={consumer}
            onOK={handleOK}
            onCancel={handleCancel}
            onSubmit={onEdit}
          />
        )
      }
      {
        isCostsModalOpen && (
          <Modal
            data={costs}
            onOK={handleCostsOK}
            onCancel={handleCostsCancel}
            onSubmit={onCostsSubmit}
          />
        )
      }
    </Selflayout>
  )
}