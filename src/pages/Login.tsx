import './Login.css'
const Login = () => {
  return (
    <>
      <form action="post">
        <label htmlFor="">First Name</label>
        <input type="text" />
        <label htmlFor="">last Name</label>
        <input type="text" />
        <label htmlFor="">Email</label>
        <input type="email" />
        <label htmlFor="">Password</label>
        <input type="password" />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default Login
