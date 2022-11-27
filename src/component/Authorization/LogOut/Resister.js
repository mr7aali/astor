import { getAuth, updateProfile } from 'firebase/auth';
import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../contexts/AuthProvider';
import app from '../../../firebase/firebase.config';
const auth = getAuth(app)

const Register = () => {
    const { createUser, singWithGoogle } = useContext(AuthContext);


    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";



    const { register, handleSubmit } = useForm();
    const handleReister = data => {


        createUser(data.Email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });

                updateProfile(auth.currentUser,{
                    displayName: data.Name,
                })
                .then(()=>{

                }).catch(err=>console.log(err))

            })
            .catch(err => console.error(err))

    }

    const GoogleLogIn = () => {
        singWithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });


            })
    }
    return (
        <div className='login-page '>


            <div class="background">
                <div class="shape"></div>
                <div class="shape"></div>
            </div>


            <form onSubmit={handleSubmit(handleReister)}>
                <h3>Resister Here</h3>

                <label >Name</label>
                <input {...register("Name")} type="text" placeholder="Login with your email" required id="username" />
                <label >Email</label>
                <input {...register("Email")} type="text" placeholder="Login with your email" required id="username" />

                <label >Password</label>

                <input {...register("password")} type="password" placeholder="Password" id="password" />

                <h1 className='text-lg mt-5'>Do you have an account?
                    <Link className=' text-red-600 font-bold' to={'/Login'}>  Login Now</Link>
                </h1>

                <button >Log In</button>
                <button onClick={GoogleLogIn} className="btn btn-outline btn-success google-btn">Login with GooGle</button>
            </form>





        </div>
    );
};

export default Register;