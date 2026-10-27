function Login() {
  return (
    <>
        <h1>Login Form</h1>
        <form>
            <label>Enter UserName</label>
            <input type="text" placeholder="name" /> <br />

            <label>Enter Password</label>
            <input type="password" placeholder="password" /> <br />
            
            <button>Submit</button>
        </form>
    </>
  )
}

export default Login