import React from 'react'
import '../../styles/memberPage_changePassword'

function MemberPage_ChangeAvatar() {
  return (
    <div class="member_body">
      {/* <!-- 要顯示請加 "change_info_true" --> */}
      <div class="changeAvatar-info change_info_true">
        <p>管理大頭貼</p>
        <form class="changePassword_form">
          <div class="member_box">
            <button class="avatar_hover avatar_btn add_avatar">上傳照片</button>
          </div>
          <div class="member_box">
            <button class="avatar_hover avatar_btn delete_avatar">
              移除目前頭像
            </button>
          </div>
          <div class="member_box">
            <button class="avatar_hover avatar_btn">
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
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
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
