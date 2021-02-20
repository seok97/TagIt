import React from "react"
import "./Home_login.css"

class HomeLogin extends React.Component {
  render() {
    return (
      <div className="main">
        <div className="main_body">
          <div className="main_body_login">
            <div className="main_body_login_wrap">
              <div className="main_body_login_wrap_box">
                <div className="main_body_login_wrap_box_logo"></div>
                <div className="main_body_login_wrap_box_inputbox">
                  <div className="main_body_login_wrap_box_input">
                    <input type="text"></input>
                  </div>
                  <div className="main_body_login_wrap_box_input">
                    <input type="password"></input>
                  </div>
                  <div className="main_body_login_wrap_box_loginbtn">
                    로그인버튼
                  </div>
                  <div className="main_body_login_wrap_box_content">
                    --- 또는 ---
                  </div>
                  <div className="main_body_login_wrap_box_google">
                    구글 로그인
                  </div>
                </div>
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
