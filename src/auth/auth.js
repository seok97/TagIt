function Authlogin(user_info) {
  fetch("http://localhost:3001/login", {
    method: "post",
    headers: {
      "content-type": "application/json; charset=utf-8",
      Accept: "application/json",
    },
    body: JSON.stringify(user_info),
  })
    .then((res) => {
      return res.json()
    })
    .then((res) => {
      console.log(res)
      //   var loginsession = { isLogin: true, user_info: res }
      //   return loginsession
    })
}
export default Authlogin
