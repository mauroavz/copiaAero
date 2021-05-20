import React from 'react';
import {
    makeStyles,
    Grid,
    Typography,
    useMediaQuery,
    useTheme,
    Box,
    Paper
  } from "@material-ui/core";


// Internal components
import acamica from '../../assets/images/imgThirHome/acamica.png';



const useStyles = makeStyles((theme) => ({
    divImg: {
        marginLeft: '8%',
        marginRight: '8%',
        background: '#EEE5FF',
        position: 'absolute',
        top: '185%',
        "&:hover > img":{
            transform: 'scale(1.1)',
            msTransform:'scale(1.2)',// IE 9 
            mozTransform:'scale(1.2)', // Firefox 
            webkitTransform:'scale(1.2)', // Safari and Chrome 
            oTransform:'scale(1.2)', // Ope
            transition: '1s',


        },
    },
    img: {
        display: 'block',
        marginLeft: 'auto',
        marginRight: '0%',
        marginTop: '5%',
        width: '70%',
        
       
    },
    paper: {
        position: 'absolute',
        right: '55%',
        top: '7%',
        width: '50%',
        height: '60%',
    }
    
  }));


const ThirdHome = () => {
    const theme = useTheme()
    const classes = useStyles();
    const isMatch = useMediaQuery(theme.breakpoints.down("xs"));
    return ( 
        <>
        {isMatch ? (
        <Box style={{ backgroundColor:'white', minHeight: '100vh', display: 'flex', alignItems: 'center', minWidth: '110vh' }}>
                 <Grid container className={classes.gridprincipalsmoll}>          
                </Grid>
                </Box>
                ) : (
                <Box style={{ backgroundColor:'white', minHeight: '80vh', display: 'flex', alignItems: 'center', width: '100%' }}>
                  <Grid className={classes.divImg} >
                    <Paper className={classes.paper}>Hola</Paper>
                    <img className={classes.img} src={acamica} title="Foto2" alt="Foto2"/>
                   </Grid>     
                </Box>
            )}
            </>
     );
}
 
export default ThirdHome;