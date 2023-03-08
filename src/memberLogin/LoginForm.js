import axios from 'axios'
import './../styles/login.css'
import { LOGIN } from './../component/LoginApi'

function LoginForm(props) {
  const { loginForm, setLoginFormValue, activeClass } = props

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
                localStorage.setItem(
                  'myAuth',
                  JSON.stringify({
                    memberId,
                    memberEmail,
                    token,
                  })
                )
                console.log(memberEmail, memberId)
                //setAuth
                // navigate('/')
              } else {
                alert(response.data.error || '登入失敗')
              }
            })
          }}
        >
          <div className="form_box">
            <label className="label">E-mail</label>
            <input
              type="text"
              placeholder="e-mail"
              name="email"
              className="form_input"
              onChange={(e) => {
                setLoginFormValue(e)
              }}
            />
          </div>
          <div className="form_box">
            <label className="label">密碼</label>
            <input
              type="text"
              placeholder="password"
              name="password"
              className="form_input"
              onChange={(e) => {
                setLoginFormValue(e)
              }}
            />
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
