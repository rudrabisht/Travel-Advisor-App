import React from "react";
import GoogleMapReact from "google-map-react";
import {Paper, Typography, useMediaQuery} from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab";

import useStyles from "./styles";

function Map() {
    const classes = useStyles();
    const inMobile = useMediaQuery("(min-width:600px)")

    const coordinates = { lat: 28.535517, lng: 77.391029 }; 

    return (
        <div className = {classes.mapContainer}>
            <GoogleMapReact 
                bootstrapURLKeys={{ key: "AIzaSyC-rNpppjIUyTZMSdAP2Ypo4I-SIp9g49c" }}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={""}
                onChange={""}
                onChildClick={""}
            >
            </GoogleMapReact>
        </div>
    )
}

export default Map;