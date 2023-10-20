import React, { useMemo } from "react";
import { Field } from "formik";
import Detele from "./components/Delete/index";
import { SendCode, Timer } from "./components/SendCode";
import FieldWithLabel from '@/components/FieldWithLabel'
import './style.css'
  
export default (props) => {
  const {
    label,
    required,
    name,
    handleChange,
    allowClear,
    allowSendCode,
    sendCodeStep,
    onSend,
    backgroundText,
    ...otherProps
  } = props

  const _onClick = (setFieldValue) => {
    setFieldValue(name, '')
  }

  return (
    <FieldWithLabel
      label={label}
      required={required}
    >
      <Field name={name}>
        {
          ({ field, form }) => {
            return (
              <div className="input-box">
                <input className="input" {...otherProps} value={field.value} {...field} />
                {
                  backgroundText && (<span className="bg-text">{backgroundText}</span>)
                }
                {
                  allowClear
                    && field.value
                    && (
                      <Detele
                        className="delete-icon"
                        onClick={() => {_onClick(form.setFieldValue)}}
                      />
                    )
                }
                {
                  allowSendCode && (
                    sendCodeStep === 0
                    ? <SendCode onClick={onSend}>发送验证码</SendCode>
                    : <Timer delay={60} {...props} />
                  )
                }
              </div>
            )
          }
        }
      </Field>
    </FieldWithLabel>
  )
}