import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';

const AllBuyers = () => {

    const { data: Buyers = [] ,refetch } = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/buyers');
            const data = await res.json();
            return data;
        }
    })
    console.log(Buyers)
    
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
                        Buyers?.map((b,i) => <tr>
                            <th>{i+1}</th>
                            <td>{b?.Name}</td>
                            <td>{b?.Email}</td>
                            <th>
                                <button onClick={()=>handleDelet(b)} className="btn btn-primary btn-xs">Delete Buyer</button>
                            </th>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllBuyers;