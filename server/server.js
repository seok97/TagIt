const express = require("express")
const app = express()
const port = 3001

// middle
const cors = require("cors")
const bodyParser = require("body-parser")
const router = express.Router()

// DB connection
const mysql = require("mysql")
var DBconnection = mysql.createConnection({
  host: "localhost",
  post: 3306,
  user: "root",
  password: "1234",
  database: "tagitdb",
})

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

app.get("/", (req, res) => {
  res.send("server on")
})

app.post("/signup", (req, res) => {
  const userinfo = req.body
  console.log(userinfo)

  DBconnection.connect()
  DBconnection.query(
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
  DBconnection.end()
})

app.listen(port, () => {
  console.log(`server is on at http://localhost:${port}`)
})
