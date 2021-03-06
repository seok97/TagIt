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
            <div className="home_top_navi_logowrap">
              <h1 className="home_top_navi_logo">TagIt</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="home_body">바디</div>
    </div>
  )
}

export default Home
