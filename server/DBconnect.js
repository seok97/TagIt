const mysql = require("mysql")
var DBconnection = mysql.createConnection({
  host: "localhost",
  post: 3306,
  user: "root",
  password: "1234",
  database: "tagitdb",
})

module.exports = DBconnection
