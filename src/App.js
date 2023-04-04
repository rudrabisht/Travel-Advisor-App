import React from "react";
import Header from "./components/Header/Header";
import Hist from "./components/List/List";
import Map from "./components/Map/Map";
import {CssBaseline, Grid} from "@material-ui/core";
// import PlaceDetails from "./components/PlaceDetails/PlaceDetails";

function App(){
    return (
    <div>
        <CssBaseline>
        <Header/>
        <Grid container spacing={3} style={{width: "100%"}}>
            <Grid item xs={12} md={4}>
                <Hist />
            </Grid>
            <Grid item xs={12} md={8}>
                <Map />
            </Grid>
        </Grid>

        </CssBaseline>
    </div>
    )
}

export default App;