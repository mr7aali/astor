import React, { useContext } from 'react';

import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import './PhoneCard.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { addToCart, loadPHONE } from '../../Redux/ActionCreators/productAction';
import { MdDeleteForever } from 'react-icons/md'
import { DeletePhone } from '../../utility/usePostUser';
import { RELOAD_ALL_PHONE } from '../../Redux/actionTypes/actionTypes';
import { AuthContext } from '../../contexts/AuthProvider';




const ExpandMore = styled((props) => {
    const { expand, ...other } = props;




    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));



const PhoneCard = ({ phone }) => {
    
    // const [expanded, setExpanded] = React.useState(false);
    const { _id,sellerEmail, location, name, postedTime, resalePrice, sellerName, yearsOfUse, brandName, picture } = phone;
    // const handleExpandClick = () => {
    //     setExpanded(!expanded);
    // };

    // const handleCart = (id) => {
    //     console.log(id);
    // }
   const { user } = useContext(AuthContext);
   const AuthEmail = user?.email;
    const isSeller =( AuthEmail === sellerEmail );
    console.log(isSeller);


    const tic = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>

    

    const dispatch = useDispatch();
    return (

        <React.Fragment>

            <div className=" page-wrapper ">
                <div className="page-inner">
                    <div className="row ">
                        <div className="el-wrapper shadow-lg relative">
                         {
                            isSeller && 
                            <button  className='text-[#06201e] cursor-pointer z-10 p-2 mt-1 mr-2 bg-black border  rounded-full  absolute right-3'
                                onClick={() => {
                                    dispatch(loadPHONE(phone));
                                    DeletePhone(_id);
                                }
                                             

                                }
                            >

                                <MdDeleteForever className='text-white text-[30px]' />
                            </button>
                         }
                            
                            <div className="box-up">



                                <img className="img" src={picture} alt="" />
                                <div className="img-info  " >

                                    <div className="info-inner">
                                        <span className="p-name">{name} </span>
                                        <span className="p-company"> {brandName}</span>
                                    </div>
                                    <div className="a-size">

                                        <span className="size">{location}</span>

                                    </div>

                                </div>
                            </div>

                            <div className="box-down">

                                <div className="h-bg">
                                    <div className="h-bg-inner"></div>
                                </div>

                                <Link className="cart" onClick={() => dispatch(addToCart(phone))}>
                                    <span className="price">$ {resalePrice}</span>
                                    <span className="add-to-cart">
                                        <span className="txt">Add in cart</span>

                                    </span>
                                </Link>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>

    );
};

export default PhoneCard;