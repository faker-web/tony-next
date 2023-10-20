import React from 'react';
import { Field } from "formik";
import { Cascader } from 'antd';  
import chinaAreaData from 'china-area-data';
import './style.css'

const getProvince = () => {
  const province = chinaAreaData['86']
  return Object
    .keys(province)
    .map((code) => {
      const value = code
      const label = province[code]
      const children = []
      return {
        value,
        label,
        children
      }
    })
}

const province = getProvince()
  
const ChinaArea = ({
  name,
  onChange,
  ...props
}) => {
  const _onChange = (setFieldValue, value) => {
    onChange(value)
    setFieldValue('province', value)
  }

  return (  
    <Field name={name}>
      {
        ({ field, form }) => (
          <div className='province-area-box'>
            <Cascader
              className='area-select'
              options={province}
              {...props}
              {...field}
              onChange={(value) => {
                _onChange(form.setFieldValue, value)
              }}
            />  
          </div>
        )
      }
    </Field>
  );  
};  
  
export default ChinaArea;

export const AreaTitleSelect = (props) => {
  const { onChange } = props
  return (
    <Cascader
      className='area-title-select'
      options={province}
      {...props}
      onChange={onChange}
    />
  )
}