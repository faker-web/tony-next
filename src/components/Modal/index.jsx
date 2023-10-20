import React, { useEffect } from "react";  
import { Formik, Form } from "formik";
import { Close } from "../Icons";
import ModalButton from "../ModalButton";

import style from './style.module.css'
  
const noop = () => {}

export default ({
  title = '新建员工',
  data = [],
  initialValues={},
  onCancel = noop,
  onSubmit = noop,
  showBtn = false,
  children,
  ...props
}) => {
  useEffect(() => {
    document.body.style.height = '100vh'
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.height = ''
      document.body.style.overflow = ''
    }
  })

  return (
    <div className={style['modal-bg']}>
      <div className={style['modal-box']} {...props}>
        <div className={style['modal-title']}>
          <span className={style['modal-title-text']}>
            {title}
          </span>
          <div onClick={onCancel}>
            <Close />
          </div>
        </div>
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
          >
          {
            () => {
              return (
                <Form>
                  <div className={style['field-box-container']}>
                    {
                      data.map(({
                        Component,
                        ...props
                      }, idx) => (
                        <div className={style["field-box"]} key={idx}>
                          <Component
                            {...props}
                          />
                        </div>
                      ))
                    }
                  </div>
                  <ModalButton 
                    onOK={onSubmit}
                    onCancel={onCancel}
                  />
                </Form>
              )}
            }
          </Formik>
      </div>
    </div>
  )
}
