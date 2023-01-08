import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';


const MyOrders = () => {
    const { user,LogOut } = useContext(AuthContext);
    const url = `https://astor-server.vercel.app/booking?email=${user?.email}`

    const { data: bookedIteams = [] } = useQuery({
        queryKey: ['booking', user?.email],
        queryFn: async () => {
            const res = await fetch(url,{
                //jwt 
                headers:{
                    authorization: `Bearer ${localStorage.getItem('jwt-WebToken')}`
                }
            });

            if(res.status === 401 || res.status === 403){
               return LogOut();
            }
            const data = await res.json();
            return data;
        }
    })
    console.log(bookedIteams);
    return (
        
        <div>
            <h1 className='text-4xl m-5 text-primary font-bold text-center'>My Orders</h1>

            <label htmlFor="my-drawer-2" className=" drawer-for-open  drawer-button lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                
            </label>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">




                    <thead>
                        <tr>

                            <th>Mobile Name</th>
                            <th>Price</th>
                            <th>Pay</th>

                        </tr>
                    </thead>

                   {
                    bookedIteams?.map(phone=>  
                        <tbody key={phone?._id}>
         
                                 <tr>
                                    
                                     <td>
                                         <div className="flex items-center space-x-3">
                                             <div className="avatar">
                                                 <div className="mask mask-squircle w-12 h-12">
                                                     <img src={phone?.picture} alt="Avatar Tailwind CSS Component" />
                                                 </div>
                                             </div>
                                             <div>
                                                 <div className="font-bold">{phone?.bookedIteam}</div>
                                                 <div className="text-sm opacity-50">{}</div>
                                             </div>
                                         </div>
                                     </td>
                                    
                                     <td>{phone.price} $</td>
                                     <th>
                                         <button className="btn btn-primary btn-xs">details</button>
                                     </th>
                                 </tr>
         
                             
         
                               
                                 </tbody>)
                   }
                    <tfoot>
                        <tr>

                            <th></th>
                            <th></th>

                            <th></th>
                        </tr>
                    </tfoot>

                </table>
            </div>

        </div>

    );
};

export default MyOrders;