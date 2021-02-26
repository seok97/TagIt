const express = require("express")
const app = express()
const port = 3001

// middle
const cors = require("cors")
const bodyParser = require("body-parser")
const router = express.Router()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

app.get("/", (req, res) => {
  res.send("server on")
})

app.post("/signup", (req, res) => {
  // const userinfo = {
  //   user_email: req.query.user_email,
  //   user_pw: req.query.user_pw,
  //   user_name: req.query.user_name,
  // }
  const userinfo = req.body
  console.log(userinfo)
  res.send(userinfo)
})

app.listen(port, () => {
  console.log(`server is on at http://localhost:${port}`)
})
