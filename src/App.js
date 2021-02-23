import React from "react"
import { HashRouter, Route, Link } from "react-router-dom"
import HomeLogin from "./routes/Home_login"
import Home from "./routes/Home"
import Signup from "./routes/Signup"

function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={HomeLogin} />
      <Route path="/home" component={Home} />
      <Route path="/emailsignup" component={Signup} />
    </HashRouter>
  )
}

export default App
