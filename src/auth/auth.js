class Auth {
  // 회원가입
  Authsignup = (user_info) => {
    fetch("http://localhost:3001/signup", {
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
        this.setState = { isLogin: res.sqlstat }
        console.log(this.state.isLogin)
        res.sqlstat ? alert("회원가입 완료!") : alert("회원가입 실패!")
      })
  }

  // 로그인
  Authlogin = async (user_info) => {
    var checkdata = {}

    await fetch("http://localhost:3001/login", {
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
        checkdata = res
        return res
      })

    return checkdata
  }
}

export default Auth
