import React from "react"

function Login({ userinfo }) {
  const { user_email, user_pw, user_name } = userinfo || {}
  return (
    <>
      <h2>이메일 : {user_email}</h2>
      <h2>이름 : {user_name}</h2>
      <h2>비밀번호 : {user_pw}</h2>
    </>
  )
}

export default Login
