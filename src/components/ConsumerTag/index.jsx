import React, { useState } from "react"; 
import CommonBox from '../CommonBox'
import { TagList } from './components/ConsumerTag'
import AddTagModal from './components/AddTagModal'

const noop = () => {}
export default ({
  title,
  icon,
  list = [],
  onAdd = noop,
  onDelete = noop
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleOK = (text) => {
    setTimeout(() => {
      onAdd(text)
      setIsModalOpen(false)
    }, 500);
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  return (
    <div>
      {
        isModalOpen && (
          <AddTagModal
            onOK={handleOK}
            onCancel={handleCancel}
          />
        )
      }
      <CommonBox
        title={title}
        icon={icon}
      >
        <TagList 
          list={list}
          showModal={showModal}
          onDelete={onDelete}
        />
      </CommonBox>
    </div>
  )
}