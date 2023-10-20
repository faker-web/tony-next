import React from "react";
import { Field } from "formik";
import { Select } from 'antd';
import FieldWithLabel from '@/components/FieldWithLabel'
import  './style.css'
  
export default ({
  name,
  label,
  required,
  ...props
}) => {
  return (
    <FieldWithLabel
      label={label}
      required={required}
    >
      <Field name={name}>
        {
          () => (
            <div className="self-select">
              <div className="self-select-box">
                <Select
                  size="large"
                  style={{ width: '100%' }}
                  options={[
                    { value: 'jack', label: 'Jack' },
                    { value: 'lucy', label: 'Lucy' },
                    { value: 'Yiminghe', label: 'yiminghe' },
                    { value: 'disabled', label: 'Disabled', disabled: true },
                  ]}
                  {...props}
                />
              </div>
            </div>
          )
        }
      </Field>
    </FieldWithLabel>
  )
}