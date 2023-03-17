import React from 'react'
import '../../styles/memberPagefornav.css'

function MeberPage_Sidebar() {
  return (
    <>
      <div class="member_body">
        <div class="member_sidebar member_mobile_hidden">
          <div class="member_card">
            <div class="mamber_avatar_circle">
              <img
                src="./olee.jpg"
                alt="memberAvatar"
                class="memberAvatar"
              ></img>
              <div class="logo_edit">
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_874_353)">
                    <path
                      d="M7.79199 2.83331H2.83366C2.45794 2.83331 2.0976 2.98257 1.83192 3.24824C1.56625 3.51392 1.41699 3.87426 1.41699 4.24998V14.1666C1.41699 14.5424 1.56625 14.9027 1.83192 15.1684C2.0976 15.4341 2.45794 15.5833 2.83366 15.5833H12.7503C13.126 15.5833 13.4864 15.4341 13.7521 15.1684C14.0177 14.9027 14.167 14.5424 14.167 14.1666V9.20831"
                      stroke="#FDF3EA"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M13.1045 1.77085C13.3863 1.48906 13.7685 1.33075 14.167 1.33075C14.5655 1.33075 14.9477 1.48906 15.2295 1.77085C15.5113 2.05264 15.6696 2.43484 15.6696 2.83335C15.6696 3.23187 15.5113 3.61406 15.2295 3.89585L8.50033 10.625L5.66699 11.3334L6.37533 8.50002L13.1045 1.77085Z"
                      stroke="#FDF3EA"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_874_353">
                      <rect width="17" height="17" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>

            <div class="member_account">beebee01@test.com</div>
            <div class="member_name">Beebee</div>
          </div>

          <div class="sidebar_list">
            <button
              class="sidebar_btn btn sidebar_btn_active"
              onclick="location.href='./meberPage_basicInformation.html"
            >
              會員基本資料
            </button>
            <button
              class="sidebar_btn btn"
              onclick="location.href='./meberPage_shoppingList.html"
            >
              購買清單
            </button>
            <button class="sidebar_btn btn">文章管理</button>
            <button
              class="sidebar_btn btn"
              onclick="location.href='./meberPage_couponList.html"
            >
              優惠券
            </button>
            <button class="sidebar_btn btn">收藏好物</button>
            <button
              class="sidebar_btn btn"
              onclick="location.href='./meberPage_commentList.html"
            >
              歷史評價
            </button>
            <button
              class="sidebar_btn btn"
              onclick="location.href='./meberPage_level.html'"
            >
              比比里程碑
            </button>
            <button
              class="sidebar_btn btn"
              onclick="location.href='./meberPage_CustomerService.html"
            >
              幫助中心
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default MeberPage_Sidebar
