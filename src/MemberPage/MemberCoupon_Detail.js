import React from 'react'
import Navbar from '../component/Navbar/index'
import MeberPage_Sidebar from '../component/MemberPage/MeberPage_Sidebar'

function MemberCoupon_Detail() {
  return (
    <>
      <Navbar />
      <div class="member_body">
        <MeberPage_Sidebar />

        <div class="member_container">
          <div class="now_memberPage">優惠券</div>

          <div class="detailArea">
            <div class="coupon_box">
              <table class="coupon_box_detail">
                <thead>
                  <tr>
                    <th>優惠券編號</th>
                    <th>開始日期</th>
                    <th>有效日期</th>
                    <th>使用狀態</th>
                    <th>折扣內容</th>
                    <th>使用資格</th>
                    <th>付款方式</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>beefriend</td>
                    <td>2022.10.01 00:00</td>
                    <td>2023.01.10 23:59</td>
                    <td>已使用</td>
                    <td>運費抵用券 | 新會員限時全站免運</td>
                    <td>新會員</td>
                    <td>適用於所有付款方式</td>
                    <td class="coupon_legle">
                      <pre>
                        優惠內容請參照頁面詳情，活動頁面之折扣標註僅供參考，下單前請務必確認方案優惠與結帳金額，相關退改規則將依照各商品頁面詳情為準。
                        BEEbeE
                        可能會不定時舉辦行銷和促銷活動，提供優惠碼、折扣以及可在平台上使用的促銷優惠活動（統稱為「優惠券」）。優惠券具有有效期和兌換期，
                        在某些情況下，只能使用一次。 BEEbeE
                        為鼓勵消費者使用平台，可能會不定時發放新客或首購優惠碼，一組已驗證帳號僅限使用一次，不得多次使用，請勿以不正方法使用超過一次
                        或違反使用規則。
                        優惠券不可與其他促銷活動、折扣或其他代金券一起使用。優惠券可能須遵守其他條款與條件。
                        除另有說明外，優惠券只能在BEEbeE平台上使用。
                        優惠券不能兌換成現金。 BEEbeE
                        保留取消、停止或拒收任何優惠券的權利，恕不另行通知。
                        本條款為優惠券一般使用原則，惟實際發行的優惠券使用方法如有與本條款不同處，以實際公布者為準。
                      </pre>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="form_btn_group">
            <button class="btn basic_infomation_cancle memberPage_button">
              返回
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default MemberCoupon_Detail
