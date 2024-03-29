import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';

const AllBuyers = () => {

    const { data: Buyers = [], refetch } = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/buyers');
            const data = await res.json();
            return data;
        }
    })
         Buyers.map(B=>console.log(B.verification));

    const handleDelet = (data) => {
        fetch(`http://localhost:5000/deleteBuyers?id=${data?._id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                refetch();
            })
    }

    const veryFication = (data) => {
 
        fetch(`http://localhost:5000/verifyUser?id=${data._id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                refetch();
            })

    }

    return (
        <div className="overflow-x-auto">
             <label htmlFor="my-drawer-2" className=" drawer-for-open  drawer-button lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                
            </label>
            <table className="table w-full">

                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Varification </th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        Buyers?.map((b, i) => <tr>
                            <th>{i + 1}</th>
                            <td>{b?.Name}</td>
                            <td>{b?.Email}</td>
                            <th>


                                <button onClick={()=>veryFication(b)} className="btn btn-primary btn-xs">
                                 {
                                    b?.verification ?
                                    <span>Verified</span>
                                    :
                                    <span>Click For Verfied</span>
                                 }      
                                    </button>


                            </th>
                            <th>
                                <button onClick={() => handleDelet(b)} className="btn btn-primary btn-xs">Delete Buyer</button>
                            </th>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllBuyers;