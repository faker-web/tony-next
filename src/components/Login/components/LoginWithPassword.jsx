"use client"

import React from "react";
import { Formik, Form } from "formik";
import Input from "../../Input";
import Button from "../../Button";
import style from './style.module.css'

const LoginWithPassword = () => {
  const onSubmit = (value) => {
    console.log(value)
  }

  return (
    <div className={style["password-login-box"]}>
      <Formik
        initialValues={{ phone: '', password: '' }}
        onSubmit={onSubmit}
      >
        {
          () => {
            return (
              <Form>
                <div className={style["field-box"]}>
                  <Input
                    allowClear={true}
                    placeholder="请输入手机号"
                    name="phone"
                  />
                </div>
                <div className={style["field-box"]}>
                  <Input
                    allowClear={true}
                    placeholder="请输入密码"
                    type="password"
                    name="password"
                  />
                </div>
                <div className={style["button-box"]}>
                  <Button className={style["login-button"]} type="submit">登录</Button>
                </div>
              </Form>
            )
          }
        }
      </Formik>
    </div>
  );  
};

export default LoginWithPassword
