const express = require("express")
const app = express()
const port = 3001

// middle
const cors = require("cors")
const bodyParser = require("body-parser")
// db pool
const DBpool = require("./DBpool")
const router = express.Router()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

app.get("/", (req, res) => {
  res.send("server on")
})

// 회원가입
app.post("/signup", (req, res) => {
  const userinfo = req.body
  console.log(userinfo)

  DBpool((conn) => {
    conn.query(
      `INSERT INTO userinfo (user_email, user_pw, user_name) VALUES ('${userinfo.user_email}', ${userinfo.user_pw}, '${userinfo.user_name}');`,
      (e, result, fields) => {
        if (e) {
          console.log(e)
          res.send({ sqlstat: false })
        } else {
          console.log("signup success!")
          res.send({ sqlstat: true })
        }
      }
    )
    conn.release()
  })
})

// 로그인
app.post("/login", (req, res) => {
  const userinfo = req.body
  console.log("server : res file = ")
  console.log(userinfo)

  DBpool((conn) => {
    conn.query(
      `SELECT user_email, user_name FROM userinfo WHERE user_email='${userinfo.user_email}' AND user_pw='${userinfo.user_pw}';`,
      (e, result, fields) => {
        if (e) {
          console.log(e)
          res.send({ sqlstat: "db error" })
        } else {
          console.log("db connect success")
          !result[0]
            ? res.send({ usercheck: false })
            : res.send({ usercheck: true, userinfo: result[0] })
        }
      }
    )
    conn.release()
  })
})

app.listen(port, () => {
  console.log(`server is on at http://localhost:${port}`)
})
