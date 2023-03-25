import React, { useContext,useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import AuthContext from '../../Contexts/AuthContext'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'

function NavbarMemberBox({ memberBoxRef }) {
  const navigation = useNavigate()
  const { memberAuth, memberBoxToggle, setMemberBoxToggle, Logout } =
    useContext(AuthContext)
       //modal style
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 250,
    bgcolor: '#222222de',
    color: '#fff',
    // border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
    borderRadius: '3px',
    textAlign:'center',
  }

   const [open, setOpen] = useState(false)
   const handleOpen = () => {
     setOpen(true)
   }
   const handleClose = () => {
     setOpen(false)
   }
  return (
   <>   {/* 會員 */}
   <div
   ref={memberBoxRef}
     className={memberBoxToggle?'navMember_box member_box_on':'navMember_box member_box_off'}
   >
     <div className="triangle"></div>
       
     
    

        <div className="member_info">
          {memberAuth.authorized
            ? '歡迎 ' +
              memberAuth.memberName.substring(memberAuth.memberName.length - 2, memberAuth.memberName.length)
            : '歡迎~請先登入'}
        </div>

        <div className="btn_member_box">
          {memberAuth.authorized ? (
            <>
              <a
                href="#/"
                className="btn_member_logout"
                onClick={() => {
                handleOpen()
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

      {/* 彈跳視窗 */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style }}>
          <p id="child-modal-description">確定登出?</p>
          <button
            className="btn btn-cancel"
            onClick={() => {
              Logout()
              handleClose()
            }}
            style={{ color: 'gray' }}
          >
            確認
          </button>
        </Box>
      </Modal>
    </>
  )
}

export default NavbarMemberBox
