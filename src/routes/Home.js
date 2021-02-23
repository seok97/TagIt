import React from "react"
import { Link } from "react-router-dom"

class Home extends React.Component {
  state = { isLogin: "false" }

  render() {
    const login = this.state.isLogin
    return (
      <div className="homepage">
        <div>로그인 상태 : {login}</div>
        <h3>아이디 : </h3>
        <h3>닉네임 : </h3>
        <div>
          <Link to="/">메인으로</Link>
        </div>
      </div>
    )
  }
}
export default Home
