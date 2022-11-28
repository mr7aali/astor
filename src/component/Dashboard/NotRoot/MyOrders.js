import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import SingleMyOrders from '../SingleItea/SingleMyOrders';

const MyOrders = () => {
    const { user } = useContext(AuthContext);
    const url = `http://localhost:5000/booking?email=${user?.email}`

    const { data: bookedIteams = [] } = useQuery({
        queryKey: ['booking', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })
    console.log(bookedIteams[0]);
    return (
        <div>
            <h1 className='text-4xl m-5 text-primary font-bold text-center'>My Orders</h1>


            <div className="overflow-x-auto w-full">
                <table className="table w-full">




                    <thead>
                        <tr>

                            <th>Mobile Name</th>
                            <th>Price</th>
                            <th>Pay</th>

                        </tr>
                    </thead>

                   



{/* 

                        {
                            bookedIteams.map(b => <SingleMyOrders
                                key={b?._id}
                                phone={b}
                            ></SingleMyOrders>)
                        } */}





                   {
                    bookedIteams.map(phone=>  
                        <tbody>
         
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