import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import './Header.css'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';


const pages = ['Home', 'blog', 'dashboard'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];







const Header = () => {
    const { user, LogOut } = useContext(AuthContext);

    ;

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);




    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };



    return (
        // <div>
        //     <hr className='hidden lg:flex' />
        //     <div className="navbar  max-w-screen-2xl mx-auto ">
        //         <div className="navbar-start">
        //             <div className="dropdown">
        //                 <label tabIndex={0} className="btn btn-ghost lg:hidden">
        //                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        //                 </label>
        //                 <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

        //                     <Link to='/' className='m-3' >Home</Link>

        //                     {  user?.email ?
        //                         <>
        //                             <Link to='/dashboard' className='m-3' >Dashboard</Link>
        //                             <Link onClick={LogOut} className="m-3">Log Out</Link>
        //                         </>
        //                     :
        //                     <>
        //                         <Link to='/login' className="m-3">Login</Link>
        //                         <Link to='/register' className="m-3">Register</Link>
        //                     </>
        //                     }

        //                 </ul>
        //             </div>
        //             <Link to={'/'} href=' ' className=" normal-case text-6xl font-bold">
        //                 <img className='logo-img hidden lg:flex' src="https://i.ibb.co/N3QTn2f/images.png" alt="" srcSet="" />
        //             </Link>
        //         </div>
        //         <div className="navbar-center hidden lg:flex">
        //             <ul className="menu menu-horizontal p-0">
        //                 <li><Link to='/' className='text-2xl text-black font-semibold'>Home</Link></li>
        //                 <li><Link to='/blog' className='text-2xl text-black font-semibold'>Blog</Link></li>


        //             </ul>
        //         </div>
        //         <div className="navbar-end">
        //             {
        //                 user?.email ?
        //                     <>
        //                         <Link to='/dashboard' className="btn btn-outline btn-primary bg-base-200 hidden lg:flex">Dashboard</Link>
        //                         <Link onClick={LogOut} className="ml-2 btn hidden lg:flex">Log Out</Link>
        //                     </>
        //                     :
        //                     <>

        //                         <Link to='/login' className="btn btn-outline btn-primary bg-base-200 hidden lg:flex">Login</Link>
        //                         <Link to='/register' className="ml-2 btn  hidden lg:flex">Register</Link>
        //                     </>
        //             }




        //         </div>
        //         {/* <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}



        //     </div>
        //     <hr className='hidden lg:flex' />
        // </div>

        <AppBar sx={{bgcolor:'#000'}} position="static">


            <Container maxWidth="lg">
                <Toolbar disableGutters>
                    <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                   <Link to='/'>
                   <Typography
                        variant="h6"
                        noWrap
                        component="a"
                       
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography>
                   </Link>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >

                            <Link to='/'>
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Typography sx={{margin:'0 auto'}} textAlign="center">Home</Typography>
                                </MenuItem>
                            </Link>
                            <Link to='/dashboard'>
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Typography sx={{margin:'0 auto'}} textAlign="center">Dashboard</Typography>
                                </MenuItem>
                            </Link>
                            <Link to='/blog'>
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Typography sx={{margin:'0 auto'}} textAlign="center">Blog</Typography>
                                </MenuItem>
                            </Link>

                        </Menu>
                    </Box>
                    <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>


                        <Link to='/'><Button onClick={handleCloseUserMenu} sx={{ my: 2, color: 'white', display: 'block' }}>Home</Button></Link>
                        <Link to='/dashboard'><Button onClick={handleCloseUserMenu} sx={{ my: 2, color: 'white', display: 'block' }}>Dashboard</Button></Link>
                        <Link to='/blog'><Button onClick={handleCloseUserMenu} sx={{ my: 2, color: 'white', display: 'block' }}>Blog</Button></Link>


                    </Box>

                    <Box sx={{ flexGrow: 0 }}>

                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src={user?.photoURL} />
                            </IconButton>
                        </Tooltip>


                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >

                            <MenuItem onClick={LogOut}>
                                <Typography textAlign="center">Logout</Typography>
                            </MenuItem>

                        </Menu>
                    </Box>

                </Toolbar>

            </Container>



        </AppBar>


    );
};

export default Header;