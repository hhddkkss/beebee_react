import { useState, useContext, useEffect } from 'react'
import { useNavigate, NavLink } from 'react-router-dom'
import '../../styles/memberPagefornav.css'
import axios from 'axios'
import AuthContext from '../../Contexts/AuthContext'
import MemberPage_ChangeAvatar from './MemberPage_ChangeAvatar'

function MeberPage_Sidebar() {
  const { memberAuth } = useContext(AuthContext)

  const [getMamber, setGetMember] = useState([])
  const [pic, setPic] = useState(false)

  const getMemberData = async () => {
    const memberdata = await axios
      .get(
        `http://localhost:3003/member_page/getnavname/${memberAuth.memberId}`
      )
      .then((response) => {
        // console.log(response.data[0], 66666)
        setGetMember(response.data[0])
      })
  }

  useEffect(() => {
    getMemberData()
  }, [])

  return (
    <>
      {/* {console.log(response.data)} */}
      <div className="member_sidebar member_mobile_hidden">
        <div className="member_card">
          <div className="mamber_avatar_circle">
            <img
              src="https://teameowdev.files.wordpress.com/2016/04/avatar24-01.png"
              alt="memberAvatar"
              className="memberAvatar"
            ></img>

            <div className="logo_edit">
              <button
                className="btn"
                onClick={(e) => {
                  e.preventDefault()
                  setPic(true)
                }}
              >
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_874_353)">
                    <path
                      d="M7.79199 2.83331H2.83366C2.45794 2.83331 2.0976 2.98257 1.83192 3.24824C1.56625 3.51392 1.41699 3.87426 1.41699 4.24998V14.1666C1.41699 14.5424 1.56625 14.9027 1.83192 15.1684C2.0976 15.4341 2.45794 15.5833 2.83366 15.5833H12.7503C13.126 15.5833 13.4864 15.4341 13.7521 15.1684C14.0177 14.9027 14.167 14.5424 14.167 14.1666V9.20831"
                      stroke="#FDF3EA"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13.1045 1.77085C13.3863 1.48906 13.7685 1.33075 14.167 1.33075C14.5655 1.33075 14.9477 1.48906 15.2295 1.77085C15.5113 2.05264 15.6696 2.43484 15.6696 2.83335C15.6696 3.23187 15.5113 3.61406 15.2295 3.89585L8.50033 10.625L5.66699 11.3334L6.37533 8.50002L13.1045 1.77085Z"
                      stroke="#FDF3EA"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <div>
                    <clipPath id="clip0_874_353">
                      <rect width="17" height="17" fill="white" />
                    </clipPath>
                  </div>
                </svg>
              </button>
              {pic && (
                <MemberPage_ChangeAvatar
                  show={pic}
                  onHide={() => setPic(false)}
                />
              )}
            </div>
          </div>
          {/* {console.log(getMamber)} */}
          <div className="member_account">{getMamber.email}</div>
          <div className="member_name">{getMamber.member_name}</div>
        </div>

        <div className="sidebar_list">
          {/* <button
            className="sidebar_btn btn sidebar_btn_active"
            onClick={() => {
              navigation('/member_page')
            }}
          >
            會員基本資料
          </button> */}
          <NavLink
            to="/member_page/edit"
            className={({ isActive }) =>
              isActive ? 'sidebar_btn  sidebar_btn_active' : 'sidebar_btn'
            }
          >
            會員基本資料
          </NavLink>
          <NavLink
            to="/member_page/shoppinglist"
            className={({ isActive, isPending }) =>
              isActive ? 'sidebar_btn sidebar_btn_active' : 'sidebar_btn'
            }
          >
            購買清單
          </NavLink>
          ;
          {/* <button
            className="sidebar_btn btn"
            onClick={() => {
              navigation('/member_page/shoppinglist')
            }}
          >
            購買清單
          </button> */}
          {/* <button
            className="sidebar_btn btn"
            onClick={() => {
              navigation('#')
            }}
          >

            文章管理
          </button> */}
          <NavLink
            to="/articles/member/postEd"
            className={({ isActive }) =>
              isActive ? 'sidebar_btn  sidebar_btn_active' : 'sidebar_btn'
            }
          >
            文章管理
          </NavLink>
          <NavLink
            to="/member_page/membercoupon_list"
            className={({ isActive }) =>
              isActive ? 'sidebar_btn  sidebar_btn_active' : 'sidebar_btn'
            }
          >
            優惠券
          </NavLink>
          ;
          {/* <button
            className="sidebar_btn btn"
            onClick={() => {
              navigation('/member_page/membercoupon_list')
            }}
          >
            優惠券
          </button> */}
          {/* <button
            className="sidebar_btn btn"
            onClick={() => {
              navigation('#')
            }}
          >
            收藏好物
          </button> */}
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? 'sidebar_btn  sidebar_btn_active' : 'sidebar_btn'
            }
          >
            收藏好物
          </NavLink>
          {/* <button
            className="sidebar_btn btn"
            onClick={() => {
              navigation('/member_page/membercomment_list')
            }}
          >
            歷史評價
          </button> */}
          <NavLink
            to="/member_page/membercomment_list"
            className={({ isActive }) =>
              isActive ? 'sidebar_btn  sidebar_btn_active' : 'sidebar_btn'
            }
          >
            歷史評價
          </NavLink>
          {/* <button
            className="sidebar_btn btn"
            onClick={() => {
              navigation('/member_page/memberlevel')
            }}
          >
            比比里程碑
          </button> */}
          {/* <NavLink
            to="/member_page/memberlevel"
            className={({ isActive }) =>
              isActive ? 'sidebar_btn  sidebar_btn_active' : 'sidebar_btn'
            }
          >
            比比里程碑
          </NavLink> */}
          {/* <button
            className="sidebar_btn btn"
            onClick={() => {
              navigation('/member_page/membercustomerservice')
            }}
          >
            幫助中心
          </button> */}
          {/* <NavLink
            to="/member_page/membercustomerservice"
            className={({ isActive }) =>
              isActive ? 'sidebar_btn  sidebar_btn_active' : 'sidebar_btn'
            }
          >
            幫助中心
          </NavLink> */}
        </div>
      </div>
    </>
  )
}

export default MeberPage_Sidebar
