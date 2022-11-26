import React from 'react';
import './Login.css'
import { useState } from "react";
import { useForm } from "react-hook-form";
const Login = () => {


    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");

    return (
        <div className='login-page '>


            <div class="background">
                <div class="shape"></div>
                <div class="shape"></div>
            </div>
            <form>
                <h3>Login Here</h3>

                <label for="username">Email</label>
                <input {...register("Email")} type="text" placeholder="Login with your email" id="username" />

                <label for="password">Password</label>
                <input {...register("password")} type="password" placeholder="Password" id="password" />
                <button>Log In</button>
                <button className="btn btn-outline btn-success google-btn">Login with GooGle</button>
            </form>

        </div>
    );
};

export default Login;