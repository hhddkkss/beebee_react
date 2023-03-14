import React from 'react'
import '../styles/Home.css'
<<<<<<< HEAD
import '../styles/Home_Navbar.css'
=======
>>>>>>> emelie
import '../styles/home_ver3.css'
import '../styles/mobile_navbar.css'
import axios from 'axios'
import Home_4ads from './Home_4ads'
import Navbar from '../component/Navbar'

function HomePage() {
  const getProductData = async () => {
    //記得修改port
    const dev = 'http://localhost:3003'
    const em = 'http://localhost:3003'
    const res = await axios.get(dev + '/home_product')
    const initialData = res.data.map((v, i) => {
      return { ...v }
    })
    console.log(initialData)
  }

  return (
    <>
      <Navbar />
      <div className="home">
        {/* <nav className="beebee_navbar">
          <div className="beebee_logo">
            <svg
              width="129"
              height="25"
              viewBox="0 0 331 63"
              fill="#1D2D64"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.66 60.3993C5.19 60.3993 3.1 60.4693 0 60.6193C0.43 57.5193 0.58 55.0793 0.58 50.0393V10.6493C0.58 6.8293 0.44 3.7393 0 0.279297C3.67 0.499297 4.68 0.499297 10.58 0.499297H29.45C41.12 0.499297 47.96 6.1193 47.96 15.6193C47.96 20.0093 46.52 23.4693 43.78 25.9193C42.2 27.2893 40.9 28.0093 37.95 29.0893C41.48 29.8793 43.35 30.7493 45.44 32.5493C48.54 35.2893 50.12 39.1693 50.12 43.9293C50.12 54.2993 42.78 60.4193 30.25 60.4193H10.66V60.3993ZM27.36 23.6093C31.18 23.6093 33.55 21.3793 33.55 17.8493C33.55 14.3193 31.32 12.3093 27.21 12.3093H14.68V23.6193H27.35L27.36 23.6093ZM14.69 48.5193H27.94C32.48 48.5193 35.21 45.9993 35.21 41.7493C35.21 37.4993 32.47 35.1293 27.87 35.1293H14.69V48.5193Z" />
              <path d="M102.53 60.91C99.4301 60.55 96.8401 60.41 90.6501 60.41H67.9701C62.5001 60.41 60.4801 60.48 57.3901 60.63C57.8201 57.75 57.9701 55.09 57.9701 50.12V10.79C57.9701 6.33 57.8301 3.81 57.3901 0.28C60.3401 0.42 62.3601 0.5 67.9701 0.5H90.9401C95.8401 0.5 98.2801 0.36 101.67 0V13.47C98.3601 13.11 95.7701 12.97 90.9401 12.97H72.2201V23.55H87.7701C92.5201 23.55 94.2501 23.48 98.5701 23.05V36.37C95.1901 36.01 92.7401 35.87 87.7701 35.87H72.2201V47.97H90.8001C96.2701 47.97 99.4401 47.83 102.54 47.47V60.94L102.53 60.91Z" />
              <path d="M155.02 60.91C151.92 60.55 149.33 60.41 143.14 60.41H120.46C114.99 60.41 112.97 60.48 109.88 60.63C110.31 57.75 110.46 55.09 110.46 50.12V10.79C110.46 6.33 110.32 3.81 109.88 0.28C112.83 0.42 114.85 0.5 120.46 0.5H143.43C148.33 0.5 150.77 0.36 154.16 0V13.47C150.85 13.11 148.26 12.97 143.43 12.97H124.71V23.55H140.26C145.01 23.55 146.74 23.48 151.06 23.05V36.37C147.68 36.01 145.23 35.87 140.26 35.87H124.71V47.97H143.29C148.76 47.97 151.93 47.83 155.03 47.47V60.94L155.02 60.91Z" />
              <path d="M161.71 60.4C162.14 56.94 162.29 53.92 162.29 49.09V11.8C162.29 6.54 162.15 3.95 161.71 0.5H176.33C175.97 3.96 175.83 6.55 175.83 11.8V17.85C175.83 18.93 175.83 19.58 175.76 20.59C180.01 16.85 184.62 15.19 190.59 15.19C203.7 15.19 211.33 23.54 211.33 37.8C211.33 45.51 209.1 51.7 204.92 56.09C201.17 59.83 196.28 61.71 189.94 61.71C183.96 61.71 180.44 60.49 175.75 56.6C175.75 56.82 175.82 57.75 175.82 58.11V60.41H161.71V60.4ZM187.2 26.12C180.65 26.12 175.97 31.16 175.97 38.15C175.97 45.14 180.72 50.68 186.92 50.68C193.12 50.68 197.36 45.57 197.36 37.93C197.36 30.29 193.54 26.12 187.21 26.12H187.2Z" />
              <path d="M228.46 42.4698C229.18 48.2998 232.56 51.3998 238.25 51.3998C241.13 51.3998 243.65 50.4598 245.52 48.7398C246.6 47.7298 247.1 46.9398 247.68 45.0698L260.21 48.5998C258.55 52.3398 257.47 53.9998 255.46 56.0198C251.36 60.0498 245.6 62.1398 238.47 62.1398C231.34 62.1398 225.87 60.1198 221.76 56.0198C217.51 51.6998 215.21 45.5798 215.21 38.4498C215.21 24.1898 224.35 14.7598 238.11 14.7598C249.34 14.7598 257.19 20.8798 259.71 31.6098C260.29 33.9098 260.57 36.9398 260.79 41.0398C260.79 41.3298 260.79 41.7598 260.86 42.4798H228.46V42.4698ZM247.18 32.5298C246.17 27.9198 243.08 25.4698 238.11 25.4698C233.14 25.4698 229.9 27.7698 228.68 32.5298H247.19H247.18Z" />
              <path d="M312.41 60.91C309.31 60.55 306.72 60.41 300.53 60.41H277.85C272.38 60.41 270.36 60.48 267.27 60.63C267.7 57.75 267.85 55.09 267.85 50.12V10.79C267.85 6.33 267.71 3.81 267.27 0.28C270.22 0.42 272.24 0.5 277.85 0.5H300.82C305.72 0.5 308.16 0.36 311.55 0V13.47C308.24 13.11 305.65 12.97 300.82 12.97H282.1V23.55H297.65C302.4 23.55 304.13 23.48 308.45 23.05V36.37C305.07 36.01 302.62 35.87 297.65 35.87H282.1V47.97H300.68C306.15 47.97 309.32 47.83 312.42 47.47V60.94L312.41 60.91Z" />
              <path
                d="M329.98 60.2004C329.38 62.0004 328.25 62.9704 326.6 62.9704C325.48 62.9704 324.43 62.2204 323.45 60.8704C322.48 59.5204 322.03 58.4004 322.03 57.5704C322.03 56.3704 322.56 55.0204 323.68 53.6704C324.73 52.3204 325.85 51.6504 327.2 51.6504C329.68 51.6504 330.95 53.3004 330.95 56.4504C330.95 56.8304 330.57 58.1004 329.98 60.2004Z"
                fill="#231815"
              />
            </svg>
          </div>
          <div className="nav_btn_list">
            <div className="nav_btn_group">
              <button className="btn">比比精選</button>
              <button className="btn">比比論壇</button>
            </div>
            <div className="nav_btn_group">
              <button className="btn">比比專區</button>
              <button className="btn">關於比比</button>
            </div>
          </div>
          <div className="nav_top">
            <button className="btn member">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <button className="btn cart">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <button className="phonebar">
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
        </nav> */}
        <div className="Home_Word">
          我的選擇，
          <br />
          自己選。
        </div>
        <input className="home_search" type="text" placeholder="開始比價" />
      </div>
      <div className="row home_beebeechoose g-0">
        <div className="col-8 p-0">
          <p className="home_beebeechoose_word">BEEBEE CHOOSE!</p>
          <p className="home_beebeechoose_word_issue">
            選物質感，
            <br />
            質感選物。
          </p>
          <p className="home_beebeechoose_word_inline">
            我們是一個希望讓所有人更方便找到自己心中
            <br />
            最喜愛的商品的團隊
            <br />
            而我們的用心希望能傳達給大家
          </p>
        </div>
      </div>
      <div className="container">
        <div className="row g-0">
          <div className="col-3 home_four_picture">
            <i className="fa-solid fa-check"></i>
            <p className="home_four_word">方便</p>
            <p className="home_four_word2">convenient</p>
          </div>
          <div className="col-3 home_four_picture">
            <i className="fa-solid fa-bolt"></i>
            <p className="home_four_word">快速</p>
            <p className="home_four_word2">fast</p>
          </div>
          <div className="col-3 home_four_picture">
            <i className="fa-solid fa-tag"></i>
            <p className="home_four_word">低價</p>
            <p className="home_four_word2">low price</p>
          </div>
          <div className="col-3 home_four_picture2">
            <i className="fa-regular fa-star"></i>
            <p className="home_four_word">質感</p>
            <p className="home_four_word2">texture</p>
          </div>
        </div>
      </div>
      {/* <Home_4ads /> */}
    </>
  )
}

export default HomePage
