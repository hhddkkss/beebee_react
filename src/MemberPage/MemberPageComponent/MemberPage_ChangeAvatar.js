import { useState, useContext, useEffect, useRef } from 'react'
import React from 'react'
import axios from 'axios'
import AuthContext from '../../Contexts/AuthContext'

function MemberPage_ChangeAvatar(props) {
  const { memberAuth } = useContext(AuthContext)
  const [getMemberPic, setGetMemberPic] = useState([])
  const uploadInput = useRef(null)
  const { avatarOpen } = props

  //上傳照片
  const handleUpload = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('avatar', e.target.files[0])

    if (memberAuth.token && memberAuth.authorized) {
      let response = await fetch(
        `http://localhost:3003/member_page/member_photo/${memberAuth.memberId}`,
        { method: 'POST', body: formData }
      )
      console.log('res:', response)
      if (response.status == 200) {
        window.location.reload()
      }
      // response = response.json()
      // console.log(response)
    }
  }

  //移除用戶本來的頭貼回預設值
  const handleRemove = async () => {
    await axios
      .get(
        `http://localhost:3003/member_page/member_photo_delete/${memberAuth.memberId}`
      )
      .then((res) => {
        console.log(('res:', res))
        if (res.data.changedRows > 0) {
          window.location.reload()
        }
      })
  }

  return (
    <>
      {/* <!-- 要顯示請加 "change_info_true" --> */}
      <div
        className={
          avatarOpen
            ? 'changeAvatar-info change_info_true'
            : 'changeAvatar-info'
        }
      >
        <p>管理大頭貼</p>
        <form className="changePassword_form">
          <div className="member_box">
            <button
              className="avatar_hover avatar_btn add_avatar"
              onClick={(e) => {
                e.preventDefault()
                uploadInput.current.click()
              }}
            >
              上傳照片
            </button>
            <input
              type="file"
              ref={uploadInput}
              className="d-none"
              onChange={(e) => {
                //上傳照片
                handleUpload(e)
              }}
            />
          </div>
          <div className="member_box">
            <button
              className="avatar_hover avatar_btn delete_avatar"
              onClick={(e) => {
                e.preventDefault()
                handleRemove()
              }}
            >
              移除目前頭像
            </button>
          </div>
          <div className="member_box">
            <button className="avatar_hover avatar_btn">
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
      </div>
    </>
  )
}

export default MemberPage_ChangeAvatar
