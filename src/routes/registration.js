import {useState} from 'react';
import { useForm } from "react-hook-form";
import API from '../api/axiosApi';

const Registration = () => {
  const [message, setMessage] = useState('');
  const { register, handleSubmit, reset } = useForm({ shouldUseNativeValidation: true });

  const onSubmit = async (data, e) => {
    e.preventDefault();

    try {
      await API.postUser(data);
      setMessage(`thank you ${data.firstName} your registration is completed!`);
      reset();
    } catch (error) {
      console.log(error);
      setMessage('Email already exists');
    }
  };
    return (
      <div className='container'>
        <h1 className='title'>Registration</h1>
        <p className='registrationCompleted'>{message}</p>
        <div className='tasksContainer'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input  type="email"
                    name="email"
                    className='input addInput'
                    placeholder='Email'
                    {...register("email", { required: "Please enter your Email." })}
                    />
            <input  type="password"
                    name="password"
                    className='input addInput'
                    placeholder='password'
                    {...register("password",{ required: "Please enter your password." })}
                    />
            <input  type="text"
                    name="firstName"
                    className='input addInput'
                    placeholder='First Name'
                    {...register("firstName",{ required: "Please enter your First Name." })}
                    />
            <input  type="text"
                    name="lastName"
                    className='input addInput'
                    placeholder='Last Name'
                    {...register("lastName",{ required: "Please enter your Last Name." })}
                    />
            <input  type="text"
                    name="phone"
                    className='input addInput'
                    placeholder='Phone'
                    {...register("phone",{ required: "Please enter your Phone." })}
                    />
            <input className='registerSubmit' type="submit" />
          </form>
        </div>
      </div>
    );
  }

export default Registration;