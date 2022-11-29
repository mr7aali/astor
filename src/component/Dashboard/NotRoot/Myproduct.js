import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../contexts/AuthProvider';

const Myproduct = () => {
    
    const { user } = useContext(AuthContext);
    


    const url = `http://localhost:5000/sellerproduct?email=${user?.email}`
    const { data: sellersProduct = [] } = useQuery({
        queryKey: ['sellerproduct', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })

    console.log(sellersProduct)
 
// sellersProduct?.forEach(myFunction);

// function myFunction(item) {

//     console.log(item?._id);
    
// }



    const url2 = `http://localhost:5000/bookingfardin`;
    const { data: booked = [] } = useQuery({
        queryKey: ['booking'],
        queryFn: async () => {
            const res = await fetch(url2);
            const data = await res.json();
            return data;
        }
    })
console.log(booked)
    





// console.log(booked)

    const handleAdvertise=(data)=>{
        fetch('http://localhost:5000/addadvertise', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)

        })
            .then(res => res.json())
            .then(data => {
                
                toast(`Added Successfully`)
               
            })
    }


    return (
           
        <div>
            <h1 className='text-4xl m-5 text-primary font-bold text-center'>My Orders</h1>


            <div className="overflow-x-auto w-full">
                <table className="table w-full">




                    <thead>
                        <tr>

                            <th>Mobile Name</th>
                            <th>Brandname</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Want Advertise? </th>

                        </tr>
                    </thead>

                   {
                     sellersProduct.map(phone=>  

                             
                            

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
                                                 <div className="font-bold">{phone?.name}</div>
                                                 <div className="text-sm opacity-50">{phone?.brandName}</div>
                                             </div>
                                         </div>
                                     </td>

                                     <td>{phone?.brandName}</td>
                                     <td>{phone?.resalePrice}</td>
                                     <td>
                                     {
                                        phone?.Bookingstatus ? <small className='text-primary font-bold'>Booked</small>
                                        :
                                        <><small className='text-red-600 font-bold'>
                                            Not yet
                                            </small></>
                                     }
                                    </td>
                                     
                                     <th>
                                         <button onClick={()=>handleAdvertise(phone)} className="btn btn-primary btn-xs">advertised </button>
                                     </th>
                                 </tr>
         
                             
         
                               
                                 </tbody>
                                 )
                   }
                    <tfoot>
                        <tr>

                            <th></th>
                            <th></th>
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

export default Myproduct;