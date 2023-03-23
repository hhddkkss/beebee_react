import { useEffect, useState, useContext, Fragment, React } from 'react'
import Navbar from '../component/Navbar/index'
import MeberPage_Sidebar from './MemberPageComponent/MeberPage_Sidebar'
import axios from 'axios'
import AuthContext from '../Contexts/AuthContext'

function MemberCoupon_List() {
  const { memberAuth } = useContext(AuthContext)
  const [coupon, setCoupon] = useState([])

  const getCouponData = async () => {
    const couponData = await axios
      .get(`http://localhost:3003/member_page/getcoupon/${memberAuth.memberId}`)
      .then((response) => {
        console.log(response.data[0])
        setCoupon(response.data[0])
      })
  }

  useEffect(() => {
    getCouponData()
  }, [])

  return (
    <>
      <Navbar />
      <div className="member_body">
        <MeberPage_Sidebar />

        <div className="member_container">
          <div className="now_memberPage">優惠券</div>
          <table className="member_List member_mobile_hidden">
            <thead>
              <tr>
                <th>優惠券編號</th>
                <th>有效日期</th>
                <th>優惠卷名稱</th>
                <th>折扣金額</th>

                <th></th>
              </tr>
            </thead>

            {/* {coupon.map((v, i) => {
         return ( */}
            <Fragment key={coupon.id}>
              <tbody>
                <tr>
                  <td>{coupon.code}</td>
                  <td>{coupon.end_time}</td>
                  <td>{coupon.coupon_name}</td>
                  <td>{coupon.discount}</td>

                  <td>
                    <button
                      className="memberPage_button view_more_btn"
                      onClick={() => navigator.clipboard.writeText(coupon.code)}
                    >
                      複製優惠碼
                    </button>
                  </td>
                </tr>
              </tbody>
            </Fragment>
            {/* )
          })}
         */}
            {/* <tr>
                <td>beefriend</td>
                <td>2023.12.03</td>
                <td>已使用</td>
                <td>運費抵用券</td>
                <td>
                  <button className="memberPage_button view_more_btn">
                    VEIW MORE
                  </button>
                </td>
              </tr> */}
          </table>
          {/* 
            <!-- 手機板 --> */}
          <table className="member_mobile_show mobile_member_List coupon">
            <tbody>
              <tr>
                <td className="coupon_code">{coupon.code}</td>
                <td>{coupon.discount}</td>
              </tr>
              <tr>
                <td>優惠卷名稱</td>
                <td>{coupon.coupon_name}</td>
              </tr>
              <tr>
                <td>有效日期:</td>
                <td>{coupon.end_time}</td>
              </tr>

              <tr>
                <td></td>
                <td>
                  <button
                    className="memberPage_button view_more_btn"
                    onClick={() => navigator.clipboard.writeText(coupon.code)}
                    // }}
                  >
                    複製優惠碼
                  </button>
                </td>
              </tr>
            </tbody>

            {/* <tbody>
              <tr>
                <td className="coupon_code">beefriend</td>
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
                  <button className="memberPage_button view_more_btn">
                    VEIW MORE
                  </button>
                </td>
              </tr>
            </tbody> */}
          </table>
        </div>
      </div>
    </>
  )
}

export default MemberCoupon_List
