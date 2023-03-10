import axios from 'axios'
import { useContext } from 'react'

import './../styles/login.css'
import { LOGIN } from './../component/LoginApi'
import AuthContext from '../Contexts/AuthContext'

function LoginForm(props) {
  const { loginForm, setLoginFormValue, activeClass, setInfoState } = props

  //引入setAuth
  const { setMemberAuth } = useContext(AuthContext)

  return (
    <>
      <div
        className={activeClass(
          'form_area',
          'login_form_out form_area',
          'login_form_out form_area'
        )}
      >
        <div className="login_form_title">Welcome back</div>
        <div className="now_page login_mobile_hidden">Log in</div>
        <form
          name="login_form"
          className="login_form"
          onSubmit={(e) => {
            e.preventDefault()
            //登入送去API
            axios.post(LOGIN, { ...loginForm }).then((response) => {
              if (response.data.success) {
                const { memberEmail, memberId, token } = response.data
                //setLocalStorage
                localStorage.setItem(
                  'myAuth',
                  JSON.stringify({
                    memberId,
                    memberEmail,
                    token,
                  })
                )
                //console.log(memberEmail, memberId)
                setInfoState(2)
                //setAuth
                setMemberAuth({
                  authorized: true,
                  memberId: memberId,
                  memberEmail: memberEmail,
                  token: token,
                })
                //console.log(memberAuth)
              } else {
                setInfoState(3)
              }
            })
          }}
        >
          <div className="form_box">
            <label className="label">E-mail</label>
            <input
              type="text"
              placeholder="E-mail"
              name="email"
              className="form_input"
              onChange={(e) => {
                setLoginFormValue(e)
              }}
            />
            <div className="login_input_alert_info input_alert_true">
              兩次輸入密碼不同
            </div>
          </div>
          <div className="form_box">
            <label className="label">密碼</label>
            <input
              type="text"
              placeholder="Password"
              name="password"
              className="form_input"
              onChange={(e) => {
                setLoginFormValue(e)
              }}
            />
            <div className="login_input_alert_info input_alert_true">
              兩次輸入密碼不同
            </div>
          </div>
          <div className="form_btn">
            <button
              className="loginPage_button google_login_btn"
              onClick={(e) => {
                e.preventDefault()
              }}
            >
              Google 登入
            </button>
          </div>
          <div className="form_btn">
            <button
              onClick={(e) => {
                e.preventDefault()
              }}
              className="loginPage_button forget_pass_btn"
            >
              忘記密碼
            </button>
            <button type="submit" className="loginPage_button login_form_btn">
              登入
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default LoginForm
