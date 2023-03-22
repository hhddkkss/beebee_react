import React,{useEffect,useState,useContext} from 'react'
import queryString from 'query-string';
import axios from 'axios';
import {GOOGLE_LOGIN_DATA,LOGIN } from '../component/LoginApi'
import { useNavigate } from 'react-router-dom';
import AuthContext from '../Contexts/AuthContext';



function BeeLoginGoogle() {
    const navigation = useNavigate()
    const{setMemberAuth} = useContext(AuthContext)
    const parsed = queryString.parse(window.location.search);
    console.log('qs',typeof parsed);

    const [loginForm, setLoginForm] = useState({
        email: '',
        password: '',
      })

    const getGoogleMember = async()=>{
     if(Object.keys(parsed).length>0){
       const result =  await axios.post(GOOGLE_LOGIN_DATA,{
         qq:parsed
       })
       console.log('result',result);
       if(result.statusText=='OK'){
        setLoginForm({
            email: result.data.email,
            token:result.data.token,
            name:result.data.name
        })
       }
     }
    }

    const checkLogin=async()=>{
        if(loginForm.email.length>0){
            //登入送去API
            axios.post('http://localhost:3003/googleAuth/isMember', {email:loginForm.email }).then((response) => {
                console.log('isIn?',response);
                if (response.data.success) {
                  const { memberId,memberName} = response.data
                  //setLocalStorage
                  localStorage.setItem(
                    'beebeeMemberAuth',
                    JSON.stringify({
                        memberId:memberId,
                        memberEmail:loginForm.email,
                        memberName:memberName,
                      token:loginForm.token,
                    })
                  )
                  //console.log(memberEmail, memberId)
                 
                  //setAuth
                  setMemberAuth({
                    authorized: true,
                    memberId: memberId,
                    memberEmail: loginForm.email,
                    memberName:memberName,
                    token: loginForm.token,
                  })
                  navigation('/')
                  //console.log(memberAuth)
                } else {
                    navigation('/member_login',{state:{isActive:2,text:'您尚未註冊',name:loginForm.name,email:loginForm.email}})
                   }
                 })
        }
    }
    useEffect(()=>{getGoogleMember()},[])
    useEffect(()=>{checkLogin()},[loginForm])
  return (
    <div></div>
  )
}

export default BeeLoginGoogle