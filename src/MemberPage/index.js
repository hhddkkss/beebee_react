import { useEffect, useState, useContext } from 'react'
import Navbar from '../../src/component/Navbar/index'
import '../styles/memberChat.css'
import '../styles/memberLevel.css'
import '../styles/memberPage_changePassword.css'
import '../styles/memberShoppingDetail.css'
import '../styles/memberPage.css'
import '../styles/couponDetail.css'
import '../styles/memberPagefornav.css'
import MeberPage_Sidebar from './MemberPageComponent/MeberPage_Sidebar'
import axios from 'axios'
import ChangePasswords from './MemberPageComponent/MemberPage_ChangePassword'
import dayjs from 'dayjs'
import AuthContext from '../Contexts/AuthContext'
import MemberPage_ChangeAvatar from './MemberPageComponent/MemberPage_ChangeAvatar'

function MemberPage() {
  const { memberAuth } = useContext(AuthContext)
  const { setNavbarType } = useContext(AuthContext)

  const [passWordData, setPassWordData] = useState([])
  const [changeMember, setChangeMember] = useState({})
  const [changePassword, setChangePassword] = useState(false)

  const [cityList, setCityList] = useState([])
  const [allDistList, setAllDistList] = useState([])
  const [distList, setDistList] = useState([])

  const [signupForm, setSignupForm] = useState({
    name: '',
    email: '',
    password: '',
    mobile: '',
    gender: '',
    birthday: '1990-01-01',
    address_city: '',
    address_dist: '',
    address_rd: '',
  })

  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
  })
  //換大頭貼照的開關
  const [avatarOpen, setAvaterOpen] = useState(false)

  function setLoginFormValue(e) {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value })
  }
  function setSingupFormValue(e) {
    setSignupForm({ ...signupForm, [e.target.name]: e.target.value })
  }

  const getMemberData = async () => {
    const pwd = await axios
      .get(`http://localhost:3003/member_page/edit/${memberAuth.memberId}`)
      .then((response) => {
        // console.log(response.data, 66666)
        setPassWordData(response.data)
      })
  }

  // 用戶確定送出資料更動再做

  const upDateMember = () => {
    axios
      .put(`http://localhost:3003/member_page/edit/${memberAuth.memberId}`, {
        member_name: changeMember.member_name,
        email: changeMember.email,
        password: changeMember.password,
        gender: changeMember.gender,
        birthday: changeMember.birthday,
        mobile: changeMember.mobile,
        address_city: changeMember.address_city,
        address_dist: changeMember.address_dist,
        address_rd: changeMember.address_rd,
      })
      .then((response) => {
        // console.log(response, 9999)
        setPassWordData(response.data)
      })
  }

  const getAddressData = async () => {
    const addresscity = await axios.get(`http://localhost:3003/address_list`)
    // .then((response) => {
    //   console.log(response, 99999)
    //   setPassWordData(response.data)

    let city = addresscity.data.rows
      .filter((v) => {
        return v.parent_sid === 0
      })
      .map((e) => {
        return e.ct_name
      })
    let dist = addresscity.data.rows
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
    getMemberData()
  }, [])

  useEffect(() => {
    setChangeMember({ ...passWordData[0] })
  }, [passWordData])

  useEffect(() => {
    getAddressData()
    setNavbarType('light')
  }, [])

  useEffect(() => {
    if (changeMember.address_city) {
      const foundIndex = cityList.findIndex(
        (v) => v === changeMember.address_city
      )

      if (foundIndex > -1) {
        changeDist(foundIndex + 1)

        setSignupForm({
          ...signupForm,
          address_dist: changeMember.address_dist,
        })
      }
    }
  }, [allDistList, changeMember.address_city])

  return (
    <>
      <Navbar />

      {!!changeMember ? (
        <div className="member_body">
          <MemberPage_ChangeAvatar avatarOpen={avatarOpen} />
          <MeberPage_Sidebar
            setAvaterOpen={setAvaterOpen}
            avatarOpen={avatarOpen}
          />
          <div className="member_container">
            <div className="now_memberPage">會員詳細資料</div>
            <div className="avatar_box member_mobile_show">
              <img
                src="https://teameowdev.files.wordpress.com/2016/04/avatar24-01.png"
                alt="memberAvatar"
                className="memberAvatar"
              ></img>
              <img
                src="https://teameowdev.files.wordpress.com/2016/04/avatar24-01.png"
                alt="memberAvatar"
                className="memberAvatar"
              ></img>
            </div>

            <form
              name="memberForm"
              className="basic_infomation"
              key={changeMember.member_id}
            >
              <div className="member_box">
                <label htmlFor="member_name">姓名</label>
                <input
                  name="member_name"
                  value={changeMember.member_name}
                  onChange={(event) => {
                    setChangeMember({
                      ...changeMember,
                      [event.target.name]: event.target.value,
                    })
                  }}
                ></input>
              </div>
              <div className="member_box">
                <label htmlFor="member_gender">性別</label>
                {/* <select name="member_gender"> */}
                {/* {console.log('cc', changeMember)} */}
                <input
                  name="gender"
                  value={changeMember.gender}
                  onChange={(event) => {
                    // console.log('gender', event.target.name)
                    setChangeMember({
                      ...changeMember,
                      [event.target.name]: event.target.value,
                    })
                  }}
                ></input>
                {/* </select> */}
              </div>
              <div className="member_box">
                <label htmlFor="member_email">Email</label>
                <input
                  name="email"
                  value={changeMember.email}
                  onChange={(event) => {
                    setChangeMember({
                      ...changeMember,
                      [event.target.name]: event.target.value,
                    })
                  }}
                ></input>
              </div>
              <div className="city_dist">
                <div className="member_box">
                  <label htmlFor="member_city">居住城市</label>
                  <select
                    name="address_city"
                    defaultValue={
                      changeMember.address_city
                        ? changeMember.address_city
                        : signupForm.address_city
                    }
                    onChange={(e) => {
                      changeDist(e.target.selectedIndex)
                      setSingupFormValue(e)
                    }}
                  >
                    <option value="none" hidden disabled>
                      臺北市
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
                <div className="member_box">
                  <label htmlFor="member_dist">鄉鎮區</label>
                  <select
                    name="address_dist"
                    // defaultValue={
                    //   changeMember.address_dist
                    //     ? changeMember.address_dist
                    //     : signupForm.address_dist
                    // }
                    value={signupForm.address_dist}
                    onChange={(e) => {
                      setSingupFormValue(e)
                    }}
                  >
                    <option value="none" hidden disabled>
                      大安區
                    </option>{' '}
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
              <div className="member_box">
                <label htmlFor="member_birthday">生日</label>
                <input
                  type="date"
                  name="birthday"
                  value={dayjs(changeMember.birthday).format('YYYY-MM-DD')}
                  onChange={(event) => {
                    setChangeMember({
                      ...changeMember,
                      [event.target.name]: event.target.value,
                    })
                  }}
                ></input>
              </div>
              <div className="member_box">
                <label htmlFor="member_address">詳細地址</label>
                <input
                  name="address_rd"
                  value={changeMember.address_rd}
                  onChange={(event) => {
                    setChangeMember({
                      ...changeMember,
                      [event.target.name]: event.target.value,
                    })
                  }}
                ></input>
              </div>
              <div className="member_box">
                <label htmlFor="mobile">行動電話</label>
                <input
                  name="mobile"
                  value={changeMember.mobile}
                  onChange={(event) => {
                    setChangeMember({
                      ...changeMember,
                      [event.target.name]: event.target.value,
                    })
                  }}
                ></input>
              </div>

              <div className="member_box">
                <label htmlFor="member_mobile" className="member_mobile_hidden">
                  密碼
                </label>
                <button
                  name="member_password"
                  className="memberPage_button edit_password_btn"
                  onClick={(e) => {
                    e.preventDefault()
                    setChangePassword(true)
                  }}
                >
                  修改密碼
                </button>
                {changePassword && (
                  <ChangePasswords
                    show={changePassword}
                    onHide={() => setChangePassword(false)}
                  />
                )}
              </div>

              <div className="form_btn_group">
                <button
                  className="btn memberPage_button basic_infomation_confirm"
                  onClick={() => {
                    upDateMember()
                    alert('修改成功')
                  }}
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
                    <div>
                      <clipPath id="clip0_889_1190">
                        <rect
                          width="17.3847"
                          height="17.3847"
                          fill="white"
                          transform="translate(0.230469)"
                        />
                      </clipPath>
                    </div>
                  </svg>
                  確認修改
                </button>
                <button className="btn memberPage_button basic_infomation_cancle">
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
            </form>

            {/* <div className="auth_container">
              <div className="now_memberPage member_mobile_hidden">
                Authenticate details
              </div>
              <button
                // onClick="authClick(event)"
                className="memberPage_button auth_check_btn member_mobile_show "
              >
                Authenticate details
              </button>
              <button className="memberPage_button auth_detail_box auth_checked">
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
                Email 已認證
              </button>
              <button className="memberPage_button auth_detail_box auth_checked">
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
                手機 已認證
              </button>
              <button className="memberPage_button auth_detail_box ">
                <svg
                  width="18"
                  height="19"
                  viewBox="0 0 18 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_889_1372)">
                    <path
                      d="M7.83829 3.56545L1.70293 13.8079C1.57644 14.027 1.5095 14.2754 1.50879 14.5283C1.50809 14.7813 1.57363 15.03 1.69889 15.2498C1.82416 15.4696 2.00479 15.6527 2.22281 15.781C2.44083 15.9093 2.68865 15.9783 2.94159 15.981H15.2123C15.4653 15.9783 15.7131 15.9093 15.9311 15.781C16.1491 15.6527 16.3297 15.4696 16.455 15.2498C16.5803 15.03 16.6458 14.7813 16.6451 14.5283C16.6444 14.2754 16.5775 14.027 16.451 13.8079L10.3156 3.56545C10.1865 3.35257 10.0047 3.17656 9.78769 3.0544C9.57073 2.93225 9.32594 2.86808 9.07695 2.86808C8.82796 2.86808 8.58317 2.93225 8.36621 3.0544C8.14924 3.17656 7.96742 3.35257 7.83829 3.56545V3.56545Z"
                      stroke="#F4F4F4"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.07715 7.28868V10.1861"
                      stroke="#F4F4F4"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.07715 12.3592V12.7214"
                      stroke="#F4F4F4"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_889_1372">
                      <rect
                        width="17.3847"
                        height="17.3847"
                        fill="white"
                        transform="translate(0.384766 0.769409)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                Google 未認證
              </button>
              <button className="memberPage_button auth_detail_box ">
                <svg
                  width="18"
                  height="19"
                  viewBox="0 0 18 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_889_1372)">
                    <path
                      d="M7.83829 3.56545L1.70293 13.8079C1.57644 14.027 1.5095 14.2754 1.50879 14.5283C1.50809 14.7813 1.57363 15.03 1.69889 15.2498C1.82416 15.4696 2.00479 15.6527 2.22281 15.781C2.44083 15.9093 2.68865 15.9783 2.94159 15.981H15.2123C15.4653 15.9783 15.7131 15.9093 15.9311 15.781C16.1491 15.6527 16.3297 15.4696 16.455 15.2498C16.5803 15.03 16.6458 14.7813 16.6451 14.5283C16.6444 14.2754 16.5775 14.027 16.451 13.8079L10.3156 3.56545C10.1865 3.35257 10.0047 3.17656 9.78769 3.0544C9.57073 2.93225 9.32594 2.86808 9.07695 2.86808C8.82796 2.86808 8.58317 2.93225 8.36621 3.0544C8.14924 3.17656 7.96742 3.35257 7.83829 3.56545V3.56545Z"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.07715 7.28868V10.1861"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.07715 12.3592V12.7214"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_889_1372">
                      <rect
                        width="17.3847"
                        height="17.3847"
                        fill="white"
                        transform="translate(0.384766 0.769409)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                Facebook 未認證
              </button>
            </div> */}
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  )
}

export default MemberPage
