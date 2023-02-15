import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import AddProduct from './NotRoot/AddProduct';
import AllBuyers from './NotRoot/AllBuyers';
import MyOrders from './NotRoot/MyOrders';

const Dashboard = () => {


    const { user } = useContext(AuthContext);
    const [dbUser, setdbUser] = useState();
    const [loader, setLoader] = useState(true);
    useEffect(() => {
        const url = `https://astor-server-ibv9wp3q8-mr7aali.vercel.app/userrol?email=${user?.email}`
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
        <div>

            {
                (dbUser[0]?.rol === 'buyer') && <MyOrders></MyOrders>
            }
            {
                dbUser[0]?.rol === 'seller' &&
                
                    <AddProduct></AddProduct>
                    // <li><Link className='text-xl font-bold'>  My Products</Link></li>
                    // <li><Link className='text-xl font-bold'>  My buyers</Link></li>       
            }
            {
                dbUser[0]?.rol === 'admin' &&
                <AllBuyers></AllBuyers>
            }
        </div>
    );
};

export default Dashboard;