import React from "react";

const LocationContext = React.createContext({
    location:'',
    origin: '' ,
    setLocation: () =>{},
    setOrigin: ()=>{}
})

export default LocationContext;