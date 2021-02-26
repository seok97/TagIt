import React from "react"
import "./Home_login.css"
import { Link } from "react-router-dom"

class HomeLogin extends React.Component {
  LoginHandle = (e) => {
    e.preventDefault()
    alert("미구현")
    // this.SignupHandle({
    //   user_email: e.target.user_email.value,
    //   user_pw: e.target.user_pw.value,
    //   user_name: e.target.user_name.value,
    // })
  }

  render() {
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
                      id="user_email"
                      className="main_login_input"
                      type="text"></input>
                    <label className="inputlabel" for="user_id">
                      사용자 이메일
                    </label>
                  </div>
                  <div className="main_body_login_wrap_box_input divfelxbox">
                    <input
                      id="user_pw"
                      className="main_login_input"
                      type="password"></input>
                    <label className="inputlabel" for="user_pw">
                      비밀번호
                    </label>
                  </div>
                  <div className="main_body_login_wrap_box_loginbtn divfelxbox">
                    <button className="loginbtn" type="submit">
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
                <a className="main_body_login_wrap_box_google" tabIndex="0">
                  <Link to="/emailsignup">계정이 없으신가요? 가입하기</Link>
                </a>
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
