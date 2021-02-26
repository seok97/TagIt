import React from "react"
import { Link } from "react-router-dom"
import "./Signup.css"

class Signup extends React.Component {
  SignupHandle = (user_info) => {
    fetch("http://localhost:3001/signup", {
      method: "post",
      headers: {
        "content-type": "application/json; charset=utf-8",
        Accept: "application/json",
      },
      body: JSON.stringify(user_info),
    })
      .then((res) => res.json())
      .then((obj) => {
        console.log("succes!")
        console.log(obj)
      })
  }

  SubmitHandle = (e) => {
    e.preventDefault()

    this.SignupHandle({
      user_email: e.target.user_email.value,
      user_pw: e.target.user_pw.value,
      user_name: e.target.user_name.value,
    })
  }

  render() {
    return (
      <>
        <div className="signup_body_wrap_wrapper">
          <div>회원가입 페이지</div>
          <div className="signup_body_wrap">
            <div className="signup_body">
              <div className="signup_title_logo">
                <h1 className="main_logo_h1">TagIt</h1>
              </div>
              <div className="main_body_login_wrap_box_inputbox">
                <form id="loginForm" onSubmit={this.SubmitHandle}>
                  <div className="signup_inputbox_wrap">
                    <input
                      id="user_email"
                      name="user_email"
                      className="signup_inputbox"
                      type="text"></input>
                    <label className="signup_input_label" for="user_email">
                      사용자 이메일
                    </label>
                  </div>

                  <div className="signup_inputbox_wrap">
                    <input
                      id="user_pw"
                      name="user_pw"
                      className="signup_inputbox"
                      type="password"></input>
                    <label className="signup_input_label" for="user_pw">
                      비밀번호
                    </label>
                  </div>

                  <div className="signup_inputbox_wrap ">
                    <input
                      id="user_name"
                      naem="user_name"
                      className="signup_inputbox"
                      type="text"></input>
                    <label className="signup_input_label" for="user_name">
                      닉네임
                    </label>
                  </div>

                  <div className="main_body_login_wrap_box_loginbtn ">
                    <button className="loginbtn" type="submit">
                      <div className="main_body_login_wrap_box_loginbtn_btn">
                        회원가입
                      </div>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div>
            <Link to="/">메인으로</Link>
          </div>
        </div>
      </>
    )
  }
}

export default Signup
