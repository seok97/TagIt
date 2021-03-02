const mysql = require("mysql")

var pool = mysql.createPool({
  host: "localhost",
  post: 3306,
  user: "root",
  password: "1234",
  database: "tagitdb",
  connectionLimit: 10,
})

DBpool = (callback) => {
  pool.getConnection((e, conn) => {
    if (!e) {
      callback(conn)
    }
  })
}

module.exports = DBpool
