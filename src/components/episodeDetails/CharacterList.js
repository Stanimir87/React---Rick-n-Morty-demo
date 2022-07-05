import CharacterItem from "./CharacterItem";
import classes from "./CharacterList.module.css";
import { useCallback, useEffect, useState } from "react";

const CharacterList = (props) => {
  const [chars, setChars] = useState();
  const [error, setError] = useState();
  let charId = [];

  for (let i of props.characters) {
    charId.push(i.slice(42));
  }

  const getCharacter = useCallback(async () => {
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/${charId}`
      );

      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const data = await response.json();
      setChars(data);
    } catch {
      setError(error.message);
    }
  }, []);

  useEffect(() => {
    getCharacter();
  }, [getCharacter]);

  if (!chars) {
    return <p>Loading...</p>;
  }

  return (
    <ul className={classes["characters-list"]}>
      {chars.map((char) => (
        <CharacterItem
          key={char.id}
          id={char.id}
          name={char.name}
          status={char.status}
          species={char.species}
          gender={char.gender}
          origin={char.origin}
          location={char.location}
          img={char.image}

        />
      ))}
    </ul>
  );
};

export default CharacterList;
