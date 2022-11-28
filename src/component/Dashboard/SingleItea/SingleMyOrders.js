import React from 'react';

const SingleMyOrders = ({phone}) => {
    console.log(phone);
    return (
        <div>
               
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

                    

                      
                        </tbody>


        </div>
    );
};

export default SingleMyOrders;