import React from 'react'
import  '../App.css'
import {Link} from 'react-router-dom'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ListItem from '@material-ui/core/ListItem';

function NavBar() {
    return (
        <AppBar position="static">
        <Toolbar variant="dense">
        
        
        {/* link to marketing homepage hosted on netlify  🔼*/}
        <a>🍃</a>
        <ul className='nav-links'>
        
        <Link to='/Login'>
        <ListItem>Login</ListItem>
        </Link>

        <Link to='/Signup'>
        <ListItem>Signup</ListItem>
        </Link>

        <Link to='/Home'>
        <ListItem>Home</ListItem>
        </Link>
        


        </ul>
        </Toolbar>
         </AppBar>
    )
}


export default NavBar
