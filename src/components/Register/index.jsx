import React, { useState } from "react";  
import { Formik, Form } from "formik";
import Link from 'next/link'
import Input from "../Input";
import Button from "../Button";
import LoginRegisterBox from "../LoginRegisterBox";
import Province from "../Province";
import Citys from "../Citys";

import style from './style.module.css'

export default () => {
  const [step, setStep] = useState(0)
  const [provinceCode, setProvinceCode] = useState(0)

  const onProvinceChange = ([code]) => {
    setProvinceCode(code)
  }

  const goNext = () => {
    setStep(1)
  }

  const onSubmit = (value) => {
    console.log(value)
  }

  return (
    <LoginRegisterBox>
      <div className={style["register-box"]}>
        <Formik
          initialValues={{
            phone: "",
            code: '',
            password: '',
            Province: '',
            city: '',
            storeName: '',
            contactPhone: ''
          }}
          onSubmit={onSubmit}
        >
          {
            () => {
              return (
                <Form>
                  {
                    step === 0 ? (
                      <>
                        <p className={style["register-title"]}>欢迎注册账号</p>
                        <div className={style["field-box"]}>
                          <Input
                            name="phone"
                            allowClear={true}
                            placeholder="请输入手机号"
                          />
                        </div>
 
                        <div className={style["field-box"]}>
                          <Input
                            placeholder="请输入验证码"
                            allowClear={true}
                            name="code"
                          />
                        </div>
                        <div className={style["field-box"]}>
                          <Input
                            name="password"
                            allowClear={true}
                            placeholder="请输入密码"
                            type="password"
                          />
                        </div>
                        <div className={style["button-box"]}>
                          <Button className="login-button" onClick={goNext}>下一步</Button>
                        </div>                        
                      </>
                    ) : (
                      <>
                        <p className={style["register-title"]}>填写门店信息</p>
                        <div className={style["field-box"]}>
                          <Province
                            name="province"
                            onChange={onProvinceChange}
                            placeholder="省份"
                          />
                        </div>
                        <div className={style["field-box"]}>
                          <Citys
                            name="city"
                            provinceCode={provinceCode}
                            placeholder="市区"
                        />
                        </div>
                        <div className={style["field-box"]}>
                          <Input
                            name="storeName"
                            placeholder="请填写门店名称"
                            allowClear={true}
                          />
                        </div>
                        <div className={style["field-box"]}>
                          <Input
                            name="contactPhone"
                            placeholder="联系人电话"
                            allowClear={true}
                          />
                        </div>
                        <div className={style["button-box"]}>
                          <Button className={style["login-button"]} type="submit">注册</Button>
                        </div>
                      </>
                    )
                  }
                </Form>
              )
            }
          }
        </Formik>

        <p className={style["login-tips-text"]}>
          已有账号？
          <Link href="/login" className={style["login-tips-text-link"]}>去登录</Link>
        </p>
      </div>
    </LoginRegisterBox>
  )

}