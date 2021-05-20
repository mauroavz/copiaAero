// Utils & config
import React from "react";
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
import Video from '../../components/atoms/video/video';


const useStyles = makeStyles((theme) => ({
    className: {
        padding: '0%',
        margin: '10%',
        marginBottom: '0%',
        marginTop: '5%'
    },
    title: {
        margin: '72px 0px 35px',
        fontSize: '55px',
        fontWeight: 'bold',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: '1.25',
        letterSpacing: 'normal',
        marginTop: "0%",
        width: '110%',
        marginBottom: '24px',
        color: "#1f1d1c"
    },
    titlesmoll: {
        fontSize: '34px',
        width: '256px',
        fontWeight: 'bold',
    },
    subtitle: {
        fontFamily: 'Lora',
        fontSize: '24px',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: '1.67',
        color: '#1f1d1c',
        width: '85%'
    },
    gridprincipal: {
        display: 'flex',
        margin: '0%',
        position: 'relative'
    },
    gridprincipalsmoll: {
        display: 'block',
        marginTop: '10%',
        position: 'relative',
    },
    gridleft: {
        justifyContent: 'left',
        alignContent: 'left',
        alignItems: 'left',
        textAlign: 'left',
        width: '95%',
        position: 'absolute',
        marginTop: '10%'
        
    },
    gridright: {
        marginLeft: '80%', 
        marginTop: '0%',
        
    },
    
  }));


const Presentacion = (props) => {
    const theme = useTheme()
    const classes = useStyles();
    const isMatch = useMediaQuery(theme.breakpoints.down("xs"));
    

    return (
        <Box style={{ backgroundColor: theme.palette.tertiary.main, minHeight: '80vh', display: 'flex', alignItems: 'center', width: '100%' }}>
            <SectionContainer className={classes.className} >
            {isMatch ? (
                 <Grid item md={8}  className={classes.gridprincipalsmoll}>  
                  <Typography className={classes.titlesmoll}>
                    Design doesn’t enable
                    change. It drives it.
                  </Typography>
                  <Video className={classes.video}/>
                </Grid>
                ) : (
                <Grid item md={8} className={classes.gridprincipal}>
                    <Grid className={classes.gridleft}>
                    <Typography className={classes.title}>
                    Design doesn’t enable
                    change. It drives it.
                    </Typography>
                    <Typography className={classes.subtitle} variant='body1' color='textPrimary' align='left'>
                     Aerolab is a digital product agency helping startups
                     and big companies deliver meaningful experiences
                     to users all over the world.
                    </Typography>
                    </Grid>
                    <Grid  className={classes.gridright}>
                    <Video className={classes.video}/>
                    </Grid>
                </Grid>
            )}

            </SectionContainer>
        </Box>
    );
};



export default Presentacion;