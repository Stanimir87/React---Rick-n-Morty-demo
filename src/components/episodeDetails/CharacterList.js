import CharacterItem from "./CharacterItem";
import classes from "./CharacterList.module.css";

const CharacterList = (props) => {
  return (
    <ul className={classes["characters-list"]}>
      {props.characters.map((character, index) => (
        <CharacterItem key={index} url={character} />
      ))}
    </ul>
  );
};

export default CharacterList;
