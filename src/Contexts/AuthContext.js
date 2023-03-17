// README!!拿取以登入會員資料
//step1: 在頁面引用
//=>import AuthContext from '../Contexts/AuthContext'
//step2: function裡使用useContext
//=> const { memberAuth } = useContext(AuthContext)
//裡頭即有 memberEmail,memberId,token

import { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom' //頁面轉向hook

const AuthContext = createContext({})
export default AuthContext

export const AuthContextProvider = function ({ children }) {
  //usenavigate
  const navigate = useNavigate()

  //預設未登入狀態
  const unAuth = {
    authorized: false,
    memberId: 0,
    memberEmail: '',
    memberName:'',
    token: '',
  }
  let initAuth = { ...unAuth }

  const str = localStorage.getItem('beebeeMemberAuth')
  try {
    if (str) {
      const localAuth = JSON.parse(str)
      if (localAuth.token && localAuth.memberId && localAuth.memberEmail && localAuth.memberName) {
        initAuth = {
          authorized: true,
          memberId: localAuth.memberId,
          memberEmail: localAuth.memberEmail,
          memberName: localAuth.memberName,
          token: localAuth.token,
        }
      }
    }
  } catch (ex) {}

  const [memberAuth, setMemberAuth] = useState(initAuth)
  const [navbarType, setNavbarType] = useState('light')
  const [memberBoxToggle, setMemberBoxToggle] = useState(false)

  const Logout = () => {
    localStorage.removeItem('beebeeMemberAuth')
    setMemberAuth(unAuth)
    // navigate('/')
  }

  return (
    <AuthContext.Provider
      value={{ memberAuth, setMemberAuth, Logout, navbarType, setNavbarType,memberBoxToggle,setMemberBoxToggle }}
    >
      {/* value才是預設值 */}
      {children}
    </AuthContext.Provider>
  )
}
