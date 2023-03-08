import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './../styles/login.css'
import Navbar from '../component/Navbar'
import { LOGIN } from './../component/LoginApi'

function SignipForm(props) {
  const { isActive } = props
  return (
    <>
      {' '}
      <div className={isActive ? ' form_area' : 'form_area signup_form_out'}>
        <div className="sign_form_title">Welcome</div>
        <div className="now_page login_mobile_hidden">Sign up</div>
        <form name="sign_form" className="login_form">
          <div className="form_box">
            <label className="label">姓名</label>
            <input
              type="text"
              placeholder=""
              name="name"
              className="form_input"
            />
          </div>
          <div className="form_box">
            <label className="label">E-mail</label>
            <input
              type="text"
              placeholder="e-mail"
              name="email"
              className="form_input"
            />
          </div>
          <div className="form_box">
            <label className="label">密碼</label>
            <input
              type="text"
              placeholder="password"
              name="password"
              className="form_input"
            />
          </div>
          <div className="form_box">
            <label className="label">請再輸入一次密碼</label>
            <input
              type="text"
              placeholder="password"
              name="password-check"
              className="form_input"
            />
          </div>
          <div className="form_btn">
            <button className="loginPage_button google_login_btn">
              Google 登入
            </button>
          </div>
          <div className="form_btn">
            <button className="loginPage_button sign_form_btn">下一步</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default SignipForm
