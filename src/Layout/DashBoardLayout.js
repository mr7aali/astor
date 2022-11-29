import React, { useContext, useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../component/Shared/Header/Header';
import { AuthContext } from '../contexts/AuthProvider';




const DashBoardLayout = () => {

    const { user } = useContext(AuthContext);
    const [dbUser, setdbUser] = useState();
    const [loader, setLoader] = useState(true);
    useEffect(() => {
        const url = `https://astor-server.vercel.app/userrol?email=${user?.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setdbUser(data);
                setLoader(false);
            })

    }, [user?.email])

    if (loader) {
        return;
    }
  

    return (
        <div className=''>
            <Header></Header>
            <div className="drawer drawer-mobile max-w-screen-2xl mx-auto ">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content  ">
                    <Outlet></Outlet>


                </div>
                <div className="drawer-side ">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">


                        {
                            (dbUser[0]?.rol === 'buyer') && <li><Link to='/Dashboard' className='text-xl font-bold'> My orders</Link></li>
                        }



                        {
                            dbUser[0]?.rol === 'seller' &&
                            <>
                                <li><Link to='/Dashboard' className='text-xl font-bold' > Add product</Link></li>
                                <li><Link to='/Dashboard/myproduct' className='text-xl font-bold'>  My Products</Link></li>
                                <li><Link to='/Dashboard/mybuyers' className='text-xl font-bold'>  My buyers</Link></li>
                            </>
                        }

                        {
                            dbUser[0]?.rol === 'admin' && 
                            <>
                                
                                <li><Link to='/Dashboard' className='text-xl font-bold'>   All buyers</Link></li>
                                <li><Link to='/Dashboard/allseller' className='text-xl font-bold'> All Sellers </Link></li>
                                <li><Link to='/Dashboard/allseller' className='text-xl font-bold'> Reported Iteams </Link></li>
                            </>
                        }




                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashBoardLayout;