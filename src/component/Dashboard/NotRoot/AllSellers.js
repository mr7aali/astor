import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllSellers = () => {
    
    const { data: Sellers = [],refetch } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/sellers');
            const data = await res.json();
            return data;
        }
    })



    const handleDelet=(data)=>{
        fetch(`http://localhost:5000/deleteBuyers?id=${data?._id}`, {
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            refetch();
        })
    }


    return (
        <div className="overflow-x-auto">
            <table className="table w-full">

                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        Sellers?.map((b,i) => <tr>
                            <th>{i+1}</th>
                            <td>{b?.Name}</td>
                            <td>{b?.Email}</td>
                            <th>
                                <button onClick={()=>handleDelet(b)} className="btn btn-primary btn-xs">Delet Seller</button>
                            </th>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllSellers;