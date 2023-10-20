import React from "react";
import { Field } from "formik";
import { DatePicker } from 'antd';
import FieldWithLabel from '@/components/FieldWithLabel'
import './style.css'
  
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
            <div className="self-date-picker">
              <DatePicker {...props} />
            </div>
          )
        }
      </Field>
    </FieldWithLabel>
  )
}