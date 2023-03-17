import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import AuthContext from '../../Contexts/AuthContext'

function NavbarMemberBox({ memberBoxRef }) {
  const navigation = useNavigate()
  const { memberAuth, memberBoxToggle, setMemberBoxToggle, Logout } =
    useContext(AuthContext)
  return (
   <>   {/* 會員 */}
   <div
   ref={memberBoxRef}
     className={memberBoxToggle?'member_box member_box_on':'member_box member_box_off'}
   >
     <div className="triangle"></div>
       
     
    

        <div className="member_info">
          {memberAuth.authorized
            ? '歡迎 ' +
              memberAuth.memberName.substr(memberAuth.memberName.length - 2, 2)
            : '歡迎~請先登入'}
        </div>

        <div className="btn_member_box">
          {memberAuth.authorized ? (
            <>
              <a
                href="#/"
                className="btn_member"
                onClick={() => {
                  navigation('/')
                }}
              >
                會員中心
              </a>
              <a
                href="#/"
                className="btn_member_logout"
                onClick={() => {
                  Logout()
                }}
              >
                登出
              </a>
            </>
          ) : (
            <a
              href="#/"
              className="btn_member"
              onClick={() => {
                navigation('/member_login')
              }}
            >
              登入
            </a>
          )}
        </div>
      </div>
    </>
  )
}

export default NavbarMemberBox
