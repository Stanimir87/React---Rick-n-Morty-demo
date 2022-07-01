import LocationContext from "./LocationContext";
import {useState} from 'react'

function LocationContextProvider(props) {

    const [location, setLocation] = useState(null);
    const [origin, setOrigin] = useState(null);
   
   
     const LocationCtx = {
       location: location,
       origin:origin,
       setLocation: setLocation,
       setOrigin: setOrigin
     };
   
     return (
       <LocationContext.Provider value={LocationCtx}>
         {props.children}
       </LocationContext.Provider>
     );
   }

   export default LocationContextProvider;