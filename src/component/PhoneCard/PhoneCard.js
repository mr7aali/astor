import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import './PhoneCard.css';


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

    const [expanded, setExpanded] = React.useState(false);
    console.log(phone);
    const DeletePhone = () => {
        fetch(`https://astor-server-ibv9wp3q8-mr7aali.vercel.app/deletePhone?id=${phone._id}`, {
            method: 'DELETE'
        })

            .then(res => res.json())
            .then(data => {
                console.log(data);

            })
    }


    const handleExpandClick = () => {
        setExpanded(!expanded);
    };


    const tic = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
    const { setModeal } = useContext(AuthContext);
    const { location, name, postedTime, resalePrice, sellerName, yearsOfUse, brandName, picture } = phone;
    return (
        // container
        <div class=" page-wrapper ">
            <div class="page-inner">
                <div class="row">
                    <div class="el-wrapper shadow-lg">
                        <div class="box-up">
                            <img class="img" src={picture} alt="" />
                            <div class="img-info">
                                <div class="info-inner">
                                    <span class="p-name">{name} </span>
                                    <span class="p-company"> {brandName}</span>
                                </div>
                                <div class="a-size">
                                    <span class="size">{location}</span>
                                    
                                </div>
                               
                            </div>
                        </div>

                        <div class="box-down">
                            <div class="h-bg">
                                <div class="h-bg-inner"></div>
                            </div>

                            <a class="cart" href=" ">
                                <span class="price">$ {resalePrice}</span>
                                <span class="add-to-cart">
                                    <span class="txt">Add in cart</span>
                                    
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default PhoneCard;