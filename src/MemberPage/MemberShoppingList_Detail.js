import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../component/Navbar/index'
import ProductFunctionContext from '../Contexts/ProductFunctionContext'
import MeberPage_Sidebar from './MemberPageComponent/MeberPage_Sidebar'

function MemberShoppingList_Detail() {
  const { purChaseDetail } = useContext(ProductFunctionContext)
  const navigation = useNavigate()

  const fee = 120

  const [orderStatus, setOrderStatus] = useState(purChaseDetail[0].order_state)

  //算出總價
  const totalPrice = purChaseDetail
    .map((v) => (v.product_price - 1000) * v.product_amount)
    .reduce((a, c) => a + c, 0)

  //付款方法
  const paymentTostring = (payment) => {
    if (payment == 1) {
      return '信用卡付款'
    }
    if (payment == 2) {
      return '貨到付款'
    }
    if (payment == 3) {
      return 'LinePay'
    }
  }

  const payment_method = paymentTostring(purChaseDetail[0].payment_method)

  //確認訂單
  //預設0
  const receive = purChaseDetail[0].receive_done
  //4
  const order_logistics = purChaseDetail[0].order_logistics_id

  return (
    <>
      <Navbar />
      <div className="member_body">
        <MeberPage_Sidebar />

        <div className="member_container">
          <div className="now_memberPage">訂單明細</div>
          <div className="member_shoppingList_detail_date member_mobile_hidden">
            #{purChaseDetail[0].order_id}
          </div>
          <div className="member_shoppingList_detail_peocess ">
            <div
              className={orderStatus == 1 ? 'stepBox active' : 'stepBox done'}
            >
              <div className="stepIcon ">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.10742 1.71725C2.10742 1.16497 2.55514 0.717255 3.10742 0.717255H22.2522C22.8044 0.717255 23.2522 1.16497 23.2522 1.71725V23.7732C23.2522 24.1637 23.0248 24.5186 22.67 24.6817C22.3151 24.8449 21.8978 24.7866 21.6013 24.5324L19.9252 23.0954L18.2491 24.5324C17.8745 24.8535 17.3218 24.8535 16.9473 24.5324L15.2569 23.0831L13.4726 24.5464C13.1039 24.8488 12.573 24.8488 12.2043 24.5464L10.4057 23.0714L8.60704 24.5464C8.24439 24.8438 7.72378 24.8492 7.35503 24.5594L5.462 23.0717L3.7583 24.5324C3.4618 24.7866 3.04444 24.8449 2.68962 24.6817C2.33479 24.5186 2.10742 24.1637 2.10742 23.7732V1.71725ZM4.10742 2.71725V21.5986L4.78353 21.019C5.14582 20.7084 5.6771 20.6971 6.05231 20.9919L7.95961 22.4909L9.77158 21.0049C10.1403 20.7026 10.6711 20.7026 11.0398 21.0049L12.8384 22.4799L14.6371 21.0049C15.0121 20.6974 15.5538 20.7033 15.9221 21.019L17.5982 22.456L19.2743 21.019C19.6488 20.6979 20.2015 20.6979 20.576 21.019L21.2522 21.5986V2.71725H4.10742ZM5.70365 15.0173C5.70365 14.465 6.15137 14.0173 6.70365 14.0173H18.8674C19.4197 14.0173 19.8674 14.465 19.8674 15.0173C19.8674 15.5696 19.4197 16.0173 18.8674 16.0173H6.70365C6.15137 16.0173 5.70365 15.5696 5.70365 15.0173ZM6.70365 7.47815C6.15137 7.47815 5.70365 7.92587 5.70365 8.47815C5.70365 9.03044 6.15137 9.47815 6.70365 9.47815H18.8674C19.4197 9.47815 19.8674 9.03044 19.8674 8.47815C19.8674 7.92587 19.4197 7.47815 18.8674 7.47815H6.70365Z"
                    fill="#F4F4F4"
                  />
                </svg>
              </div>
              <div className="stepName">備貨中</div>
              <div className="line"></div>
            </div>

            <div
              className={orderStatus == 2 ? 'stepBox active' : 'stepBox done'}
            >
              <div className="stepIcon ">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.6797 4.74524H5.67969C4.57512 4.74524 3.67969 5.64067 3.67969 6.74524V20.7452C3.67969 21.8498 4.57512 22.7452 5.67969 22.7452H19.6797C20.7843 22.7452 21.6797 21.8498 21.6797 20.7452V6.74524C21.6797 5.64067 20.7843 4.74524 19.6797 4.74524Z"
                    stroke="#F4F4F4"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16.6797 2.74524V6.74524"
                    stroke="#F4F4F4"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.67969 2.74524V6.74524"
                    stroke="#F4F4F4"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3.67969 10.7452H21.6797"
                    stroke="#F4F4F4"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="stepName">待出貨</div>
              <div className="line"></div>
            </div>

            <div
              className={orderStatus == 3 ? 'stepBox active' : 'stepBox done'}
            >
              <div className="stepIcon ">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.583984 5.20047C0.583984 4.64819 1.0317 4.20047 1.58398 4.20047H16.5488C17.101 4.20047 17.5488 4.64819 17.5488 5.20047V7.83903H23.7747C24.327 7.83903 24.7747 8.28674 24.7747 8.83903V13.9936V19.502C24.7747 20.0543 24.327 20.502 23.7747 20.502H18.7796C18.2179 21.57 17.1579 22.29 15.9427 22.29C14.1656 22.29 12.7203 20.7502 12.6802 18.8343L9.27757 18.8343C9.23745 20.7502 7.79214 22.29 6.01508 22.29C4.23802 22.29 2.79272 20.7502 2.75259 18.8343L1.58398 18.8343C1.0317 18.8343 0.583984 18.3866 0.583984 17.8343V5.20047ZM13.2002 16.8343C13.7141 15.9729 14.5639 15.369 15.5488 15.2405V13.9936V8.83903V6.20047H2.58398V16.8343L3.27267 16.8343C3.85387 15.8599 4.865 15.215 6.01508 15.215C7.16516 15.215 8.17629 15.8599 8.75749 16.8343H9.06637L13.2002 16.8343ZM17.5488 15.6724C18.4752 16.2413 19.1195 17.2871 19.1979 18.502H22.7747V14.9936H17.5488V15.6724ZM17.5488 12.9936H22.7747V9.83903H17.5488V12.9936ZM6.01508 20.29C6.56397 20.29 7.27843 19.7566 7.27843 18.7525C7.27843 17.7484 6.56397 17.215 6.01508 17.215C5.46619 17.215 4.75173 17.7484 4.75173 18.7525C4.75173 19.7566 5.46619 20.29 6.01508 20.29ZM17.206 18.7525C17.206 19.7566 16.4916 20.29 15.9427 20.29C15.3938 20.29 14.6793 19.7566 14.6793 18.7525C14.6793 17.7484 15.3938 17.215 15.9427 17.215C16.4915 17.215 17.206 17.7484 17.206 18.7525Z"
                    fill="#F4F4F4"
                  />
                </svg>
              </div>
              <div className="stepName ">出貨中</div>
              <div className="line"></div>
            </div>
            <div
              className={orderStatus == 4 ? 'stepBox active' : 'stepBox done'}
            >
              <div className="stepIcon ">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_889_1190)">
                    <path
                      d="M16.166 8.02594V8.69236C16.1651 10.2544 15.6593 11.7743 14.724 13.0254C13.7887 14.2765 12.4741 15.1917 10.9762 15.6346C9.47824 16.0775 7.87728 16.0243 6.41204 15.483C4.94681 14.9416 3.69581 13.9412 2.84563 12.6308C1.99545 11.3204 1.59164 9.77026 1.69441 8.21161C1.79719 6.65296 2.40105 5.16929 3.41594 3.98188C4.43082 2.79446 5.80236 1.96692 7.32598 1.62268C8.84961 1.27844 10.4437 1.43593 11.8705 2.07168"
                      stroke="#F4F4F4"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16.1667 2.89745L8.92309 10.1483L6.75 7.97523"
                      stroke="#F4F4F4"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_889_1190">
                      <rect
                        width="17.3847"
                        height="17.3847"
                        fill="#F4F4F4"
                        transform="translate(0.230469)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="stepName">訂單已完成</div>
            </div>
          </div>
          <div className="detailArea member_mobile_hidden">
            <table className="member_shoppingList_detail member_mobile_hidden">
              <thead>
                <tr>
                  <th>商品</th>
                  <th></th>
                  <th>商品價格</th>
                  <th>購買數量</th>
                  <th>總計</th>
                </tr>
              </thead>
              <tbody>
                {purChaseDetail.map((v, i) => {
                  return (
                    <tr key={i}>
                      <td>
                        <img
                          src={`/images/${v.product_pic.split(',')[0]}`}
                          alt=""
                        ></img>
                      </td>
                      <td>{v.product_name}</td>
                      <td>
                        {parseInt(v.product_price - 1000).toLocaleString()}
                      </td>
                      <td>{v.product_amount}</td>
                      <td>
                        {parseInt(
                          (v.product_price - 1000) * v.product_amount
                        ).toLocaleString()}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>

            <div className="formBottom">
              <div className="formBottom_row">
                <div className="formBottom_discription">小計</div>
                <div className="formBottom_value">
                  {' '}
                  {parseInt(totalPrice).toLocaleString()} TW
                </div>
              </div>
              <div className="formBottom_row">
                <div className="formBottom_discription">運費</div>
                <div className="formBottom_value">{fee} TW</div>
              </div>
              <div className="formBottom_row">
                <div className="formBottom_discription">折扣</div>
                <div className="coupon_code">
                  {purChaseDetail[0].coupon_name}
                </div>
                <div className="formBottom_value">
                  - {parseInt(purChaseDetail[0].discount).toLocaleString()} TW
                </div>
              </div>
              <div className="formBottom_row">
                <div className="formBottom_discription">訂單總額</div>
                <div className="formBottom_value">
                  {parseInt(purChaseDetail[0].order_money).toLocaleString()} TW
                </div>
              </div>
            </div>

            <div className="payment_shipping_box">
              {/* <table className="member_bill_detail">
                <thead>
                  <tr>
                    <th>帳單地址</th>
                    <th>付款方式</th>
                    <th>付款狀態</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div>{purChaseDetail[0].order_recipient}</div>
                      <div>{purChaseDetail[0].order_address_city}</div>
                      <div>{purChaseDetail[0].order_address_dist}</div>
                      <div>{purChaseDetail[0].order_address}</div>
                    </td>
                  </tr>
                </tbody>
              </table> */}
              <table className="member_shipping_detail">
                <thead>
                  <tr>
                    <th>運送地址</th>

                    <th>運送狀態</th>
                    <th>付款方式</th>
                    <th>付款狀態</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      {/* <div>{purChaseDetail[0].order_recipient}</div> */}
                      <div>{purChaseDetail[0].order_address_city}</div>
                      <div>{purChaseDetail[0].order_address_dist}</div>
                      <div>{purChaseDetail[0].order_address}</div>
                    </td>
                    <td>{purChaseDetail[0].order_logistics_name}</td>
                    <td>{payment_method}</td>
                    <td>{purChaseDetail[0].order_status}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="form_btn_group member_mobile_hidden">
            {/* <button class="btn basic_infomation_confirm memberPage_button">
              聯繫課服
            </button> */}
            <button class="btn basic_infomation_cancle memberPage_button"></button>
            <div className="form_btn_group member_mobile_hidden">
              {receive == 0 && order_logistics == 4 ? (
                <button className="btn basic_receive_done memberPage_button">
                  完成訂單
                </button>
              ) : (
                ''
              )}

              <button
                className="btn basic_infomation_cancle memberPage_button"
                onClick={() => {
                  navigation(-1)
                }}
              >
                返回
              </button>
            </div>

            {/* <!-- 手機 --> */}

            <table className="member_mobile_show mobile_member_List ">
              <tbody>
                <tr>
                  <td>訂單編號:</td>
                  <td> #{purChaseDetail[0].order_id}</td>
                </tr>
                <tr>
                  <td>付款狀態:</td>
                  <td>{purChaseDetail[0].order_status}</td>
                </tr>
                <tr>
                  <td>處理狀態:</td>
                  <td>{purChaseDetail[0].order_logistics_name}</td>
                </tr>
                {purChaseDetail.map((v, i) => {
                  return (
                    <tr key={i}>
                      <td>
                        <img
                          src={`/images/${v.product_pic.split(',')[0]}`}
                          alt=""
                        ></img>
                      </td>
                      <td>{v.product_name}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>

            <div className="member_mobile_show formBottom ">
              <div className="formBottom_row">
                <div className="formBottom_discription">小計</div>
                <div className="formBottom_value">
                  {parseInt(totalPrice).toLocaleString()} TW
                </div>
              </div>
              <div className="formBottom_row">
                <div className="formBottom_discription">運費</div>
                <div className="formBottom_value">{fee} TW</div>
              </div>
              <div className="formBottom_row">
                <div className="formBottom_discription">折扣</div>
                <div className="coupon_code">
                  {purChaseDetail[0].coupon_name} TW
                </div>
                <div className="formBottom_value">
                  - {parseInt(purChaseDetail[0].discount).toLocaleString()} TW
                </div>
              </div>
              <div className="formBottom_row">
                <div className="formBottom_discription">訂單總額</div>
                <div className="formBottom_value">
                  {parseInt(purChaseDetail[0].order_money).toLocaleString()} TW
                </div>
              </div>
            </div>

            <div className="shop_detail_area member_mobile_show dark">
              <button
                // onclick="showClick(event)"
                className="memberPage_button shop_detail_check_btn member_mobile_show "
              >
                運送資訊
              </button>
              <div className="formBottom">
                <div className="formBottom_row">
                  <div className="formBottom_discription">收件人</div>
                  <div className="formBottom_value">
                    {purChaseDetail[0].order_recipient}
                  </div>
                </div>
                <div className="formBottom_row">
                  <div className="formBottom_discription">地址</div>
                  <div className="formBottom_value">
                    {purChaseDetail[0].order_address_city}
                    <br />
                    {purChaseDetail[0].order_address_dist}
                    <br />
                    {purChaseDetail[0].order_address}
                  </div>
                </div>
              </div>
            </div>

            <div className="shop_detail_area member_mobile_show gray">
              <button
                // onclick="showClick(event)"
                className="memberPage_button shop_detail_check_btn member_mobile_show "
              >
                帳單地址
              </button>
              <div className="formBottom">
                <div className="formBottom_row">
                  <div className="formBottom_discription">收件人</div>
                  <div className="formBottom_value">
                    {' '}
                    {purChaseDetail[0].order_recipient}
                  </div>
                </div>
                <div className="formBottom_row">
                  <div className="formBottom_discription">地址</div>
                  <div className="formBottom_value">
                    {purChaseDetail[0].order_address_city}
                    <br />
                    {purChaseDetail[0].order_address_dist}
                    <br />
                    {purChaseDetail[0].order_address}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MemberShoppingList_Detail
