import { Box } from '@mui/system';
import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import Modeal from '../../Mdeal/Modeal';
import PhoneCard from '../../PhoneCard/PhoneCard';
import './advertage.css'



const Advertice = () => {
    const { modeal } = useContext(AuthContext);

    const { data: advertise = [], refetch } = useQuery({
        queryKey: ['advertise'],
        queryFn: async () => {
            const res = await fetch('https://astor-server-ibv9wp3q8-mr7aali.vercel.app/advertise');
            const data = await res.json();
            return data;
        }
    })





    return (
        <Box sx={{
            
           // background:'#E2EFFB',
            background:'#fffff',
        }}>


            <div className='pb-20'>
                {advertise?.length &&
                    <div>
                        <h1 className='text-5xl text-[#000] font-bold text-center pt-10  '>Suggested Products </h1>
                        <p className='text-xl text-center pt-10 text-[#000]'>Get Your Desired Product from Flash Deal !</p>
                    </div>

                }
                <div className='advertised-iteams max-w-screen-2xl mx-auto phone-container'>
                    {
                        advertise.map(a => <PhoneCard
                            phone={a}
                            key={a._id}
                        ></PhoneCard>)
                    }
                    <Modeal
                        modealData={modeal}
                        refetch={refetch}
                    >
                    </Modeal>


                </div>

            </div>


        </Box>
    );
};

export default Advertice;