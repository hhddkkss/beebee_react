import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './../styles/login.css'
import Navbar from '../component/Navbar'

// import AuthContext from '../contexts/AuthContext'

function LoginPage() {
  return (
    <>
      <Navbar />
    </>
  )
}

export default LoginPage
