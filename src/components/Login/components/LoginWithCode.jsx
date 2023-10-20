"use client"

import React, { useState } from "react";  
import Input from "../../Input";
import Button from "../../Button";
import { Formik, Form } from "formik";
import style from './style.module.css'

const LoginWithCode = () => {
  const [sendCodeStep, setSendCodeStep] = useState(0)

  const onSend = () => {
    setTimeout(() => {
      setSendCodeStep(1)
    }, 2000)
  }

  const onRest = () => {
    setSendCodeStep(0)
  }

  const onSubmit = (value) => {
    console.log(value)
  }

  return (
    <div className={style["password-login-box"]}>
      <Formik
        initialValues={{ phone: '', code: '' }}
        onSubmit={onSubmit}
      >
        {() => {
          return (
            <Form>
              <div className={style["field-box"]}>
                <Input
                  name="phone"
                  allowClear={true}
                  placeholder="请输入手机号"
                />
              </div>
              <div className={style["field-box"]}>
                <Input
                  name="code"
                  placeholder="请输入验证码"
                  allowClear={true}
                  allowSendCode={true}
                  sendCodeStep={sendCodeStep}
                  onSend={onSend}
                  onRest={onRest}
                />
              </div>
              <div className={style["button-box"]}>
                <Button className={style["login-button"]} type="submit">登录</Button>
              </div>
            </Form>
          )
        }}
      </Formik>
    </div>
  );  
};

export default LoginWithCode
