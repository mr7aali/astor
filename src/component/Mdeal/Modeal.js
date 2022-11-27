import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import './Modeal.css'
const Modeal = ({modealData}) => {
    const {user}= useContext(AuthContext);
    console.log(modealData)
    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box relative">
                            <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                            <h3 className="text-lg font-bold text-center m-5">Model <span>{modealData?.name}</span></h3>
                            <div className='nameFild'>
                              <input type="text" disabled value={user?.displayName} className="input input-bordered w-5/12 font-bold " />
                              <input type="text" placeholder="Type here" className="input input-bordered w-1/2 " />
                            </div>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        </div>
                        
                    </div>
        </div>
    );
};

export default Modeal;