import React, { useContext } from 'react';
import './Login.css'

import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import { toast } from 'react-toastify';
import { postUser } from '../../../utility/usePostUser';


const Login = () => {

    const { register,reset, handleSubmit } = useForm();
    const { singWithGoogle,logIn } = useContext(AuthContext);



    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";



    const handleLogIN =data=>{
        console.log(data);
        const {Email,password}=data;
        logIn(Email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            navigate(from, { replace: true });
            toast(`Hi,${user?.displayName} Welcome to Astor`);
        })
        .catch(error=>console.error(error));
        reset();
    }


    const GoogleLogIn =()=>{
        singWithGoogle()
        .then(result=>{
            const user = result.user;
            console.log(user);

                console.log('User login');
                fetch('https://astor-server-ibv9wp3q8-mr7aali.vercel.app/jwt',{
                    method:'POST',
                    headers:{
                        'content-type':'application/json'
                    },
                    body: JSON.stringify(user)               
                })
                .then(res=>res.json())
                .then(data=>{
                    console.log(data);
                    localStorage.setItem('jwt-WebToken',undefined);
                    localStorage.setItem('jwt-WebToken',data.token);
                })

            navigate(from, { replace: true });
            toast(`Hi,${user?.displayName} Welcome to Astor`);
            const data={
                Name:user?.displayName,
                Email:user?.email,
                rol:'buyer'
            }
            postUser(data);
        })
    }

    return (
        <div className='login-page '>


            <div className="background">
                <div className="shape"></div>
                <div className="shape"></div>
            </div>
            <form className='login-from' onSubmit={handleSubmit(handleLogIN)}>
                <h3>Login Here</h3>

                <label className='login-label' htmlFor="username">Email</label>
                <input className='login-input' {...register("Email",{
                
                })} type="text" placeholder="Login with your email" id="username"  required/>

                <label className='login-label' htmlFor="password">Password</label>

                <input className='login-input' {...register("password",{
                  
                })}  type="password" placeholder="Password"  required />
               
                <h1 className='text-lg mt-5'>Don't have an account yet?
                    <Link className=' text-red-600 font-bold' to={'/register'}>  Register Now</Link>
                </h1>

                <button className='login-btn'>Log In</button>
                <button  onClick={GoogleLogIn} className="btn btn-outline btn-success google-btn login-btn">Login with GooGle</button>
            </form>

        </div>
    );
};

export default Login;