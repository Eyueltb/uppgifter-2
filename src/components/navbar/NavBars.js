
import React,{ useEffect, useState} from 'react'
import {ThemeProvider} from "@mui/material";
import {Grid} from "@material-ui/core";
import {Link} from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useWindowSize from './useWindowSize';



export const NavBars = () => {

    const [checkWindowSize, setCheckWindowSize] = useState();
    const {width, height} = useWindowSize();
    useEffect(() => {
        width < 600 ? setCheckWindowSize(false) : setCheckWindowSize(true)
    }, [width])
    return (
        <ThemeProvider >
                  <AppBar position="static" color={"primary"} variant={"outlined"} >
                <Toolbar>
                <Grid container direction="row" justifyContent="space-around" alignItems="center">
                        <Grid>
                      
                            <Link style={{textDecoration: 'none', color: 'inherit'}} to="/home"> Home</Link>
                        </Grid>
                        <Grid>
                            <Link style={{textDecoration: 'none', color: 'inherit'}} to="/createCustomer"> Create Customer</Link> 
                        </Grid>

                    </Grid>
                </Toolbar>
            </AppBar>
        </ThemeProvider>

    )
}
