import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/checkout.css'
import Navbar from '../component/CheckoutNavBarLight'
import {
  GET_COUPON,
  ADD_ORDER_ALL,
  ADD_ORDER_DETAIL,
  EMPTY_CART,
  GET_MEMBER_DATA,
} from '../component/LoginApi'
import M_Path from '../component/M_Path'
import M_OrderDetailCard from './M_OrderDetailCard'
import M_orderDetailBottom from './M_orderDetailBottom'
import CheckoutForm from './CheckoutForm'
import CheckoutRightLogin from './CheckoutRightLogin'
import CheckoutRight from './CheckoutRight'
import BtnLoginAndSignUp from './BtnLoginAndSignUp'
import AuthContext from '../Contexts/AuthContext'
import axios from 'axios'
import ProductFunctionContext from '../Contexts/ProductFunctionContext'

function Checkout() {
  const navigation = useNavigate()
  const { memberAuth } = useContext(AuthContext)

  //購物車完成頁
  const { cartData, donepageData, setDonepageData } = useContext(
    ProductFunctionContext
  )

  // //會員資料
  // const [memberData, setMemberData] = useState({})

  //折扣
  const [discount, setDiscount] = useState(0)
  const [hasDiscount, setHasDiscount] = useState(false)
  const [couponCode, setCouponCode] = useState('')
  const [couponError, setCouponError] = useState(false)
  const [couponId, setCouponId] = useState('')

  //訂單相關
  const [passValidation, setPassValidation] = useState(false)
  // const [orderId, setOrderId] = useState('')
  let orderId = ''
  //有沒有優惠券
  //note: {output:有優惠券 沒有優惠券 還沒檢查 }控制要不要顯示錯誤訊息
  const [hasCoupon, setHasCoupon] = useState('還沒檢查')

  //表單資料
  const [inputs, setInputs] = useState({
    // firstName: '',
    // lastName: '',
    // mobile: '',
    // email: '',
    city: '請選擇',
    disc: '請選擇',
    address: '',
    // postalCode: '',
    // payment: '',
  })

  // validation
  const [validation, setValidation] = useState({
    // firstName: '',
    // lastName: '',
    // mobile: '',
    // email: '',
    // cities: '',
    // disc: '',
    // address: '',
    // postalCode: '',
    // payment: '',
  })

  // let validation = {}

  const errorMsg = {
    name: '姓名為必填項目',
    mobile: ['手機為必填項目', '請遵守範例格式為0912123123'],
    email: ['Email為必填項目', '請遵守範例格式為beeebee@test.com'],
    cities: '收件人城市為必選項目',
    disc: '收件人區為必選項目',
    address: '收件人地址為必填項目',
    postalCode: [
      '收件人郵遞區號為必填項目',
      '請遵守收件人郵遞區號格式為數字',
      '郵遞區號須為3碼或是5碼',
    ],
    payment: '付款方式為必選項目',
  }
  //控制表單輸入欄用
  const handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value

    console.log({ ...inputs, [name]: value })
    setInputs({ ...inputs, [name]: value })
  }

  //驗證表單用
  const handleValidation = () => {
    setValidation({})
    //判斷input裡面的東西有沒有符合
    let passValidation = true
    //名字驗證

    if (!inputs.firstName || !inputs.firstName.trim()) {
      passValidation = false
      setValidation((...prevValidation) => ({
        ...prevValidation,
        firstName: errorMsg.name,
      }))
    }
    //姓氏驗證

    if (!inputs.lastName || !inputs.lastName.trim()) {
      passValidation = false
      setValidation((prevValidation) => ({
        ...prevValidation,
        lastName: errorMsg.name,
      }))
    }
    //手機號碼驗證
    //為空
    if (!inputs.mobile || !inputs.mobile.trim()) {
      passValidation = false
      setValidation((prevValidation) => ({
        ...prevValidation,
        mobile: errorMsg.mobile[0],
      }))
    }
    //格式不對
    const mobileCondition = /^09[0-9]{8}$/
    if (inputs.mobile && !inputs.mobile.match(mobileCondition)) {
      passValidation = false
      setValidation((prevValidation) => ({
        ...prevValidation,
        mobile: errorMsg.mobile[1],
      }))
    }

    //email驗證
    const emailCondition =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    //email為空
    if (inputs.email === undefined || !inputs.email.trim()) {
      passValidation = false
      setValidation((prevValidation) => ({
        ...prevValidation,
        email: errorMsg.email[0],
      }))
    }
    //email格式驗證 by: https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript

    if (inputs.email && !inputs.email.match(emailCondition)) {
      passValidation = false
      setValidation((prevValidation) => ({
        ...prevValidation,
        email: errorMsg.email[1],
      }))
    }

    //縣市驗證

    if (!inputs.city || inputs.city === '請選擇') {
      passValidation = false
      setValidation((prevValidation) => ({
        ...prevValidation,
        cities: errorMsg.cities,
      }))
    }

    //區驗證
    if (!inputs.disc || inputs.disc === '請選擇') {
      passValidation = false
      setValidation((prevValidation) => ({
        ...prevValidation,
        disc: errorMsg.disc,
      }))
    }

    //地址驗證

    if (!inputs.address || !inputs.address.trim()) {
      passValidation = false
      setValidation((prevValidation) => ({
        ...prevValidation,
        address: errorMsg.address,
      }))
    }
    //郵遞區號
    //為空
    if (!inputs.postalCode || !inputs.postalCode.trim()) {
      passValidation = false
      setValidation((prevValidation) => ({
        ...prevValidation,
        postalCode: errorMsg.postalCode[0],
      }))
    }
    //郵遞區號須為數字
    if (inputs.postalCode && Number.isNaN(inputs.postalCode)) {
      passValidation = false
      setValidation((prevValidation) => ({
        ...prevValidation,
        postalCode: errorMsg.postalCode[1],
      }))
    }

    //郵遞區號為 3碼 or 5碼
    if (inputs.postalCode && inputs.postalCode.length === 4) {
      passValidation = false
      setValidation((prevValidation) => ({
        ...prevValidation,
        postalCode: errorMsg.postalCode[2],
      }))
    }

    //付款方式驗證
    if (!inputs.payment || inputs.payment === '請選擇') {
      passValidation = false
      setValidation((prevValidation) => ({
        ...prevValidation,
        payment: errorMsg.payment,
      }))
    }

    return passValidation
    //表單有沒有通過？
    // if (JSON.stringify(validation) === '{}') {
    //   console.log('表格檢查無誤')
    //   setPassValidation(true)
    // }
  }

  //表單送出
  const handleSubmit = async (event) => {
    const passValidation = handleValidation()
    console.log({ passValidation })
    if (passValidation) {
      //寫入訂單總表
      const data1 = await addOrderAll()
      //寫入訂單總表
      const data2 = await addOrderDetail()
      console.log(
        { ...donepageData, orderAll: data1, orderDetail: data2 },
        7777
      )

      setDonepageData({ ...donepageData, orderAll: data1, orderDetail: data2 })

      //跳頁
      setTimeout(() => {
        navigation('/donePage')
      }, 500)
    }

    //寫入訂單細節

    //清空購物車
    await emptyCart()
    console.log(inputs, 'input')
  }

  //拿優惠券
  const getCoupon = async (couponCode) => {
    const res = await axios.get(GET_COUPON + couponCode)

    if (res.data && +res.data.discount > 0) {
      setHasDiscount(true)
      setDiscount(res.data.discount)
      setCouponId(res.data.id)
      setCouponError(false)
    } else {
      setHasDiscount(false)
      setCouponError(true)
    }
  }
  //  新增訂單
  const addOrderAll = async () => {
    const res = await axios.post(ADD_ORDER_ALL, {
      member_id: memberAuth.memberId,
      order_memo: inputs.note,
      coupon_id: couponId,
      firstName: inputs.firstName,
      lastName: inputs.lastName,
      order_phone: inputs.mobile,
      order_address_city: inputs.city,
      order_address_dist: inputs.disc,
      order_address: inputs.address,
      order_email: inputs.email,
      postalCode: inputs.postalCode,
      product_price: cartData.map((v) => Number(v.product_price)),
      quantity: cartData.map((v) => +v.quantity),
      discount: discount,
      payment_method: +inputs.payment,
    })
    console.log(res.data, 'all')
    console.log(res.data.orderNum, 'num')
    // setOrderId(res.data.orderNum)
    orderId = res.data.orderNum
    return res.data
    // setDonepageData({ ...donepageData, orderAll: res.data })
  }

  //新增詳細訂單
  const addOrderDetail = async () => {
    console.log(orderId, 'num2')
    const res = await axios.post(ADD_ORDER_DETAIL, {
      order_id: orderId,
      product_id: cartData.map((v) => v.product_id),
      product_name: cartData.map((v) => v.product_name),
      product_amount: cartData.map((v) => v.quantity),
      product_price: cartData.map((v) => v.product_price),
      payment_method: +inputs.payment,
      product_pic: cartData.map((v) => v.product_pic.split(',')[0]),
    })
    console.log(res.data, 'detail')
    return res.data
    // setDonepageData({ ...donepageData, orderDetail: res.data })
  }

  //清空購物車
  const emptyCart = async () => {
    console.log(22222)
    const res = await axios.delete(EMPTY_CART, {
      data: {
        member_id: memberAuth.memberId,
      },
    })
    console.log(res.data)
  }

  return (
    <>
      <Navbar />

      {/* 給狀態改顏色 */}
      <M_Path />

      {/* m<!-- 按鈕 --> */}
      <div className="m-top-button-area">
        <div className="order-detail-collapse">
          <div className="order-detail">
            <p>
              顯示訂單資訊<i className="fa-solid fa-caret-down"></i>
            </p>
            <p className="product-price">34900</p>
          </div>

          {/* m<!-- 折疊訊息 --> */}
          <div className="m-order-detail-info">
            <M_OrderDetailCard />

            <M_orderDetailBottom
              hasDiscount={hasDiscount}
              couponCode={couponCode}
              setCouponCode={setCouponCode}
              getCoupon={getCoupon}
              discount={discount}
              couponError={couponError}
              handleSubmit={handleSubmit}
            />
          </div>
        </div>

        {memberAuth.memberId ? '' : <BtnLoginAndSignUp />}
      </div>

      <div className="checkout">
        {/* <!-- 左半邊 --> */}
        <div className="checkout-left">
          {/* <!--  logo藍 --> */}

          <div className="logo-wrap">
            <svg
              width="331"
              height="63"
              viewBox="0 0 331 63"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.66 60.3993C5.19 60.3993 3.1 60.4693 0 60.6193C0.43 57.5193 0.58 55.0793 0.58 50.0393V10.6493C0.58 6.8293 0.44 3.7393 0 0.279297C3.67 0.499297 4.68 0.499297 10.58 0.499297H29.45C41.12 0.499297 47.96 6.1193 47.96 15.6193C47.96 20.0093 46.52 23.4693 43.78 25.9193C42.2 27.2893 40.9 28.0093 37.95 29.0893C41.48 29.8793 43.35 30.7493 45.44 32.5493C48.54 35.2893 50.12 39.1693 50.12 43.9293C50.12 54.2993 42.78 60.4193 30.25 60.4193H10.66V60.3993ZM27.36 23.6093C31.18 23.6093 33.55 21.3793 33.55 17.8493C33.55 14.3193 31.32 12.3093 27.21 12.3093H14.68V23.6193H27.35L27.36 23.6093ZM14.69 48.5193H27.94C32.48 48.5193 35.21 45.9993 35.21 41.7493C35.21 37.4993 32.47 35.1293 27.87 35.1293H14.69V48.5193Z"
                fill="#1D2D64"
              />
              <path
                d="M102.53 60.91C99.4301 60.55 96.8401 60.41 90.6501 60.41H67.9701C62.5001 60.41 60.4801 60.48 57.3901 60.63C57.8201 57.75 57.9701 55.09 57.9701 50.12V10.79C57.9701 6.33 57.8301 3.81 57.3901 0.28C60.3401 0.42 62.3601 0.5 67.9701 0.5H90.9401C95.8401 0.5 98.2801 0.36 101.67 0V13.47C98.3601 13.11 95.7701 12.97 90.9401 12.97H72.2201V23.55H87.7701C92.5201 23.55 94.2501 23.48 98.5701 23.05V36.37C95.1901 36.01 92.7401 35.87 87.7701 35.87H72.2201V47.97H90.8001C96.2701 47.97 99.4401 47.83 102.54 47.47V60.94L102.53 60.91Z"
                fill="#1D2D64"
              />
              <path
                d="M155.02 60.91C151.92 60.55 149.33 60.41 143.14 60.41H120.46C114.99 60.41 112.97 60.48 109.88 60.63C110.31 57.75 110.46 55.09 110.46 50.12V10.79C110.46 6.33 110.32 3.81 109.88 0.28C112.83 0.42 114.85 0.5 120.46 0.5H143.43C148.33 0.5 150.77 0.36 154.16 0V13.47C150.85 13.11 148.26 12.97 143.43 12.97H124.71V23.55H140.26C145.01 23.55 146.74 23.48 151.06 23.05V36.37C147.68 36.01 145.23 35.87 140.26 35.87H124.71V47.97H143.29C148.76 47.97 151.93 47.83 155.03 47.47V60.94L155.02 60.91Z"
                fill="#1D2D64"
              />
              <path
                d="M161.71 60.4C162.14 56.94 162.29 53.92 162.29 49.09V11.8C162.29 6.54 162.15 3.95 161.71 0.5H176.33C175.97 3.96 175.83 6.55 175.83 11.8V17.85C175.83 18.93 175.83 19.58 175.76 20.59C180.01 16.85 184.62 15.19 190.59 15.19C203.7 15.19 211.33 23.54 211.33 37.8C211.33 45.51 209.1 51.7 204.92 56.09C201.17 59.83 196.28 61.71 189.94 61.71C183.96 61.71 180.44 60.49 175.75 56.6C175.75 56.82 175.82 57.75 175.82 58.11V60.41H161.71V60.4ZM187.2 26.12C180.65 26.12 175.97 31.16 175.97 38.15C175.97 45.14 180.72 50.68 186.92 50.68C193.12 50.68 197.36 45.57 197.36 37.93C197.36 30.29 193.54 26.12 187.21 26.12H187.2Z"
                fill="#1D2D64"
              />
              <path
                d="M228.46 42.4698C229.18 48.2998 232.56 51.3998 238.25 51.3998C241.13 51.3998 243.65 50.4598 245.52 48.7398C246.6 47.7298 247.1 46.9398 247.68 45.0698L260.21 48.5998C258.55 52.3398 257.47 53.9998 255.46 56.0198C251.36 60.0498 245.6 62.1398 238.47 62.1398C231.34 62.1398 225.87 60.1198 221.76 56.0198C217.51 51.6998 215.21 45.5798 215.21 38.4498C215.21 24.1898 224.35 14.7598 238.11 14.7598C249.34 14.7598 257.19 20.8798 259.71 31.6098C260.29 33.9098 260.57 36.9398 260.79 41.0398C260.79 41.3298 260.79 41.7598 260.86 42.4798H228.46V42.4698ZM247.18 32.5298C246.17 27.9198 243.08 25.4698 238.11 25.4698C233.14 25.4698 229.9 27.7698 228.68 32.5298H247.19H247.18Z"
                fill="#1D2D64"
              />
              <path
                d="M312.41 60.91C309.31 60.55 306.72 60.41 300.53 60.41H277.85C272.38 60.41 270.36 60.48 267.27 60.63C267.7 57.75 267.85 55.09 267.85 50.12V10.79C267.85 6.33 267.71 3.81 267.27 0.28C270.22 0.42 272.24 0.5 277.85 0.5H300.82C305.72 0.5 308.16 0.36 311.55 0V13.47C308.24 13.11 305.65 12.97 300.82 12.97H282.1V23.55H297.65C302.4 23.55 304.13 23.48 308.45 23.05V36.37C305.07 36.01 302.62 35.87 297.65 35.87H282.1V47.97H300.68C306.15 47.97 309.32 47.83 312.42 47.47V60.94L312.41 60.91Z"
                fill="#1D2D64"
              />
              <path
                d="M329.98 60.2004C329.38 62.0004 328.25 62.9704 326.6 62.9704C325.48 62.9704 324.43 62.2204 323.45 60.8704C322.48 59.5204 322.03 58.4004 322.03 57.5704C322.03 56.3704 322.56 55.0204 323.68 53.6704C324.73 52.3204 325.85 51.6504 327.2 51.6504C329.68 51.6504 330.95 53.3004 330.95 56.4504C330.95 56.8304 330.57 58.1004 329.98 60.2004Z"
                fill="#231815"
              />
            </svg>

            {/* <!-- step information --> */}
            <section className="checkout-step">
              <div className="ball-wrap">
                <div className="ball">
                  <span>1</span>
                </div>

                <div className="line "></div>

                <div className="ball active">
                  <span>2</span>
                </div>

                <div className="line"></div>

                <div className="ball active">
                  <span>3</span>
                </div>
              </div>

              <div className="text">
                <p>購物車</p>
                <p>填寫資料</p>
                <p>完成訂單</p>
              </div>
            </section>
          </div>

          <CheckoutForm
            inputs={inputs}
            setInputs={setInputs}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            validation={validation}
            setValidation={setValidation}
          />
        </div>
        {/* <!-- 右半邊 --> */}
        <div className="checkout-right">
          {/* <!-- 標語 --> */}

          {memberAuth && memberAuth.memberId ? (
            <CheckoutRightLogin
              hasDiscount={hasDiscount}
              hasCoupon={hasCoupon}
              setHasCoupon={setHasCoupon}
              discount={discount}
              getCoupon={getCoupon}
              couponCode={couponCode}
              setCouponCode={setCouponCode}
              couponError={couponError}
              handleSubmit={handleSubmit}
              inputs={inputs}
              addOrderAll={addOrderAll}
              addOrderDetail={addOrderDetail}
            />
          ) : (
            <CheckoutRight />
          )}

          <div className="bottom-slogan">
            <svg
              width="375"
              height="123"
              viewBox="0 0 375 123"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_888_7066)">
                <path
                  d="M4.624 3.984H11.792L24.336 39.312L23.248 38.864L32.4 15.184L35.28 23.568L23.056 52.112L4.624 3.984ZM26.832 3.984H33.04L46.608 38.8L45.328 38.544L57.296 3.984H63.888L45.712 52.048L26.832 3.984ZM78.0345 50.64C75.0052 50.64 72.4025 50.0427 70.2265 48.848C68.0505 47.6107 66.3652 45.9467 65.1705 43.856C64.0185 41.7227 63.4425 39.2907 63.4425 36.56C63.4425 33.9573 64.1038 31.5893 65.4265 29.456C66.7492 27.3227 68.5198 25.616 70.7385 24.336C72.9572 23.056 75.4318 22.416 78.1625 22.416C81.6612 22.416 84.5625 23.44 86.8665 25.488C89.1705 27.536 90.7278 30.352 91.5385 33.936L69.7145 41.616L68.3065 38.096L86.2265 31.568L84.9465 32.4C84.4345 30.992 83.5812 29.776 82.3865 28.752C81.1918 27.6853 79.6345 27.152 77.7145 27.152C76.0932 27.152 74.6425 27.5573 73.3625 28.368C72.0825 29.136 71.0798 30.2027 70.3545 31.568C69.6292 32.9333 69.2665 34.4907 69.2665 36.24C69.2665 38.0747 69.6505 39.696 70.4185 41.104C71.1865 42.4693 72.2318 43.5573 73.5545 44.368C74.9198 45.136 76.4558 45.52 78.1625 45.52C79.3145 45.52 80.4238 45.3067 81.4905 44.88C82.5998 44.4533 83.6238 43.8987 84.5625 43.216L87.3145 47.632C85.9918 48.528 84.4985 49.2533 82.8345 49.808C81.2132 50.3627 79.6132 50.64 78.0345 50.64ZM116.687 3.984H123.855L136.399 39.312L135.311 38.864L144.463 15.184L147.343 23.568L135.119 52.112L116.687 3.984ZM138.895 3.984H145.103L158.671 38.8L157.391 38.544L169.359 3.984H175.951L157.775 52.048L138.895 3.984ZM182.872 23.504H188.824V50H182.872V23.504ZM182.424 13.904C182.424 12.9653 182.786 12.176 183.512 11.536C184.28 10.896 185.112 10.576 186.008 10.576C186.904 10.576 187.693 10.896 188.376 11.536C189.101 12.176 189.464 12.9653 189.464 13.904C189.464 14.8853 189.101 15.696 188.376 16.336C187.693 16.9333 186.904 17.232 186.008 17.232C185.112 17.232 184.28 16.912 183.512 16.272C182.786 15.632 182.424 14.8427 182.424 13.904ZM199.122 0.463997H205.074V50H199.122V0.463997ZM215.372 0.463997H221.324V50H215.372V0.463997ZM5.264 67.728H35.984V73.68H23.568V114H17.36V73.68H5.264V67.728ZM44.3715 114V64.464H50.1955V93.648L50.0675 92.56C50.9635 90.8107 52.3288 89.36 54.1635 88.208C56.0408 87.056 58.2382 86.48 60.7555 86.48C63.2728 86.48 65.3208 87.2267 66.8995 88.72C68.5208 90.1707 69.3528 92.0693 69.3955 94.416V114H63.3795V96.528C63.3368 95.0773 62.9102 93.904 62.0995 93.008C61.3315 92.0693 60.1155 91.6 58.4515 91.6C56.9155 91.6 55.5288 92.048 54.2915 92.944C53.0542 93.7973 52.0728 94.9707 51.3475 96.464C50.6648 97.9573 50.3235 99.664 50.3235 101.584V114H44.3715ZM92.0345 114.64C89.0052 114.64 86.4025 114.043 84.2265 112.848C82.0505 111.611 80.3652 109.947 79.1705 107.856C78.0185 105.723 77.4425 103.291 77.4425 100.56C77.4425 97.9573 78.1038 95.5893 79.4265 93.456C80.7492 91.3227 82.5198 89.616 84.7385 88.336C86.9572 87.056 89.4318 86.416 92.1625 86.416C95.6612 86.416 98.5625 87.44 100.867 89.488C103.171 91.536 104.728 94.352 105.539 97.936L83.7145 105.616L82.3065 102.096L100.227 95.568L98.9465 96.4C98.4345 94.992 97.5812 93.776 96.3865 92.752C95.1918 91.6853 93.6345 91.152 91.7145 91.152C90.0932 91.152 88.6425 91.5573 87.3625 92.368C86.0825 93.136 85.0798 94.2027 84.3545 95.568C83.6292 96.9333 83.2665 98.4907 83.2665 100.24C83.2665 102.075 83.6505 103.696 84.4185 105.104C85.1865 106.469 86.2318 107.557 87.5545 108.368C88.9198 109.136 90.4558 109.52 92.1625 109.52C93.3145 109.52 94.4238 109.307 95.4905 108.88C96.5998 108.453 97.6238 107.899 98.5625 107.216L101.315 111.632C99.9918 112.528 98.4985 113.253 96.8345 113.808C95.2132 114.363 93.6132 114.64 92.0345 114.64ZM146.623 67.728C151.273 67.728 154.921 68.688 157.567 70.608C160.255 72.4853 161.599 75.4293 161.599 79.44C161.599 81.872 161.044 83.984 159.935 85.776C158.825 87.568 157.268 88.976 155.263 90C153.3 91.024 150.975 91.6 148.287 91.728L147.391 88.528C150.505 88.6133 153.3 89.168 155.775 90.192C158.249 91.216 160.212 92.6453 161.663 94.48C163.113 96.3147 163.839 98.4907 163.839 101.008C163.839 103.312 163.412 105.296 162.559 106.96C161.705 108.581 160.553 109.925 159.103 110.992C157.652 112.016 156.009 112.784 154.175 113.296C152.34 113.765 150.441 114 148.479 114H134.719V67.728H146.623ZM147.903 88.016C150.463 88.016 152.319 87.312 153.471 85.904C154.623 84.4533 155.199 82.704 155.199 80.656C155.199 78.224 154.452 76.4533 152.959 75.344C151.465 74.2347 149.46 73.68 146.943 73.68H140.927V88.016H147.903ZM148.159 108.24C149.865 108.24 151.423 107.984 152.831 107.472C154.281 106.96 155.412 106.171 156.223 105.104C157.076 104.037 157.503 102.693 157.503 101.072C157.503 99.28 157.012 97.872 156.031 96.848C155.092 95.824 153.876 95.0987 152.383 94.672C150.889 94.2027 149.353 93.968 147.775 93.968H140.927V108.24H148.159ZM185.097 114.64C182.068 114.64 179.465 114.043 177.289 112.848C175.113 111.611 173.428 109.947 172.233 107.856C171.081 105.723 170.505 103.291 170.505 100.56C170.505 97.9573 171.166 95.5893 172.489 93.456C173.812 91.3227 175.582 89.616 177.801 88.336C180.02 87.056 182.494 86.416 185.225 86.416C188.724 86.416 191.625 87.44 193.929 89.488C196.233 91.536 197.79 94.352 198.601 97.936L176.777 105.616L175.369 102.096L193.289 95.568L192.009 96.4C191.497 94.992 190.644 93.776 189.449 92.752C188.254 91.6853 186.697 91.152 184.777 91.152C183.156 91.152 181.705 91.5573 180.425 92.368C179.145 93.136 178.142 94.2027 177.417 95.568C176.692 96.9333 176.329 98.4907 176.329 100.24C176.329 102.075 176.713 103.696 177.481 105.104C178.249 106.469 179.294 107.557 180.617 108.368C181.982 109.136 183.518 109.52 185.225 109.52C186.377 109.52 187.486 109.307 188.553 108.88C189.662 108.453 190.686 107.899 191.625 107.216L194.377 111.632C193.054 112.528 191.561 113.253 189.897 113.808C188.276 114.363 186.676 114.64 185.097 114.64ZM213.483 114.512C211.606 114.512 209.771 114.192 207.979 113.552C206.23 112.869 204.779 111.867 203.627 110.544L206.123 107.088C207.232 108.155 208.363 108.965 209.515 109.52C210.71 110.032 211.883 110.288 213.035 110.288C213.888 110.288 214.678 110.181 215.403 109.968C216.128 109.755 216.704 109.413 217.131 108.944C217.6 108.432 217.835 107.749 217.835 106.896C217.835 105.957 217.515 105.211 216.875 104.656C216.278 104.101 215.488 103.653 214.507 103.312C213.568 102.971 212.566 102.651 211.499 102.352C209.323 101.627 207.659 100.624 206.507 99.344C205.355 98.064 204.779 96.5067 204.779 94.672C204.779 93.264 205.12 91.9627 205.803 90.768C206.528 89.5307 207.574 88.528 208.939 87.76C210.347 86.992 212.075 86.608 214.123 86.608C215.958 86.608 217.6 86.8427 219.051 87.312C220.502 87.7387 221.867 88.464 223.147 89.488L220.779 93.2C220.011 92.3893 219.094 91.792 218.027 91.408C216.96 91.024 216 90.8107 215.147 90.768C214.422 90.7253 213.718 90.832 213.035 91.088C212.395 91.344 211.862 91.7067 211.435 92.176C211.008 92.6453 210.795 93.2 210.795 93.84C210.795 94.736 211.094 95.4613 211.691 96.016C212.288 96.5707 213.056 97.0187 213.995 97.36C214.976 97.6587 215.936 97.9787 216.875 98.32C218.198 98.704 219.371 99.216 220.395 99.856C221.419 100.496 222.23 101.285 222.827 102.224C223.467 103.163 223.787 104.336 223.787 105.744C223.787 107.323 223.403 108.795 222.635 110.16C221.91 111.483 220.779 112.549 219.243 113.36C217.75 114.128 215.83 114.512 213.483 114.512ZM234.682 75.856H240.634V87.632H247.93V92.304H240.634V114H234.682V92.304H229.818V87.632H234.682V75.856ZM272.364 110.608C272.364 109.669 272.705 108.88 273.388 108.24C274.113 107.557 274.902 107.216 275.756 107.216C276.524 107.216 277.249 107.557 277.932 108.24C278.657 108.88 279.02 109.669 279.02 110.608C279.02 111.632 278.657 112.464 277.932 113.104C277.249 113.701 276.524 114 275.756 114C274.902 114 274.113 113.701 273.388 113.104C272.705 112.464 272.364 111.632 272.364 110.608ZM303.364 110.608C303.364 109.669 303.705 108.88 304.388 108.24C305.113 107.557 305.902 107.216 306.756 107.216C307.524 107.216 308.249 107.557 308.932 108.24C309.657 108.88 310.02 109.669 310.02 110.608C310.02 111.632 309.657 112.464 308.932 113.104C308.249 113.701 307.524 114 306.756 114C305.902 114 305.113 113.701 304.388 113.104C303.705 112.464 303.364 111.632 303.364 110.608ZM334.364 110.608C334.364 109.669 334.705 108.88 335.388 108.24C336.113 107.557 336.902 107.216 337.756 107.216C338.524 107.216 339.249 107.557 339.932 108.24C340.657 108.88 341.02 109.669 341.02 110.608C341.02 111.632 340.657 112.464 339.932 113.104C339.249 113.701 338.524 114 337.756 114C336.902 114 336.113 113.701 335.388 113.104C334.705 112.464 334.364 111.632 334.364 110.608Z"
                  fill="white"
                />
                <path
                  d="M265.248 3.728C269.898 3.728 273.546 4.688 276.192 6.608C278.88 8.48533 280.224 11.4293 280.224 15.44C280.224 17.872 279.669 19.984 278.56 21.776C277.45 23.568 275.893 24.976 273.888 26C271.925 27.024 269.6 27.6 266.912 27.728L266.016 24.528C269.13 24.6133 271.925 25.168 274.4 26.192C276.874 27.216 278.837 28.6453 280.288 30.48C281.738 32.3147 282.464 34.4907 282.464 37.008C282.464 39.312 282.037 41.296 281.184 42.96C280.33 44.5813 279.178 45.9253 277.728 46.992C276.277 48.016 274.634 48.784 272.8 49.296C270.965 49.7653 269.066 50 267.104 50H253.344V3.728H265.248ZM266.528 24.016C269.088 24.016 270.944 23.312 272.096 21.904C273.248 20.4533 273.824 18.704 273.824 16.656C273.824 14.224 273.077 12.4533 271.584 11.344C270.09 10.2347 268.085 9.68 265.568 9.68H259.552V24.016H266.528ZM266.784 44.24C268.49 44.24 270.048 43.984 271.456 43.472C272.906 42.96 274.037 42.1707 274.848 41.104C275.701 40.0373 276.128 38.6933 276.128 37.072C276.128 35.28 275.637 33.872 274.656 32.848C273.717 31.824 272.501 31.0987 271.008 30.672C269.514 30.2027 267.978 29.968 266.4 29.968H259.552V44.24H266.784ZM303.722 50.64C300.693 50.64 298.09 50.0427 295.914 48.848C293.738 47.6107 292.053 45.9467 290.858 43.856C289.706 41.7227 289.13 39.2907 289.13 36.56C289.13 33.9573 289.791 31.5893 291.114 29.456C292.437 27.3227 294.207 25.616 296.426 24.336C298.645 23.056 301.119 22.416 303.85 22.416C307.349 22.416 310.25 23.44 312.554 25.488C314.858 27.536 316.415 30.352 317.226 33.936L295.402 41.616L293.994 38.096L311.914 31.568L310.634 32.4C310.122 30.992 309.269 29.776 308.074 28.752C306.879 27.6853 305.322 27.152 303.402 27.152C301.781 27.152 300.33 27.5573 299.05 28.368C297.77 29.136 296.767 30.2027 296.042 31.568C295.317 32.9333 294.954 34.4907 294.954 36.24C294.954 38.0747 295.338 39.696 296.106 41.104C296.874 42.4693 297.919 43.5573 299.242 44.368C300.607 45.136 302.143 45.52 303.85 45.52C305.002 45.52 306.111 45.3067 307.178 44.88C308.287 44.4533 309.311 43.8987 310.25 43.216L313.002 47.632C311.679 48.528 310.186 49.2533 308.522 49.808C306.901 50.3627 305.301 50.64 303.722 50.64ZM326.156 3.728H356.236V9.68H332.364V23.76H353.676V29.712H332.364V44.048H357.132V50H326.156V3.728ZM363.426 46.608C363.426 45.6693 363.767 44.88 364.45 44.24C365.175 43.5573 365.965 43.216 366.818 43.216C367.586 43.216 368.311 43.5573 368.994 44.24C369.719 44.88 370.082 45.6693 370.082 46.608C370.082 47.632 369.719 48.464 368.994 49.104C368.311 49.7013 367.586 50 366.818 50C365.965 50 365.175 49.7013 364.45 49.104C363.767 48.464 363.426 47.632 363.426 46.608Z"
                  fill="#1D2D64"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_888_7066"
                  x="0.624023"
                  y="0.463989"
                  width="373.458"
                  height="122.176"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_888_7066"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_888_7066"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
      </div>

      <div className="m-bottom-btn">
        <button
          className="m-btn-to-checkout btn-to-checkout"
          onClick={(event) => {
            handleSubmit(event)
          }}
        >
          立即下單
        </button>
      </div>
    </>
  )
}

export default Checkout
