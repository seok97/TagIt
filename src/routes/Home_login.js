import React from "react"
import "./Home_login.css"
import { Link } from "react-router-dom"

import Auth from "../auth/Auth"
const auth = new Auth()

class HomeLogin extends React.Component {
  state = {
    isLoginReady: false,
    isLogin: {},
  }

  // componentDidUpdate() {
  //   this.LoginCheck()
  // }

  LoginCheck = () => {
    const { isLogin } = this.state

    if (isLogin.usercheck == undefined || isLogin.usercheck == false) {
      alert("로그인 실패")
    } else if (isLogin.usercheck !== undefined) {
      
      this.props.history.push({
        pathname: "/Login",
        state: {userinfo: isLogin.userinfo}
      })
    }
  }

  LoginHandle = (e) => {
    e.preventDefault()
    console.log(
      `authlogin으로 보내는 데이터 email : ${e.target.user_email.value} , pw : ${e.target.user_pw.value}`
    )

    Promise.resolve(
      auth.Authlogin({
        user_email: e.target.user_email.value,
        user_pw: e.target.user_pw.value,
      })
    ).then((res) => {
      this.setState(
        {
          isLogin: res,
        },
        this.LoginCheck
      )
    })
  }

  // email이 null이 아니고 pw가 6자리 이상일떄 btn 활성화
  ValueCheck = (e) => {
    var useremail,
      userpw = ""

    if (e.target.name === "user_email") useremail = e.target.value
    if (e.target.name === "user_pw") userpw = e.target.value

    // console.log(`send login info : email : ${useremail} , pw : ${userpw}`)

    !useremail && userpw.length > 3
      ? this.setState({ isLoginReady: true })
      : this.setState({ isLoginReady: false })
  }

  render() {
    const { isLoginReady } = this.state

    return (
      <div className="main">
        <div className="main_body">
          <div className="main_body_login">
            <div className="main_body_login_wrap">
              <div className="main_body_login_wrap_box_logo">
                <h1 className="main_logo_h1">TagIt</h1>
              </div>
              <div className="main_body_login_wrap_box_inputbox">
                <form id="loginForm" method="post" onSubmit={this.LoginHandle}>
                  <div className="main_body_login_wrap_box_input divfelxbox">
                    <input
                      onChange={this.ValueCheck}
                      name="user_email"
                      id="user_email"
                      className="main_login_input"
                      type="text"></input>
                    <label className="inputlabel" htmlFor="user_email">
                      사용자 이메일
                    </label>
                  </div>
                  <div className="main_body_login_wrap_box_input divfelxbox">
                    <input
                      onChange={this.ValueCheck}
                      name="user_pw"
                      id="user_pw"
                      className="main_login_input"
                      type="password"></input>
                    <label className="inputlabel" htmlFor="user_pw">
                      비밀번호
                    </label>
                  </div>
                  <div className="main_body_login_wrap_box_loginbtn divfelxbox">
                    <button
                      className={isLoginReady ? "loginbtn loginok" : "loginbtn"}
                      type="submit"
                      disabled={isLoginReady ? false : "disabled"}>
                      <div className="main_body_login_wrap_box_loginbtn_btn">
                        로그인
                      </div>
                    </button>
                  </div>
                </form>

                <div className="main_body_login_wrap_box_content">
                  <div className="logindeco"></div>
                  <div className="logindecotxt">또는</div>
                  <div className="logindeco"></div>
                </div>
                <div className="main_body_login_wrap_box_google" tabIndex="0">
                  <Link to="/emailsignup">계정이 없으신가요? 가입하기</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main_footer">
          <div className="main_footer_inner">석우현의 포트폴리오 사이트</div>
        </div>
      </div>
    )
  }
}
export default HomeLogin
