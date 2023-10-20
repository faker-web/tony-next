import React, { useMemo } from "react";
import { Field } from "formik";
import classNames from "classnames/bind";
import style from './style.module.css'

const cx = classNames.bind(style)

const boycls = (selectBoy) => {
  return cx({
    ['select-boy']: true,
    ['select-boy-selected']: selectBoy
  })
}

const girlcls = (selectGirl) => {
  return cx({
    'select-girl': true,
    'select-girl-selected': selectGirl
  })
}

export const SexSelect = ({
  name,
  label = "性别"
}) => {
  return (
    <Field name={name}>
      {
        ({ field, form }) => {        
          return (
            <div className={style['select-box']}>
              <span className={style['select-label-text']}>{label}：</span>
              <div
                className={boycls(field.value === 0)}
                onClick={() => {
                  form.setFieldValue(name, 0)
                }}
              >
                男
              </div>
              <div
                className={girlcls(field.value === 1)}
                onClick={() => {
                  form.setFieldValue(name, 1)
                }}
              >
                女
              </div>
            </div>
          )
        }
      }
    </Field>
  )
}