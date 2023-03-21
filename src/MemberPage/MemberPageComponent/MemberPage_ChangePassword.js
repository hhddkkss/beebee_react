import { useState, useEffect, useContext } from 'react'
import '../../styles/memberPage_changePassword.css'
import AuthContext from '../../Contexts/AuthContext'
import axios from 'axios'

function MemberPage_ChangePassword({ onHide }) {
  const { memberAuth } = useContext(AuthContext)

  const [passowrd, setPassword] = useState([])

  const upDatePassword = async () => {
    const r = await axios
      .put(`http://localhost:3003/member_page/password/55`)
      .then((response) => {
        console.log(response.data, 66666)
        // setPassword(response.data)
      })
  }


  return (
    <>
      <div className="member_body">
        {/* <!-- 要顯示請加 "change_info_true" --> */}
        <div className="changePassword-info change_info_true">
          <p>更改密碼</p>

          <div className="changePassword_form">
            <div className="member_box">
              <label htmlFor="old_password">原密碼</label>
              <input type="text" name="old_password"></input>
              {/* <!-- 警告框加上"input_alert_true"會顯示,無則不顯示 --> */}
              <div className="input_alert_info ">兩次輸入密碼不同</div>
            </div>
            <div className="member_box">
              <label htmlFor="new_password">新密碼</label>
              <input type="text" name="new_password"></input>
              <div className="input_alert_info input_alert_true">
                兩次輸入密碼不同
              </div>
            </div>
            <div className="member_box">
              <label htmlFor="new_password">請再次輸入新密碼</label>
              <input type="text" name="new_password"></input>
              <div className="input_alert_info input_alert_true">
                兩次輸入密碼不同
              </div>
            </div>
          </div>
          <div className="btn-mygroup">
            <button
              className="btn memberPage_button basic_infomation_confirm"
              onClick={() => console.log('送出')}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_889_1190)">
                  <path
                    d="M16.166 8.02594V8.69236C16.1651 10.2544 15.6593 11.7743 14.724 13.0254C13.7887 14.2765 12.4741 15.1917 10.9762 15.6346C9.47824 16.0775 7.87728 16.0243 6.41204 15.483C4.94681 14.9416 3.69581 13.9412 2.84563 12.6308C1.99545 11.3204 1.59164 9.77026 1.69441 8.21161C1.79719 6.65296 2.40105 5.16929 3.41594 3.98188C4.43082 2.79446 5.80236 1.96692 7.32598 1.62268C8.84961 1.27844 10.4437 1.43593 11.8705 2.07168"
                    stroke="#233A66"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16.1667 2.89745L8.92309 10.1483L6.75 7.97523"
                    stroke="#233A66"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_889_1190">
                    <rect
                      width="17.3847"
                      height="17.3847"
                      fill="white"
                      transform="translate(0.230469)"
                    />
                  </clipPath>
                </defs>
              </svg>
              確認修改
            </button>
            <button
              className="btn memberPage_button basic_infomation_cancle"
              onClick={onHide}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.61523 3L14.6152 14M14.6152 3L3.61523 14"
                  stroke="#F4F4F4"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              取消修改
            </button>
          </div>
          <button onClick={onHide}>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>
    </>
  )
}

export default MemberPage_ChangePassword
