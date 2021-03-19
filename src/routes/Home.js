import React, { useState } from "react"
import { useLocation } from "react-router-dom"
import Home_Subs from "../components/Home_Subs"
import Home_Mypage from "../components/Home_Mypage"
import "./Home.css"



function Home() {
  const [homenav, setHomenav] = useState("Home_Subs")
  const location = useLocation()
  const user = location.state.userinfo
  
  // function clickev(page) {
  //   setHomenav(page)
  // }
  
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
      <div className="home_body">
        <div className="home_body_contents">
          {
            homenav === "Home_Subs" ? <Home_Subs />:<Home_Mypage />
          }
        </div>
      </div>
    </div>
  )
}

export default Home
