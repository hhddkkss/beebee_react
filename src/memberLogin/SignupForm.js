import './../styles/login.css'
import axios from 'axios'
import { ADDRESS_LIST, SIGNUP } from '../component/LoginApi'
import { useState, useEffect } from 'react'

function SignipForm(props) {
  const { activeClass, setSingupFormValue, setActive, signupForm } = props
  const [cityList, setCityList] = useState([])
  const [allDistList, setAllDistList] = useState([])
  const [distList, setDistList] = useState([])

  const getAddressData = async () => {
    const resD = await axios.get(ADDRESS_LIST)
    let city = resD.data.rows
      .filter((v) => {
        return v.parent_sid == 0
      })
      .map((e) => {
        return e.ct_name
      })
    let dist = resD.data.rows
      .filter((v) => {
        return v.parent_sid !== 0
      })
      .map((e) => {
        return { ctname: e.ct_name, parent_sid: e.parent_sid }
      })
    setCityList(city)
    setAllDistList(dist)
  }

  const changeDist = (n) => {
    setDistList(
      allDistList.filter((v) => v.parent_sid == n).map((e) => e.ctname)
    )
  }

  useEffect(() => {
    getAddressData()
  }, [])

  return (
    <>
      {/* 申請第1步 */}
      <div
        className={activeClass(
          'form_area signup_form_out',
          'form_area',
          'form_area signup_form_out'
        )}
      >
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
              onChange={(e) => {
                setSingupFormValue(e)
              }}
            />
          </div>
          <div className="form_box">
            <label className="label">E-mail</label>
            <input
              type="text"
              placeholder="e-mail"
              name="email"
              className="form_input"
              onChange={(e) => {
                setSingupFormValue(e)
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
                setSingupFormValue(e)
              }}
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
            <button
              className="loginPage_button sign_form_btn"
              onClick={(e) => {
                e.preventDefault()
                setActive(3)
              }}
            >
              下一步
            </button>
          </div>
        </form>
      </div>

      {/* 申請第2步 */}
      <div
        className={activeClass(
          'form_area signup_form_out',
          'form_area signup_form_out',
          'form_area signup_step2'
        )}
      >
        <div className="sign_form_title login_mobile_hidden">Welcome</div>
        <form name="sign_form" className="login_form">
          <div className="form_box">
            <label htmlFor="mobile" className="label">
              電話
            </label>
            <input
              type="text"
              placeholder="09XXXXXXXXX"
              name="mobile"
              className="form_input"
              onChange={(e) => {
                setSingupFormValue(e)
              }}
            />
          </div>
          <div className="form_box">
            <label htmlFor="email" className="label">
              性別
            </label>
            <div className="genderBox">
              <label className="form_input" htmlFor="male">
                <input
                  type="radio"
                  name="gender"
                  id="male"
                  className=""
                  value="male"
                  checked={signupForm.gender === 'male'}
                  onChange={(e) => {
                    setSingupFormValue(e)
                  }}
                />
                <label htmlFor="male" className="genderRadio">
                  生理男
                </label>
              </label>
              <label className="form_input " htmlFor="female">
                <input
                  type="radio"
                  name="gender"
                  id="female"
                  className=""
                  value="female"
                  checked={signupForm.gender === 'female'}
                  onChange={(e) => {
                    setSingupFormValue(e)
                  }}
                />
                <label htmlFor="female" className="genderRadio">
                  生理女
                </label>
              </label>
            </div>
          </div>
          <div className="form_box">
            <label htmlFor="email" className="label">
              生日
            </label>
            <input
              type="date"
              name="birthday"
              className="form_input"
              onChange={(e) => {
                setSingupFormValue(e)
              }}
            />
          </div>
          <div className="form_box">
            <div className="genderBox">
              <div className="">
                <label htmlFor="password" className="label">
                  居住縣市
                </label>
                <select
                  type="text"
                  placeholder="password"
                  name="address_city"
                  className="form_input"
                  defaultValue="none"
                  onChange={(e) => {
                    changeDist(e.target.selectedIndex)
                    setSingupFormValue(e)
                  }}
                >
                  <option value="none" hidden disabled>
                    請選擇縣市
                  </option>
                  {cityList.map((v, i) => {
                    return (
                      <option key={i} value={v}>
                        {v}
                      </option>
                    )
                  })}
                </select>
              </div>
              <div className="">
                <label htmlFor="password" className="label">
                  鄉鎮區
                </label>
                <select
                  type="text"
                  placeholder="password"
                  name="address_dist"
                  className="form_input"
                  defaultValue="none"
                  onChange={(e) => {
                    setSingupFormValue(e)
                  }}
                >
                  <option value="none" hidden disabled>
                    請選擇鄉鎮區
                  </option>
                  {distList.map((v, i) => {
                    return (
                      <option key={i} value={v}>
                        {v}
                      </option>
                    )
                  })}
                </select>
              </div>
            </div>
          </div>
          <div className="form_box">
            <label htmlFor="password" className="label">
              居住詳細路址
            </label>
            <input
              type="text"
              placeholder="EX:大安路1號"
              name="address_rd"
              className="form_input"
              onChange={(e) => {
                setSingupFormValue(e)
              }}
            />
          </div>

          <div className="form_btn">
            <button
              className="loginPage_button sign_form_btn"
              onClick={(e) => {
                e.preventDefault()
                axios.post(SIGNUP, { ...signupForm }).then((response) => {
                  if (response.data.success) {
                    const { success, dataValue } = response.data

                    console.log(success, dataValue)
                    //setAuth
                    // navigate('/')
                  } else {
                    alert(response.data.error || '登入失敗')
                  }
                })
              }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.9355 8.02594V8.69236C15.9346 10.2544 15.4288 11.7743 14.4935 13.0254C13.5583 14.2765 12.2436 15.1917 10.7457 15.6346C9.24777 16.0775 7.64681 16.0243 6.18157 15.483C4.71634 14.9416 3.46534 13.9412 2.61516 12.6308C1.76498 11.3204 1.36117 9.77026 1.46394 8.21161C1.56672 6.65296 2.17058 5.16929 3.18547 3.98188C4.20035 2.79446 5.57189 1.96692 7.09551 1.62268C8.61914 1.27844 10.2132 1.43593 11.64 2.07168"
                  stroke="#233A66"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.9363 2.89746L8.69262 10.1483L6.51953 7.97525"
                  stroke="#233A66"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              完成申請
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default SignipForm
