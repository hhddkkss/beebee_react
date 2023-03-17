import React from 'react'
import Navbar from '../../src/component/Navbar/index'
import '../styles/memberChat.css'
import '../styles/memberLevel.css'
import '../styles/memberPage_changePassword.css'
import '../styles/memberShoppingDetail.css'
import '../styles/memberPage.css'
import '../styles/couponDetail.css'
import '../styles/memberPagefornav.css'
import MeberPage_Sidebar from '../component/MemberPage/MeberPage_Sidebar'

function MemberPage() {
  return (
    <>
      <Navbar />
      <div className="member_body">
        <MeberPage_Sidebar />
        <div className="member_container">
          <div className="now_memberPage">會員基本資料</div>
          <div className="avatar_box member_mobile_show">
            <img
              src="https://teameowdev.files.wordpress.com/2016/04/avatar24-01.png"
              alt="memberAvatar"
              className="memberAvatar"
            ></img>
            <img
              src="https://cdn2.ettoday.net/images/1457/1457773.jpg"
              alt="memberAvatar"
              className="memberAvatar"
            ></img>
          </div>

          <form className="basic_infomation">
            <div className="member_box">
              <label for="member_name">姓名</label>
              <input type="text" name="member_name" value="王小民"></input>
            </div>
            <div className="member_box">
              <label for="member_gender">性別</label>
              <select name="member_gender">
                <option value="female">女</option>
                <option value="male" selected>
                  男
                </option>
              </select>
            </div>
            <div className="member_box">
              <label for="member_email">Email</label>
              <input type="text" name="member_email" value="email"></input>
            </div>
            <div className="city_dist">
              <div className="member_box">
                <label for="member_city">居住城市</label>
                <select name="member_city">
                  <option value="臺北市">臺北市</option>
                </select>
              </div>
              <div className="member_box">
                <label for="member_dist">鄉鎮區</label>
                <select name="member_dist">
                  <option value="大安區">大安區</option>
                </select>
              </div>
            </div>
            <div className="member_box">
              <label for="member_birthday">生日</label>
              <input
                type="date"
                name="member_birthday"
                value="1989-01-01"
              ></input>
            </div>
            <div className="member_box">
              <label for="member_address">詳細地址</label>
              <input
                type="text"
                name="member_address"
                value="大安路1號"
              ></input>
            </div>
            <div className="member_box">
              <label for="member_mobile">行動電話</label>
              <input
                type="text"
                name="member_mobile"
                value="0988123456"
              ></input>
            </div>

            <div className="member_box">
              <label for="member_mobile" className="member_mobile_hidden">
                密碼
              </label>
              <button className="memberPage_button edit_password_btn">
                修改密碼
              </button>
            </div>

            <div className="form_btn_group">
              <button className="btn memberPage_button basic_infomation_confirm">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_889_1190)">
                    <path
                      d="M16.166 8.02594V8.69236C16.1651 10.2544 15.6593 11.7743 14.724 13.0254C13.7887 14.2765 12.4741 15.1917 10.9762 15.6346C9.47824 16.0775 7.87728 16.0243 6.41204 15.483C4.94681 14.9416 3.69581 13.9412 2.84563 12.6308C1.99545 11.3204 1.59164 9.77026 1.69441 8.21161C1.79719 6.65296 2.40105 5.16929 3.41594 3.98188C4.43082 2.79446 5.80236 1.96692 7.32598 1.62268C8.84961 1.27844 10.4437 1.43593 11.8705 2.07168"
                      stroke="#233A66"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M16.1667 2.89745L8.92309 10.1483L6.75 7.97523"
                      stroke="#233A66"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
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
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                取消修改
              </button>
            </div>
          </form>

          <div className="auth_container">
            <div className="now_memberPage member_mobile_hidden">
              Authenticate details
            </div>
            <button
              onclick="authClick(event)"
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
                <g clip-path="url(#clip0_889_1190)">
                  <path
                    d="M16.166 8.02594V8.69236C16.1651 10.2544 15.6593 11.7743 14.724 13.0254C13.7887 14.2765 12.4741 15.1917 10.9762 15.6346C9.47824 16.0775 7.87728 16.0243 6.41204 15.483C4.94681 14.9416 3.69581 13.9412 2.84563 12.6308C1.99545 11.3204 1.59164 9.77026 1.69441 8.21161C1.79719 6.65296 2.40105 5.16929 3.41594 3.98188C4.43082 2.79446 5.80236 1.96692 7.32598 1.62268C8.84961 1.27844 10.4437 1.43593 11.8705 2.07168"
                    stroke="#233A66"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16.1667 2.89745L8.92309 10.1483L6.75 7.97523"
                    stroke="#233A66"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
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
                <g clip-path="url(#clip0_889_1190)">
                  <path
                    d="M16.166 8.02594V8.69236C16.1651 10.2544 15.6593 11.7743 14.724 13.0254C13.7887 14.2765 12.4741 15.1917 10.9762 15.6346C9.47824 16.0775 7.87728 16.0243 6.41204 15.483C4.94681 14.9416 3.69581 13.9412 2.84563 12.6308C1.99545 11.3204 1.59164 9.77026 1.69441 8.21161C1.79719 6.65296 2.40105 5.16929 3.41594 3.98188C4.43082 2.79446 5.80236 1.96692 7.32598 1.62268C8.84961 1.27844 10.4437 1.43593 11.8705 2.07168"
                    stroke="#233A66"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16.1667 2.89745L8.92309 10.1483L6.75 7.97523"
                    stroke="#233A66"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
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
                <g clip-path="url(#clip0_889_1372)">
                  <path
                    d="M7.83829 3.56545L1.70293 13.8079C1.57644 14.027 1.5095 14.2754 1.50879 14.5283C1.50809 14.7813 1.57363 15.03 1.69889 15.2498C1.82416 15.4696 2.00479 15.6527 2.22281 15.781C2.44083 15.9093 2.68865 15.9783 2.94159 15.981H15.2123C15.4653 15.9783 15.7131 15.9093 15.9311 15.781C16.1491 15.6527 16.3297 15.4696 16.455 15.2498C16.5803 15.03 16.6458 14.7813 16.6451 14.5283C16.6444 14.2754 16.5775 14.027 16.451 13.8079L10.3156 3.56545C10.1865 3.35257 10.0047 3.17656 9.78769 3.0544C9.57073 2.93225 9.32594 2.86808 9.07695 2.86808C8.82796 2.86808 8.58317 2.93225 8.36621 3.0544C8.14924 3.17656 7.96742 3.35257 7.83829 3.56545V3.56545Z"
                    stroke="#F4F4F4"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.07715 7.28868V10.1861"
                    stroke="#F4F4F4"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.07715 12.3592V12.7214"
                    stroke="#F4F4F4"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
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
                <g clip-path="url(#clip0_889_1372)">
                  <path
                    d="M7.83829 3.56545L1.70293 13.8079C1.57644 14.027 1.5095 14.2754 1.50879 14.5283C1.50809 14.7813 1.57363 15.03 1.69889 15.2498C1.82416 15.4696 2.00479 15.6527 2.22281 15.781C2.44083 15.9093 2.68865 15.9783 2.94159 15.981H15.2123C15.4653 15.9783 15.7131 15.9093 15.9311 15.781C16.1491 15.6527 16.3297 15.4696 16.455 15.2498C16.5803 15.03 16.6458 14.7813 16.6451 14.5283C16.6444 14.2754 16.5775 14.027 16.451 13.8079L10.3156 3.56545C10.1865 3.35257 10.0047 3.17656 9.78769 3.0544C9.57073 2.93225 9.32594 2.86808 9.07695 2.86808C8.82796 2.86808 8.58317 2.93225 8.36621 3.0544C8.14924 3.17656 7.96742 3.35257 7.83829 3.56545V3.56545Z"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.07715 7.28868V10.1861"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.07715 12.3592V12.7214"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
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
          </div>
        </div>
      </div>
    </>
  )
}

export default MemberPage
