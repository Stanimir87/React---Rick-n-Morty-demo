import { Fragment, useCallback, useEffect, useState } from "react";
import classes from "./CharLocationItem.module.css";

const CharLocationItem = (props) => {
  const [error, setError] = useState();
  const [character, setCharacter] = useState();

  const getCharacter = useCallback(async () => {
    try {
      const response = await fetch(props.url);

      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const data = await response.json();
      setCharacter(data);
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

  return (
    <Fragment>
      <li className={classes.character}>
        <h3>Name: {character.name}</h3>
        <h3>Status: {character.status}</h3>
        <h3>Species: {character.species}</h3>
        <h3>Gender: {character.gender}</h3>
        <h3>Origin: {character.origin.name}</h3>
        <h3>Location: {character.location.name}</h3>
        <img src={character.image} alt='pic' />
      </li>
    </Fragment>
  );
};

export default CharLocationItem;
