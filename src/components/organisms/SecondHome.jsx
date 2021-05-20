import React from 'react';
import {
    makeStyles,
    Grid,
    Typography,
    useMediaQuery,
    useTheme,
    Box
  } from "@material-ui/core";


// Internal components
import SectionContainer from "../../components/layout/sectionContainer/sectionContainer";



const useStyles = makeStyles((theme) => ({
    title: {
        fontSize: '55px',
        fontWeight: 'bold',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: '1.25',
        letterSpacing: 'normal',
        color: 'white',
    },
    titlesmoll: {
        fontSize: '34px',
        width: '256px',
        fontWeight: 'bold',
        color: 'white',
    },
    subtitlesmoll: {
        fontFamily: 'Lora',
        fontSize: '24px',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: '1.67',
        color: 'white',
    },
    subtitle: {
        fontFamily: 'Lora',
        fontSize: '24px',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: '1.67',
        color: 'white',
    },
    gridprincipal: {
        display: 'flex',
        width: '100%',
        
    },
     gridprincipalsmoll: {
        display: 'block',
        padding: '0%',
        margin: '10%',
        marginBottom: '0%',
        marginTop: '5%',
        width: '100%'
        
    },
    gridleft: {
        marginLeft: '7%',
        width: '40%',
        
    },
    gridright: {
        marginTop: '0%',
        width: '40%',
        marginLeft: '8%',
    }
    
  }));


const SecondHome = () => {
    const theme = useTheme()
    const classes = useStyles();
    const isMatch = useMediaQuery(theme.breakpoints.down("xs"));
    return ( 
        <>
        {isMatch ? (
        <Box style={{ backgroundColor:'black', minHeight: '100vh', display: 'flex', alignItems: 'center', minWidth: '110vh' }}>
                 <Grid container className={classes.gridprincipalsmoll}>  
                  <Typography className={classes.titlesmoll}>
                    Looks like magic, works like science.
                  </Typography>
                  <Typography className={classes.subtitlesmoll}>
                     There’s no secret sauce, no wizard behind the curtain.
                     What makes Aerolab tick is an interdisciplinary team with
                     a framework that fosters candid collaboration.   
                  </Typography>            
                </Grid>
                </Box>
                ) : (
                <Box style={{ backgroundColor:'black', minHeight: '100vh', display: 'flex', alignItems: 'center', width: '100%' }}>
                <Grid container className={classes.gridprincipal}>
                    <Grid className={classes.gridleft}>
                    <Typography className={classes.title}>
                     Looks like magic, works like science.
                    </Typography>
                    </Grid>
                    <Grid  className={classes.gridright}>
                    <Typography className={classes.subtitle} variant='body1' color='white' align='left'>
                     There’s no secret sauce, no wizard behind the curtain.
                     What makes Aerolab tick is an interdisciplinary team with
                     a framework that fosters candid collaboration.   
                   </Typography>   
                   </Grid>  
                </Grid>
                </Box>
            )}
            </>

         
       
     );
}
 
export default SecondHome;