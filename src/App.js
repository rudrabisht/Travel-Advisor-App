import React,{useState, useEffect} from "react";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import {CssBaseline, Grid, useScrollTrigger} from "@material-ui/core";
import { getPlacesData } from "./api";
import { CodeOutlined } from "@material-ui/icons";

function App(){
    const [places, setPlaces] = useState([]);
    const [childClicked, setChildClicked] = useState(null);

    const [coordinates, setCoordinates] = useState({});
    const [bounds, setBounds] = useState({});

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}}) => {
            setCoordinates({lat: latitude, lng: longitude})
        })
    }, [])

    useEffect(() => {
        setIsLoading(true);

        getPlacesData(bounds.sw, bounds.ne).then((data) => {
            setPlaces(data);
            setIsLoading(false);
        })
    }, [coordinates, bounds]);

    return (
    <div>
        <CssBaseline>
        <Header/>
        <Grid container spacing={3} style={{width: "100%"}}>
            <Grid item xs={12} md={4}>
                <List 
                    places={places}
                    childClicked={childClicked}
                    isLoading={isLoading}
                />
            </Grid>
            <Grid item xs={12} md={8}>
                <Map 
                    setCoordinates={setCoordinates}
                    setBounds={setBounds}
                    coordinates={coordinates}
                    places={places}
                    setChildClicked={setChildClicked}
                />
            </Grid>
        </Grid>
        </CssBaseline>
    </div>
    )
}

export default App;