import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
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
import PersonIcon from '@mui/icons-material/Person';
import TemporaryDrawer from '../../Home/SideCart/SideCart';

const Header = () => {
    const { user, LogOut } = useContext(AuthContext);


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

        <React.Fragment>

            <AppBar sx={{ bgcolor: '#149777' }} position="static">


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
                                        <Typography sx={{ margin: '0 auto' }} textAlign="center">Home</Typography>
                                    </MenuItem>
                                </Link>
                                <Link to='/dashboard'>
                                    <MenuItem onClick={handleCloseNavMenu}>
                                        <Typography sx={{ margin: '0 auto' }} textAlign="center">Dashboard</Typography>
                                    </MenuItem>
                                </Link>
                                <Link to='/blog'>
                                    <MenuItem onClick={handleCloseNavMenu}>
                                        <Typography sx={{ margin: '0 auto' }} textAlign="center">Blog</Typography>
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
                            <Link to='/addpost'><Button onClick={handleCloseUserMenu} sx={{ my: 2, color: 'white', display: 'block' }}>Add Post</Button></Link>
                            <Link to='/dashboard'><Button onClick={handleCloseUserMenu} sx={{ my: 2, color: 'white', display: 'block' }}>Dashboard</Button></Link>
                            <Link to='/blog'><Button onClick={handleCloseUserMenu} sx={{ my: 2, color: 'white', display: 'block' }}>Blog</Button></Link>


                        </Box>
                        {
                            user ?
                                <>
                                    <div className='mx-12'>
                                        <TemporaryDrawer />
                                    </div>
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
                                </>
                                :
                                <>
                                    <Link to='/register'>
                                        <Box sx={{ marginLeft: '10px' }}>
                                            <Button
                                                sx={{
                                                    border: '1px solid white',
                                                    padding: '4px 20px '
                                                }}
                                                variant='text'

                                            >
                                                <span style={{ textTransform: 'none' }} className='text-[#fff]'>SingUp</span>
                                            </Button>
                                        </Box>

                                    </Link>


                                    <Link to='/login'>
                                        <Box sx={{ marginLeft: '10px', marginRight: '10px' }}>
                                            <Button
                                                sx={{

                                                    padding: '4px 20px '
                                                }}
                                                startIcon={< PersonIcon sx={{ color: '#ffff', width: '35px', height: '35px' }} />}

                                            >
                                                <span style={{ textTransform: 'none' }} className='text-[#fff]'>Sing In</span>
                                            </Button>
                                        </Box>
                                    </Link>
                                    <div className='bg-[#FFC800] cursor-pointer rounded-md'>
                                        <p className='text-[#000] font-bold p-3 '>Post Your AD</p>
                                    </div>
                                </>
                        }
                    </Toolbar>

                </Container>


            </AppBar>
        </React.Fragment>


    );
};

export default Header;