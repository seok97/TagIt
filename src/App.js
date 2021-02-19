import React from "react"
import { HashRouter, Route } from "react-router-dom"
import HomeLogin from "./routes/Home_login"

function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={HomeLogin} />
    </HashRouter>
  )
}

export default App
