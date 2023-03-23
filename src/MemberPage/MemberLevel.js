import React from 'react'
import Navbar from '../component/Navbar/index'
import MeberPage_Sidebar from './MemberPageComponent/MeberPage_Sidebar'

function MemberLevel() {
  return (
    <>
      <Navbar />
      <div class="member_body">
        <MeberPage_Sidebar />

        <div class="member_container">
          <div class="now_memberPage">比比里程碑</div>

          <div class="level_area ">
            <div class="level_map member_mobile_hidden">
              <div class="ellipse_pink"></div>
              <div class="ellipse_blue"></div>
              <img
                src={'/images/member_level.png'}
                alt="level"
              ></img>
            </div>

            <div class="level_card">
              <div class="level_title">
                <div class="title_name">萌新會員</div>
              </div>

              <div class="level_box">
                <label>加入日期</label>
                <div>2022.10.19</div>
              </div>
              <div class="level_box">
                <label>會員等級</label>
                <div>萌新會員</div>
              </div>
              <div class="level_box">
                <label>累積消費</label>
                <div>*****</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MemberLevel
