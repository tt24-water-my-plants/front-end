import React from 'react'
import  '../App.css'
import {Link} from 'react-router-dom'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ListItem from '@material-ui/core/ListItem';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { green } from '@material-ui/core/colors';

import NavImage from '../Svg/NavImage'

const theme = createMuiTheme({
    palette: {
      primary: {
        main: green[500],
      },},});
  
function NavBar() {
    return (
        <ThemeProvider theme={theme}>
        <AppBar className={theme} position="static">
        <Toolbar className={theme}  variant="dense">
        
        <a href="https:marketing-page-that-is-hosted"><NavImage />
</a>{/* link to marketing page hosted on netlify  🔼*/}
        
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
         </ThemeProvider>
    )
}


export default NavBar
