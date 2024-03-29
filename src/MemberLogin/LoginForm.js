import axios from 'axios'
import { useContext,useRef} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import './../styles/login.css'
import { LOGIN } from './../component/LoginApi'
import AuthContext from '../Contexts/AuthContext'

function LoginForm(props) {
  const { loginForm, setLoginFormValue, activeClass, setInfoState, errorMessage, handleLoginChange,show,setShow,googleLoginUrl,setLoginForm,handleOpen } = props

  //引入setAuth
  const { setMemberAuth } = useContext(AuthContext)
  const navigation = useNavigate()
  const googleLink = useRef(null)



  

  return (
    <>
      <div
        className={activeClass(
          'form_area',
          'login_form_out form_area',
          'login_form_out form_area'
        )}
      >
        <div className="login_form_title">Welcome back</div>
        
        <div className="now_page login_mobile_hidden"
        onClick={(e)=>{
          e.preventDefault()
          
          setLoginForm({
            email: 'yen1@test.com',
            password: 'Qq12345',
          })
        }}>Log in</div>
   
        <form
          name="login_form"
          className="login_form"
          onSubmit={(e) => {
            e.preventDefault()
         
          }}
        >
          <div className="form_box">
            <label className="label">E-mail</label>
            <input
              type="text"
              placeholder="E-mail"
              name="email"
              className="form_input"
              value={loginForm.email}
              onChange={(e) => {
                setLoginFormValue(e)
                handleLoginChange(e,1)
              }}
            />
            <div className="login_input_alert_info input_alert_true">
              {errorMessage.email_l}
            </div>
          </div>
          <div className="form_box">
            <label className="label">密碼</label>
            <input
              type={show?'text':'password'}
              placeholder="Password"
              name="password"
              className="form_input"
              value={loginForm.password}
              onChange={(e) => {
                setLoginFormValue(e)
                handleLoginChange(e,2)

              }}
            />
            <div onMouseDown={()=>{
              setShow(true)
            }} onMouseUp={()=>{
              setShow(false)
            }} 
            className="changeEye">
              {show?<i  className="fa-solid fa-eye"></i>:<i className="fa-solid fa-eye-slash"></i>}
            </div>
            
            <div className="login_input_alert_info input_alert_true">
              {errorMessage.password_l}
            </div>
          </div>
          
         
          <div className="form_btn">
            {/* <button
              onClick={(e) => {
                e.preventDefault()
              }}
              className="loginPage_button forget_pass_btn"
            >
              忘記密碼
            </button> */}
            <button 
            onClick={ (e)=>{e.preventDefault()
              if(!!errorMessage.isOkL&&loginForm.email.length>0&&loginForm.password.length>0){
               //登入送去API
                  axios.post(LOGIN, { ...loginForm }).then((response) => {
              if (response.data.success) {
                const { memberEmail, memberId,memberName, token } = response.data
                //setLocalStorage
                localStorage.setItem(
                  'beebeeMemberAuth',
                  JSON.stringify({
                    memberId,
                    memberEmail,
                    memberName,
                    token,
                  })
                )
                //console.log(memberEmail, memberId)
                setInfoState(2)
                handleOpen()

                //setAuth
                setMemberAuth({
                  authorized: true,
                  memberId: memberId,
                  memberEmail: memberEmail,
                  memberName:memberName,
                  token: token,
                })
                //console.log(memberAuth)
              } else {
                setInfoState(3)
                handleOpen()
              }
               })
               }else{
                  setInfoState(3)
                  handleOpen()
              }
            
             
           
            }} type="submit" className="loginPage_button login_form_btn">
              登入
            </button>
          </div>

          <div className="form_btn">
            <button
              className="loginPage_button google_login_btn"
              onClick={(e) => {
                e.preventDefault()
                if(googleLink){
                  googleLink.current.click()
                }
              }}
            >
             <i className="fa-brands fa-google" style={{color: "#DB4437"}}></i> Google 登入
            </button>
            <Link ref={googleLink} className='d-none' to={googleLoginUrl}></Link>
          </div>
        </form>
      </div>
    </>
  )
}

export default LoginForm
