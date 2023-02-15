import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import Modeal from '../../Mdeal/Modeal';
import PhoneCard from '../../PhoneCard/PhoneCard';
import './advertage.css'



const Advertice = () => {
    const {modeal}=useContext(AuthContext);
   
    const { data: advertise = [],refetch } = useQuery({
        queryKey: ['advertise'],
        queryFn: async () => {
            const res = await fetch('https://astor-server-ibv9wp3q8-mr7aali.vercel.app/advertise');
            const data = await res.json();
            return data;
        }
    })



   
   
    return (
        <div>

            
            <div className='mt-10'>
                { advertise.length? 
                    <h1 className='text-5xl font-bold text-center pt-10  '>Advertising <span className='text-primary'>Iteams</span></h1>
                    :
                    <></>
                }
                <div className='advertised-iteams max-w-screen-2xl mx-auto phone-container'>
        {
           advertise.map(a=><PhoneCard
           phone={a}
           key={a._id}
           ></PhoneCard>)
        }
        <Modeal
         modealData={modeal}
         refetch ={refetch }
        >
        </Modeal>


                </div>

            </div>


        </div>
    );
};

export default Advertice;