import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import './PhoneCard.css';
import { Link } from 'react-router-dom';


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
    
    const handleCart=(id)=>{
        console.log(id);
    }

    const tic = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
    const { setModeal } = useContext(AuthContext);
    const { location, name, postedTime, resalePrice, sellerName, yearsOfUse, brandName, picture } = phone;
    return (
        // container
        <React.Fragment>

            <div className=" page-wrapper ">
                <div className="page-inner">
                    <div className="row">
                        <div className="el-wrapper shadow-lg">
                            <div className="box-up">
                                <img className="img" src={picture} alt="" />
                                <div className="img-info">
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

                                <Link className="cart" onClick={()=>handleCart(phone._id)}>
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