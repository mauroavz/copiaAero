import React, {useState, useEffect} from "react";
import {
  makeStyles,
  AppBar,
  Grid,
  Typography,
  Toolbar,
  useMediaQuery,
  useTheme,
  LinearProgress,
  Button
} from "@material-ui/core";
import DrawerList from "./drawer";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: "absolute",
  },
  navbarWhite: {
    backgroundColor: "#FFFFFF",
  },
  toolbar: {
    display: "flex"
  },
  typography: {
    color: "black",
    width: "100%",
    fontSize: "90%"
  },
  linear: {
    backgroundColor: '#1F1D1C',
    height: '8%',
  }
}));

const Navbar = (props) => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  const [progress, setProgress] = useState(0);
  const [progresstwo, setProgresstwo] = useState(0);
  const [progressthre, setProgressthre] = useState(0);
  const [progressfor, setProgressfor] = useState(0);

  

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar
        id="navbar"
        position="fixed"
        className={classes.navbarWhite}
        elevation={0}
      >
        <Toolbar className={classes.toolbar}>
          {isMatch ? (
            <DrawerList />
          ) : (
            <>
              <Grid container>
                <Grid item xs={2} lg={1} style={{ textAlign: "center", marginLeft: "60%",  marginRight: "1%" }}>
                  <Grid onMouseEnter={() => setProgress(100)} onMouseLeave={() => setProgress(0)}>
                    <Typography variant="overline" className={classes.typography}>Projects</Typography>
                  </Grid>
                  <LinearProgress variant="determinate" value={progress} className={classes.linear}  color="primary"/>
                </Grid>
                <Grid item xs={2} lg={1} style={{ textAlign: "center", marginRight: "1%" }}>
                 <Grid onMouseEnter={() => setProgresstwo(100)} onMouseLeave={() => setProgresstwo(0)}>
                   <Typography variant="overline" className={classes.typography}>Expertise</Typography>
                 </Grid>
                 <LinearProgress variant="determinate" value={progresstwo} className={classes.linear}  color="primary"/>
                </Grid>
                <Grid item xs={2} lg={1} style={{ textAlign: "center", marginRight: "1%" }}>
                 <Grid onMouseEnter={() => setProgressthre(100)} onMouseLeave={() => setProgressthre(0)}>
                   <Typography variant="overline" className={classes.typography}>About</Typography>
                 </Grid>
                 <LinearProgress variant="determinate" value={progressthre} className={classes.linear}  color="primary"/> 
                </Grid>
                <Grid item xs={2} lg={1} style={{ textAlign: "center" }}>
                 <Grid onMouseEnter={() => setProgressfor(100)} onMouseLeave={() => setProgressfor(0)}>
                   <Typography variant="overline" className={classes.typography}>Contact</Typography>
                 </Grid>
                 <LinearProgress variant="determinate" value={progressfor} className={classes.linear}  color="primary"/>
                </Grid>
              </Grid>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
