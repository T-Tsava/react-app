const Login = () => {
  return (
    <div className='container'>
    <h1 className='title'>Login</h1>
        <div className='tasksContainer'>
          <form>
            <input  type="email"
                    className='input addInput'
                    placeholder='Email'/>
            <input  type="password"
                    className='input addInput'
                    placeholder='password'/>
          </form>
        </div>
    </div>
  );
}

export default Login;