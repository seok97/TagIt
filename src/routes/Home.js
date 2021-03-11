import React from "react"
import { useLocation } from "react-router-dom"
import Nav from "../components/Nav"
import "./Home.css"

function Home() {
  const location = useLocation()
  const user = location.state.userinfo

  return (
    <div className="home_main">
      <div className="home_top">
        <div className="home_top_navi">
          <div className="home_top_navi_inner01">
            <div className="home_top_navi_inner02">
              <div className="home_top_navi_logowrap">
                <h1 className="home_top_navi_logo">TagIt</h1>
              </div>
              <ul className="navi">
                <li>로그아웃</li>
                <li>마이페이지</li>
                <li>탐색</li>
                <li>
                  <input type="text"></input>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="home_body">바디</div>
    </div>
  )
}

export default Home
