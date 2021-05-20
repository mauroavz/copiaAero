import React from "react";
import {Grid} from '@material-ui/core';

// Internal components
import Navbar from "../../components/layout/navbar/Navbar";
import Presentacion from "../../components/organisms/Presentacion";
import SecondHome from "../../components/organisms/SecondHome";
import ThirdHome from "../../components/organisms/ThirdHome";


const Home = () => {

    return (
    <Grid style={{ minHeight: "100vh", backgroundColor: "#FFFFFF"}}>
     <Navbar/>
     <Presentacion />
     <SecondHome/>
     <ThirdHome />
    </Grid>
   );

};

export default Home;
