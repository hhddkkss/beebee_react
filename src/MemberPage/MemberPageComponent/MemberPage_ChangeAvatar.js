import { useState, useContext, useEffect } from 'react'
import React from 'react'
import axios from 'axios'
import AuthContext from '../../Contexts/AuthContext'

function MemberPage_ChangeAvatar() {
  const { memberAuth } = useContext(AuthContext)
  const [getMemberPic, setGetMemberPic] = useState(null)

  const getPicData = async () => {
    const getMemberPic = await axios
    // const formData = new FormData()
    // formData
    //   .append('image', 'uploads')
      .post(
        `http://localhost:3003/member_page/member_photo/${memberAuth.memberId}`
      )
      .then((response) => {
        console.log(response.data, 66666)
        setGetMemberPic(response.data)
      })
    //   const handleFileChange = (event) => {
    //     setGetMemberPic(event.target.files[0]);
    //   };//選擇單個
  }

  useEffect(() => {
    getPicData()
  }, [])

  return (
    <div className="member_body">
      {/* <!-- 要顯示請加 "change_info_true" --> */}
      <div className="changeAvatar-info change_info_true">
        <p>管理大頭貼</p>
        <form className="changePassword_form">
          <div className="member_box">
            <button className="avatar_hover avatar_btn add_avatar">
              上傳照片
            </button>
          </div>
          <div className="member_box">
            <button className="avatar_hover avatar_btn delete_avatar">
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
    </div>
  )
}

export default MemberPage_ChangeAvatar
