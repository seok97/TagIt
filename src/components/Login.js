import React from "react"
import { useLocation } from "react-router-dom"

function Login({ userinfo, history }) {
  const location = useLocation()
  const user = location.state.userinfo

  return (
    <>
      <h2>이메일 : {user.user_email}</h2>
      <h2>이름 : {user.user_name}</h2>
      <h2>비밀번호 : {user.user_pw}</h2>
    </>
  )
}

export default Login
