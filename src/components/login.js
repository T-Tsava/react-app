import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from "../js/actions/index";
import { useForm } from "react-hook-form";
import API from '../api/axiosApi';


const Login = ( ) => {
  const [message, setMessage] = useState('');
  const { register, handleSubmit, reset } = useForm({ shouldUseNativeValidation: true });
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const onSubmit = async (data, e) => {
    e.preventDefault();

    try {
      const loginData = await API.userLogin(data);
      setMessage(`Login Succesfull!`);
      reset();
      dispatch(addUser({token: loginData.token,id:loginData.body._id}))
      navigate('/');
    } catch (error) {
      setMessage('Something went wrong try again!');
    }
  };

  return (
    <div className='container'>
    <h1 className='title'>Login</h1>

    <p className='registrationCompleted'>{message}</p>
        <div className='tasksContainer'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input  type="email"
                    className='input addInput'
                    placeholder='Email'
                    {...register("email", { required: "Please enter your Email." })}
                    />
            <input  type="password"
                    className='input addInput'
                    placeholder='password'
                    {...register("password", { required: "Please enter your password." })}
                    />
            <input className='registerSubmit' type="submit" />
          </form>
        </div>
    </div>
  );
}

export default Login;