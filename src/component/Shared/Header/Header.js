import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import './Header.css'
const Header = () => {
    const {user,LogOut}=useContext(AuthContext);
    console.log(user)

    return (
        <div>
            <hr />
            <div className="navbar  max-w-screen-2xl mx-auto ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a href=' '>Item 1</a></li>

                            <li><a href=' '>Item 3</a></li>
                        </ul>
                    </div>
                    <Link to={'/'} href=' ' className=" normal-case text-6xl font-bold">
                        <img className='logo-img' src="https://i.ibb.co/N3QTn2f/images.png" alt="" srcset="" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to='/' className='text-2xl text-black font-semibold'>Home</Link></li>
                        <li><Link to='/' className='text-2xl text-black font-semibold'>Home</Link></li>
                        <li><Link to='/' className='text-2xl text-black font-semibold'>Home</Link></li>
                        <li><Link to='/' className='text-2xl text-black font-semibold'>Home</Link></li>

                    </ul>
                </div>
                <div className="navbar-end">
             {
                user?.email ?
                <Link onClick={LogOut}  className="ml-2 btn ">Log Out</Link>
                :
                <>
                
                <Link to='/login' className="btn btn-outline btn-primary bg-base-200">Login</Link>
                <Link to='/register' className="ml-2 btn ">Register</Link>
                </>
             }



               
                </div>

            </div>
            <hr />
        </div>
    );
};

export default Header;