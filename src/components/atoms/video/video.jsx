import React from 'react';
import hero_kite from './hero_kite.mp4'
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    video: {
        height: '500px',
        margin: '0%'
    },
}));


const Video = () => {
    const classes = useStyles();
    return ( <div className='vid'>
    <video loop autoPlay muted className={classes.video}>
      <source src={hero_kite} type="video/mp4"/>
      </video>
    </div> );
}
 
export default Video;

