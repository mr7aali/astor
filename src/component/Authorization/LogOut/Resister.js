import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';


const Register = () => {
    const { createUser,singWithGoogle } = useContext(AuthContext);
    


    const { register, handleSubmit } = useForm();
    const handleReister =data=>{
        console.log(data);

        createUser(data.Email,data.password)
        .then(result=>{
            const user = result.user;
            console.log(user);
         
        })
        .catch(err=>console.error(err))

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


            <form onSubmit={handleSubmit(handleReister)}>
                <h3>Resister Here</h3>

                <label >Name</label>
                <input {...register("Name")} type="text" placeholder="Login with your email" id="username" />
                <label >Email</label>
                <input {...register("Email")} type="text" placeholder="Login with your email" id="username" />

                <label >Password</label>

                <input {...register("password")} type="password" placeholder="Password" id="password" />
               
                <h1 className='text-lg mt-5'>Do you have an account?
                    <Link className=' text-red-600 font-bold' to={'/Login'}>  Login Now</Link>
                </h1>

                <button >Log In</button>
                <button onClick={GoogleLogIn}  className="btn btn-outline btn-success google-btn">Login with GooGle</button>
            </form>
            




        </div>
    );
};

export default Register;