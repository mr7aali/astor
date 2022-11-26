import React, { useContext } from 'react';
import './Login.css'

import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
const Login = () => {

    const { register, handleSubmit } = useForm();
    const { singWithGoogle } = useContext(AuthContext);

    const handleLogIN =data=>{
        console.log(data);
    }


    const GoogleLogIn =()=>{
        singWithGoogle()
        .then(result=>{
            const user = result.user;
            console.log(user);
        })
    }

    return (
        <div className='login-page '>


            <div class="background">
                <div class="shape"></div>
                <div class="shape"></div>
            </div>
            <form onSubmit={handleSubmit(handleLogIN)}>
                <h3>Login Here</h3>

                <label for="username">Email</label>
                <input {...register("Email")} type="text" placeholder="Login with your email" id="username" />

                <label for="password">Password</label>

                <input {...register("password")} type="password" placeholder="Password" id="password" />
               
                <h1 className='text-lg mt-5'>Don't have an account yet?
                    <Link className=' text-red-600 font-bold' to={'/register'}>  Register Now</Link>
                </h1>

                <button>Log In</button>
                <button onClick={GoogleLogIn} className="btn btn-outline btn-success google-btn">Login with GooGle</button>
            </form>

        </div>
    );
};

export default Login;