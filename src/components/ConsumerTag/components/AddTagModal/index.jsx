import React, { useRef } from "react";
import { Field } from "formik";
import Modal from '../../../Modal'
import style from './style.module.css'

const noop = () => {}
export default ({
  onOK = noop,
  onCancel = noop
}) => {
  const textareaRef = useRef(null)

  const _onOK = () => {
    const value = textareaRef.current.value
    onOK(value)
  }

  const getComponent = ({ name }) => {
    return (
      <Field name={name}>
        {
          () => (
            <textarea
              ref={textareaRef}
              className={style['add-tag-area']}
            />
          )
        }
      </Field>
    )
  }

  return (
    <Modal
      onSubmit={_onOK}
      onCancel={onCancel}
      showBtn={true}
      height="296"
      data={[
        {
          name: 'addTag',
          Component: getComponent,
        }
      ]}
    />
  )
}