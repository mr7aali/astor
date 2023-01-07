import { Button, Divider } from '@mui/material';
import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import './PhoneCard.css';
import { Box } from '@mui/system';


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

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };


    const tic = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
    const { setModeal } = useContext(AuthContext);
    const { location, name, postedTime, resalePrice, sellerName, yearsOfUse } = phone;
    return (


        

        <Card sx={{ maxWidth: 345, position:'relative' }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        R
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={sellerName}
              
             
                subheader={postedTime}
            />
            <CardMedia
                component="img"
                // height="194"
                sx={{ height: '200px' }}
                image={phone?.picture}
                alt="Paella dish"
            />
            <CardContent>

                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography gutterBottom variant="p" component="div">
                        <span style={{ color: 'blue', fontWeight: '500' }}>{resalePrice}$</span>
                    </Typography>
                </Box>


               






                <Box sx={{ display: 'grid' , gridTemplateColumns: '1fr 1fr' }}>
                    <Box  ox sx={{borderRight:'1px solid #ADA5A2'}}>
                        <Typography variant="body2" color="text.secondary">
                        Asking Price: {resalePrice}$
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Used: {yearsOfUse}y
                        </Typography>
                        <Typography  variant="body2" color="text.secondary">
                        Seller: {sellerName }  { phone?.isVerified &&
                  <TaskAltIcon/> 
                   }
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                     
                        Location: {location}
                        </Typography>
                    </Box>
                    <Box sx={{marginLeft:'5px'}} >
                        <Typography variant="body2" color="text.secondary">
                        Original Price: {phone.originalPrice}$
                        </Typography>
    
                    </Box>
                </Box>


            </CardContent>
            <CardActions sx={{ height:'50px'}} disableSpacing>



               




            </CardActions>

            <Button
                    variant="contained"
                    color="error"
                    fullWidth
                    sx={{
                        cursor: 'default',
                        position:'absolute',
                        bottom:'0px',
                       


                    }}
                >
                    <label
                        style={{
                            cursor: 'pointer',
                            width: '100%'
                        }}
                        onClick={() => setModeal(phone)} htmlFor="my-modal-3" >Book Now</label>
                </Button>

        </Card>

    );
};

export default PhoneCard;