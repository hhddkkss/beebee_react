import React, { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../component/Navbar/index'
import MeberPage_Sidebar from './MemberPageComponent/MeberPage_Sidebar'
import {
  GET_PURCHASE_RECORDS,
  GET_PURCHASE_DETAIL,
} from '../component/LoginApi'
import axios from 'axios'
import AuthContext from '../Contexts/AuthContext'
import dayjs from 'dayjs'
import ProductFunctionContext from '../Contexts/ProductFunctionContext'

function MemberShopping_List() {
  //navigate and context

  const navigation = useNavigate()
  const { memberAuth } = useContext(AuthContext)
  const { purChaseDetail, setPurChaseDetail } = useContext(
    ProductFunctionContext
  )

  //useState
  const [purchaseHistory, setPurchaseHistory] = useState([])

  //購買紀錄
  const getPurchaseHistory = async () => {
    const memberId = memberAuth.authorized && memberAuth.memberId
    const res = await axios.get(`${GET_PURCHASE_RECORDS}${memberId}`)
    console.log(res.data, 'history')
    setPurchaseHistory(res.data)
  }
  //購買的訂單明細
  const getPurchaseDetail = async (order_id) => {
    const member_id = memberAuth.authorized && memberAuth.memberId
    // console.log(order_id)

    const res = await axios.get(
      GET_PURCHASE_DETAIL + member_id + '/' + order_id
    )
    console.log(res.data, 'detail')
    setPurChaseDetail(res.data)
  }

  useEffect(() => {
    getPurchaseHistory()
  }, [])

  return (
    <>
      <Navbar />
      <div className="member_body">
        <MeberPage_Sidebar />

        <div className="member_container">
          <div className="now_memberPage">購買清單</div>
          <table className="member_shoppingList member_List member_mobile_hidden">
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
              {purchaseHistory.map((v) => {
                return (
                  <tr key={v.order_id}>
                    <td>#{v.order_id}</td>
                    <td>{dayjs(v.order_day).format('YYYY/MM/DD')}</td>
                    <td>{v.order_status}</td>
                    <td>{v.order_logistics_name}</td>
                    <td>TWD {parseInt(v.order_money).toLocaleString()}</td>
                    <td>
                      <button
                        className="memberPage_button view_more_btn"
                        onClick={() => {
                          getPurchaseDetail(v.order_id)
                          setTimeout(() => {
                            navigation('/member_page/shoppinglistdetail')
                          }, 300)
                        }}
                      >
                        查看更多
                      </button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>

          {/* <!-- 手機板 --> */}
          <table className="member_mobile_show mobile_member_List">
            {purchaseHistory.map((v, i) => {
              return (
                <tbody key={v.order_id}>
                  <tr>
                    <td>訂單編號:</td>
                    <td>#{v.order_id}</td>
                  </tr>
                  <tr>
                    <td>付款狀態:</td>
                    <td>{v.order_status}</td>
                  </tr>
                  <tr>
                    <td>處理狀態:</td>
                    <td>{v.order_logistics_name}</td>
                  </tr>
                  {/* <tr>
                    <td>
                      <img
                        src="https://cc.tvbs.com.tw/img/program/upload/2022/03/11/20220311122136-f7fb9feb.jpg"
                        alt=""
                      ></img>
                    </td>
                    <td>iphone 12</td>
                  </tr> */}
                  <tr>
                    <td>總計:</td>
                    <td>TWD {parseInt(v.order_money).toLocaleString()}</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>
                      <button
                        className="memberPage_button view_more_btn"
                        onClick={() => {
                          getPurchaseDetail(v.order_id)
                          setTimeout(() => {
                            navigation('/member_page/shoppinglistdetail')
                          }, 300)
                        }}
                      >
                       查看更多
                      </button>
                    </td>
                  </tr>
                </tbody>
              )
            })}

            {/* 
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
                  <button
                    className="memberPage_button view_more_btn"
                    onClick={() => {
                      navigation('/member_page/shoppinglistdetail')
                    }}
                  >
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

export default MemberShopping_List
