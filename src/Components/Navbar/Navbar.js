import React from 'react'
import { AppBar, Typography, Toolbar, Avatar, IconButton, MenuItem, Menu } from '@material-ui/core';
import useStyles from './styles';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <AppBar className={classes.appBar} color="inherit" >
            <div className={classes.brandContainer} >
                <a href='/'><img className={classes.image} alt="icon" height="60" /></a>
                {/* <Typography className={classes.heading} variant="h2" align="center">ASKrypto</Typography> */}
                <Toolbar className={classes.toolbar} >
                    <Link to="/learn" className={classes.link}>
                        Learn
                    </Link>
                    <Link to="/market" className={classes.link}>
                        Market
                    </Link>
                    <Link to="/contact" className={classes.link}>
                        Trust Circles
                    </Link>
                    <Link to="/faq" className={classes.link}>
                        Chat
                    </Link>
                    <Link to="/faq" className={classes.link}>
                        About
                    </Link>
                    <div className={classes.profile}>
                        <Typography className={classes.userName} variant="h6">Name</Typography>
                        {/* <Avatar className={classes.purple}>N</Avatar> */}
                        <IconButton
                            onClick={handleClick}
                            size="small"
                            sx={{ ml: 2 }}
                            aria-controls={open ? 'account-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                        >
                            <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
                        </IconButton>
                    </div>
                </Toolbar>
            </div>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 100,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem>
                    Add another account
                </MenuItem>
                <MenuItem>
                    Settings
                </MenuItem>
            </Menu>
        </AppBar>

    );
}

export default Navbar