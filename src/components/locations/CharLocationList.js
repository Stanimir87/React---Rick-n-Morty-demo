import { useState, useEffect, useCallback } from "react";
import CharLocationItem from "./CharLocationItem";
import classes from "./CharLocationList.module.css";

const CharLocationList = (props) => {
  const [locs, setLocs] = useState();
  const [error, setError] = useState();

  let locs2 = [];

  let charId = [];
  for (let i of props.residents) {
    charId.push(i.slice(42));
  }

  const getCharacters = useCallback(async () => {
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/${charId}`
      );

      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const data = await response.json();
      setLocs(data);
      
    } catch {
      setError(error.message);
    }
  }, []);

  useEffect(() => {
    getCharacters();
  }, [getCharacters]);

  if (!locs) {
    return <p>Loading...</p>;
  }

 

   if(Array.isArray(locs) === false){
    locs2.push(locs);
    return (
      <ul className={classes["characters-list"]}>
        {locs2.map((loc) => (
          <CharLocationItem
            key={loc.id}
            id={loc.id}
            name={loc.name}
            status={loc.status}
            species={loc.species}
            gender={loc.gender}
            origin={loc.origin}
            location={loc.location}
            img={loc.image}
          />
        ))}
      </ul>
    );
  }



  return (
    <ul className={classes["characters-list"]}>
      {locs.map((loc) => (
        <CharLocationItem
          key={loc.id}
          id={loc.id}
          name={loc.name}
          status={loc.status}
          species={loc.species}
          gender={loc.gender}
          origin={loc.origin}
          location={loc.location}
          img={loc.image}
        />
      ))}
    </ul>
  );
};

export default CharLocationList;
