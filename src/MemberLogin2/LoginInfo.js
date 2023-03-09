import React from 'react'
import './../styles/login.css'

function LoginInfo(props) {
  const { infoClass, setInfoState } = props
  return (
    <div
      className={infoClass(
        'loginpage-info',
        'loginpage-info info-login-success',
        'loginpage-info info-login-fail'
      )}
    >
      <p>{infoClass('', '登入成功！BEEbeE歡迎您', 'Oops! 登入失敗')}</p>
      <div className="btn-mygroup">
        <button
          href="#"
          className="btn-confirm"
          onClick={(e) => {
            e.preventDefault()
            setInfoState(1)
            //導回首頁
          }}
        >
          確定
        </button>
      </div>
    </div>
  )
}

export default LoginInfo
