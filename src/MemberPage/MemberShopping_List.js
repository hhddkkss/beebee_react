import React from 'react'
import Navbar from '../component/Navbar/index'
import MeberPage_Sidebar from '../component/MemberPage/MeberPage_Sidebar'

function MemberShopping_List() {
  return (
    <>
      <Navbar />
      <div class="member_body">
        <MeberPage_Sidebar />

        <div class="member_container">
          <div class="now_memberPage">購買清單</div>
          <table class="member_shoppingList member_List member_mobile_hidden">
            <thead>
              <tr>
                <th>訂單編號</th>
                <th>訂單日期</th>
                <th>付款狀態</th>
                <th>處理狀態</th>
                <th>總計</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#2705</td>
                <td>2023.01.05</td>
                <td>未付款</td>
                <td>訂單配送中</td>
                <td>TWD 9998</td>
                <td>
                  <button class="memberPage_button view_more_btn">
                    VEIW MORE
                  </button>
                </td>
              </tr>
              <tr>
                <td>#1845</td>
                <td>2023.12.25</td>
                <td>已付款</td>
                <td>已完成</td>
                <td>TWD 4498</td>
                <td>
                  <button class="memberPage_button view_more_btn">
                    VEIW MORE
                  </button>
                </td>
              </tr>
            </tbody>
          </table>

          {/* <!-- 手機板 --> */}
          <table class="member_mobile_show mobile_member_List">
            <tbody>
              <tr>
                <td>訂單編號:</td>
                <td>#2705</td>
              </tr>
              <tr>
                <td>付款狀態:</td>
                <td>未付款</td>
              </tr>
              <tr>
                <td>處理狀態:</td>
                <td>已完成</td>
              </tr>
              <tr>
                <td>
                  <img
                    src="https://cc.tvbs.com.tw/img/program/upload/2022/03/11/20220311122136-f7fb9feb.jpg"
                    alt=""
                  ></img>
                </td>
                <td>iphone 12</td>
              </tr>
              <tr>
                <td>總計:</td>
                <td>TWD 34498</td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <button class="memberPage_button view_more_btn">
                    VEIW MORE
                  </button>
                </td>
              </tr>
            </tbody>

            <tbody>
              <tr>
                <td>訂單編號:</td>
                <td>#2705</td>
              </tr>
              <tr>
                <td>付款狀態:</td>
                <td>未付款</td>
              </tr>
              <tr>
                <td>處理狀態:</td>
                <td>已完成</td>
              </tr>
              <tr>
                <td>
                  <img
                    src="https://cc.tvbs.com.tw/img/program/upload/2022/03/11/20220311122136-f7fb9feb.jpg"
                    alt=""
                  ></img>
                </td>
                <td>iphone 12 pro max</td>
              </tr>
              <tr>
                <td>總計:</td>
                <td>TWD 34498</td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <button class="memberPage_button view_more_btn">
                    VEIW MORE
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default MemberShopping_List
