import React from "react"
import { Switch, Redirect, BrowserRouter, Route, Link } from "react-router-dom"
import HomeLogin from "./routes/Home_login"
import Home from "./routes/Home"
import Signup from "./routes/Signup"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={HomeLogin} />
        <Route path="/home" component={Home} />
        <Route path="/emailsignup" component={Signup} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
