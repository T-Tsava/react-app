const Registration = () => {
    return (
      <div className='container'>
        <h1 className='title'>Registration</h1>
        <div className='tasksContainer'>
          <form>
            <input  type="email"
                    name="email"
                    className='input addInput'
                    placeholder='Email'/>
            <input  type="password"
                    name="password"
                    className='input addInput'
                    placeholder='password'/>
            <input  type="text"
                    name="firstName"
                    className='input addInput'
                    placeholder='First Name'/>
            <input  type="text"
                    name="lastName"
                    className='input addInput'
                    placeholder='Last Name'/>
            <input  type="text"
                    name="phone"
                    className='input addInput'
                    placeholder='Phone'/>
          </form>
        </div>
      </div>
    );
  }

export default Registration;