import React from 'react'
import Navbar from '../component/Navbar/index'
import MeberPage_Sidebar from '../component/MemberPage/MeberPage_Sidebar'

function MemberCoupon_List() {
  return (
    <>
      <Navbar />
      <div class="member_body">
        <MeberPage_Sidebar />

        <div class="member_container">
          <div class="now_memberPage">優惠券</div>
          <table class="member_List member_mobile_hidden">
            <thead>
              <tr>
                <th>優惠券編號</th>
                <th>有效日期</th>
                <th>使用狀態</th>
                <th>折扣</th>

                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>beebee001</td>
                <td>2023.02.05</td>
                <td>未使用</td>
                <td>100元抵用券</td>

                <td>
                  <button class="memberPage_button view_more_btn">
                    VEIW MORE
                  </button>
                </td>
              </tr>
              <tr>
                <td>beefriend</td>
                <td>2023.12.03</td>
                <td>已使用</td>
                <td>運費抵用券</td>
                <td>
                  <button class="memberPage_button view_more_btn">
                    VEIW MORE
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          {/* 
            <!-- 手機板 --> */}
          <table class="member_mobile_show mobile_member_List coupon">
            <tbody>
              <tr>
                <td class="coupon_code">Bee01</td>
                <td>一百元抵用券</td>
              </tr>
              <tr>
                <td>使用狀態:</td>
                <td>未使用</td>
              </tr>
              <tr>
                <td>有效日期:</td>
                <td>2023.02.05</td>
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
                <td class="coupon_code">beefriend</td>
                <td>運費抵用券</td>
              </tr>
              <tr>
                <td>使用狀態:</td>
                <td>已使用</td>
              </tr>
              <tr>
                <td>有效日期:</td>
                <td>2023.12.03</td>
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

export default MemberCoupon_List
