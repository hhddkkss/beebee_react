import { useEffect, useState, useContext, Fragment, React } from 'react'
import Navbar from '../component/Navbar/index'
import MeberPage_Sidebar from './MemberPageComponent/MeberPage_Sidebar'
import axios from 'axios'
import AuthContext from '../Contexts/AuthContext'
import dayjs from 'dayjs'
import MemberNav2 from './MemberPageComponent/MemberNav2'
import MemberNavsec from './MemberPageComponent/MemberNavsec'

function MemberCoupon_List() {
  const { setNavbarType } = useContext(AuthContext)
  const { memberAuth } = useContext(AuthContext)
  const [coupon, setCoupon] = useState([])
  // const [memberCoupon, setMemberCoupon] = useState([])

  const getCouponData = async () => {
    const couponData = await axios
      .get(`http://localhost:3003/member_page/getcoupon/${memberAuth.memberId}`)
      .then((response) => {
        console.log(response.data)
        setCoupon(response.data)
      })
  }

  // const getCouponMemberData = async () => {
  //   const couponMemberData = await axios
  //     .get(`http://localhost:3003/member_page/getmembercoupon/${memberAuth.memberId}`)
  //     .then((response) => {
  //       console.log(response.data[0],1111)
  //       setMemberCoupon(response.data[0])
  //     })
  // }
  // const memberCouponArray = [...memberCoupon,];

  useEffect(() => {
    getCouponData()
    setNavbarType('light')
  }, [])
  // const str = '1,4,5' // 1 4 5

  return (
    <>
      {/* {console.log(memberCouponArray, 77777)} */}
      <Navbar />
      <MemberNavsec/>
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

            {coupon.map((v, i) => {
              console.log(v)
              return (
                <Fragment key={v.id}>
                  <tbody>
                    <tr>
                      <td>{v.code}</td>
                      <td>{dayjs(v.end_time).format('YYYY-MM-DD')}</td>
                      <td>{v.coupon_name}</td>
                      <td>{v.discount}</td>

                      <td>
                        <button
                          className="memberPage_button view_more_btn"
                          onClick={() => navigator.clipboard.writeText(v.code)}
                        >
                          複製優惠碼
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </Fragment>
              )
            })}

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
            {coupon.map((v, i) => {
              return (
                <Fragment key={v.id}>
                  <tbody>
                    <tr>
                      <td className="coupon_code">{v.code}</td>
                      <td>{v.discount}</td>
                    </tr>
                    <tr>
                      <td>優惠卷名稱</td>
                      <td>{v.coupon_name}</td>
                    </tr>
                    <tr>
                      <td>有效日期:</td>
                      <td>{dayjs(v.end_time).format('YYYY-MM-DD')}</td>
                    </tr>

                    <tr>
                      <td></td>
                      <td>
                        <button
                          className="memberPage_button view_more_btn"
                          onClick={() => navigator.clipboard.writeText(v.code)}
                          // }}
                        >
                          複製優惠碼
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </Fragment>
              )
            })}
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
      <MemberNav2 />
    </>
  )
}

export default MemberCoupon_List
