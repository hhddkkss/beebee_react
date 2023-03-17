import React from 'react'
import Navbar from '../component/Navbar/index'
import MeberPage_Sidebar from '../component/MemberPage/MeberPage_Sidebar'

function MemberCustomerService() {
  return (
    <>
      <Navbar />
      <div class="member_body">
        <MeberPage_Sidebar />

        <div class="member_container">
          <div class="now_memberPage">幫助中心</div>

          <div class="chat_area">
            <div class="content_area">
              <div class="chat_box official">
                <div class="chat_box_name">
                  <img class="chat_avatar" src="./olee.jpg" alt=""></img>
                  小編_粒粒
                </div>
                <div class="chat_content">您好! 很高興能幫助您...</div>
              </div>

              <div class="chat_box customer">
                <div class="chat_box_name">
                  <img class="chat_avatar" src="./olee.jpg" alt=""></img>
                  You
                </div>
                <div class="chat_content">想請問何時出貨?...</div>
              </div>

              <div class="chat_box official">
                <div class="chat_box_name">
                  <img class="chat_avatar" src="./olee.jpg" alt=""></img>
                  小編_粒粒
                </div>
                <div class="chat_content">
                  一般來講，我們都必須務必慎重的考慮考慮。羅素在不經意間這樣說過，希望是堅韌的拐杖，忍耐是旅行袋，攜帶它們，人可以登上永恆之旅。這段話可說是震撼了我。做好請耐心稍帶這件事，可以說已經成為了全民運動。在這種不可避免的衝突下，我們必須解決這個問題。不要先入為主覺得請耐心稍帶很複雜，實際上，請耐心稍帶可能比你想的還要更複雜。我們不妨可以這樣來想:
                  請耐心稍帶的出現，必將帶領人類走向更高的巔峰。
                </div>
              </div>

              <div class="chat_box customer">
                <div class="chat_box_name">
                  <img class="chat_avatar" src="./olee.jpg" alt=""></img>
                  You
                </div>
                <div class="chat_content">
                  想修改我的地址，但不知道可不可以來的及修改，如果改成這樣，我還能準時收到貨物嗎？
                </div>
              </div>
              <div class="chat_box official">
                <div class="chat_box_name">
                  <img class="chat_avatar" src="./olee.jpg" alt=""></img>
                  小編_粒粒
                </div>
                <div class="chat_content">
                  一般來講，我們都必須務必慎重的考慮考慮。準時收到貨物是必然的，請耐心稍帶的出現，必將帶領人類走向更高的巔峰。
                </div>
              </div>
            </div>

            <div class="common_problem_area">
              <div class="common_problem_box">想請問何時出貨?...</div>
              <div class="common_problem_box">如何修改訂單?</div>
              <div class="common_problem_box">為甚麼我的免運券不能使用?</div>
              <div class="common_problem_box">
                請問我購買的產品保固時間多長?
              </div>
            </div>

            <div class="messenger_box">
              <input type="text" placeholder="Messages"></input>
              <button class="btn">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="18" cy="18" r="17.5" stroke="#E59069" />
                  <path
                    d="M15 24L21 18L15 12"
                    stroke="#E59069"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MemberCustomerService
