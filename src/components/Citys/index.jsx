import React from 'react';
import { Field } from "formik";
import { Cascader } from 'antd';  
import chinaAreaData from 'china-area-data';
import './style.css'

const getAreas = (code) => {
  const areas = chinaAreaData[code]
  if (!areas) {
    console.log("code", code)
    return []
  }
  return Object
    .keys(areas)
    .map((code) => {
      const value = areas[code]
      const label = value
      const children = []
      return {
        value,
        label,
        children
      }
    }) 
}

const getCity = (code) => {
  if (!code) return []
  const citys = chinaAreaData[code]
  return Object
    .keys(citys)
    .map((code) => {
      const value = citys[code]
      const label = value
      const children = getAreas(code)
      return {
        value,
        label,
        children
      }
    })
}

const ChinaArea = ({
  name,
  provinceCode,
  ...props
}) => {
  const _onChange = (setFieldValue, value) => {
    setFieldValue('city', value)
  }

  const citys = getCity(provinceCode)
  return (  
    <Field name={name}>
      {
        ({ field, form }) => (
          <div className='china-area-box'>
            <Cascader
              className='area-select'
              options={citys}
              {...field}
              {...props}
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