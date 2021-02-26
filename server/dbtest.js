const mysql = require("mysql")
var connection = mysql.createConnection({
  host: "localhost",
  post: 3306,
  user: "root",
  password: "1234",
  database: "tagitdb",
})

connection.connect()

connection.query("SELECT * FROM userinfo", (e, res, fields) => {
  if (e) {
    console.log(e)
  }
  console.log(res)
})

connection.end()
