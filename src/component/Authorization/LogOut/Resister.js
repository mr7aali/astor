import { getAuth, updateProfile } from 'firebase/auth';
import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../contexts/AuthProvider';
import app from '../../../firebase/firebase.config';
import { postUser } from '../../../utility/usePostUser';
import './Resister.css'

const auth = getAuth(app)

const Register = () => {
    const { createUser, singWithGoogle } = useContext(AuthContext);


    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";



    const { register, handleSubmit } = useForm();
    const handleReister = data => {
        let rol;
        const isSeller = window.confirm('Do you want a seller?');
        if (isSeller) {
            rol = 'seller';
        }
        else{
            rol='buyer';
        }

       const data1 ={
        Name: data.Name,
        Email: data.Email,
        rol: rol
       }


        createUser(data.Email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });

                updateProfile(auth.currentUser, {
                    displayName: data.Name,
                })
                    .then(() => {
                        toast(`Hi,${user.displayName} Welcome to Astor`);
                        postUser(data1);

                    }).catch(err => console.log(err))

            })
            .catch(err => console.error(err));



    }

    const GoogleLogIn = () => {

        singWithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user);
                const data = {
                    Name: user?.displayName,
                    Email: user?.email,
                    rol: 'buyer'
                }
                postUser(data);
                navigate(from, { replace: true });
                toast(`Hi,${user?.displayName} Welcome to Astor`);


            })
    }
    return (
        <div className='login-page '>


            <div className="background">
                <div className="shape"></div>
                <div className="shape"></div>
            </div>


            <form className='register-from' onSubmit={handleSubmit(handleReister)}>
                <h3>Resister Here</h3>

                <label className='res-lavel' >Name</label>
                <input className='res-input' {...register("Name")} type="text" placeholder="Login with your email" required id="username" />
                <label className='res-lavel'>Email</label>
                <input className='res-input' {...register("Email")} type="text" placeholder="Login with your email" required id="username" />

                <label className='res-lavel' >Password</label>

                <input className='res-input' {...register("password")} type="password" placeholder="Password" required id="password" />

                <h1 className='text-lg mt-5'>Do you have an account?
                    <Link className=' text-red-600 font-bold' to={'/Login'}>  Login Now</Link>
                </h1>

                <button className='res-btn' >Register</button>
                <button onClick={GoogleLogIn} className="btn btn-outline btn-success google-btn res-btn">Register with GooGle</button>
            </form>





        </div>
    );
};

export default Register;