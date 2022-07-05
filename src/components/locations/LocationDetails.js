import { Fragment, useCallback, useEffect, useState } from "react";
import CharLocationList from "./CharLocationList";

import classes from './LocationDetails.module.css'

const LocationDetails = (props)=>{
    const [error, setError] = useState();
    const [location, setLocation] = useState();


    const getLocation = useCallback(async () => {
        try {
          const response = await fetch(`https://rickandmortyapi.com/api/location/${props.id}`);
          ;
          if (!response.ok) {
            throw new Error("Something went wrong");
          }
          const data = await response.json();
          setLocation(data);
        } catch {
          setError(error.message);
        }
      }, []);

      useEffect(() => {
        getLocation();
      }, [getLocation]);

      if (!location) {
        return <p>Loading...</p>;
      }

      if(location.residents.length < 1){
        return <p>No characters found!</p>
      }

      return (
        <Fragment>
          <div className={classes.details}>
          <p><strong>Name:</strong> {location.name}</p>
          <p><strong>Type:</strong> {location.type}</p>
          <p><strong>Dimension:</strong>  {location.dimension}</p>
          </div>
          <CharLocationList id={location.id} residents={location.residents} />
        </Fragment>
      );


}

export default LocationDetails;