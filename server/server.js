const express = require("express")
const app = express()
const port = 3001

app.get("/", (req, res) => {
  res.send("this is server")
})

app.listen(port, () => {
  console.log(`server is on at http://localhost:${port}`)
})
