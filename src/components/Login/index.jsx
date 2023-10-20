import React from "react";  

import Link from 'next/link'
import Tabs from "../Tabs";
import LoginWithPassword from "./components/LoginWithPassword";
import LoginWithCode from "./components/LoginWithCode";
import LoginRegisterBox from "../LoginRegisterBox";

import './style.css'

const tabs = [  
    { id: "tab1", label: "短信登录", content: <LoginWithCode /> },  
    { id: "tab2", label: "账号登录", content: <LoginWithPassword /> },  
]
export default () => {
  return (
    <LoginRegisterBox>
      <div className="login-tabs-box">
        <Tabs tabs={tabs} />
      </div>
      <Link href="/register" className="register-text">注册账号</Link>
    </LoginRegisterBox>
  )
}