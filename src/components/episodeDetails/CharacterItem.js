import { Fragment, useCallback, useContext, useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import classes from "./CharacterItem.module.css";
import LocationContext from "../../store/LocationContext";
import CharLocationItem from "../locations/CharLocationItem";

const CharacterItem = (props) => {
  const [error, setError] = useState();
  const [character, setCharacter] = useState();
  const ctx = useContext(LocationContext);

  const getCharacter = useCallback(async () => {
    try {
      const response = await fetch(props.url);

      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const data = await response.json();
      setCharacter(data);
      ctx.setLocation(data.location.url);
      ctx.setOrigin(data.origin.url);
    } catch {
      setError(error.message);
    }
  }, []);

  useEffect(() => {
    getCharacter();
  }, [getCharacter]);

  if (!character) {
    return <p>Loading...</p>;
  }

      // ctx.setLocation(character);
      // ctx.setOrigin(character);

  return (
    <Fragment>
      <li className={classes.character}>
        <div className={classes.details}><p><strong>Name: </strong>{character.name}
        <br />
        <strong>Status:</strong> {character.status}
        <br />
        <strong>Species:</strong> {character.species}
        <br />        
        <strong>Origin:</strong><Link to={`/location/${character.origin.name}`}> {character.origin.name}</Link>
        <br />
        <strong>Gender: </strong>{character.gender}
        <br />
        <strong>Location: </strong><Link to={`/location/${character.location.name}`}> {character.location.name}</Link>
        </p></div>
        <img src={character.image} alt='pic' />
      </li>
    </Fragment>
  );
};

export default CharacterItem;
