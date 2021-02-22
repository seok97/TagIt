import React from "react"
import "./Home_login.css"

class HomeLogin extends React.Component {
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
                <form id="loginForm" method="post">
                  <div className="main_body_login_wrap_box_input divfelxbox">
                    <input
                      id="user_id"
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
                <a
                  className="main_body_login_wrap_box_google"
                  tabIndex="0"
                  href="/">
                  계정이 없으신가요? 가입하기
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="main_footer">
          <div className="main_footer_inner">
            소개 블로그 테스트 테스트 테스트 테스트 테스트 테스트 테스트
          </div>
        </div>
      </div>
    )
  }
}
export default HomeLogin
