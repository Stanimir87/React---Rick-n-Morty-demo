
import CharLocationItem from "./CharLocationItem";
import classes from './CharLocationList.module.css';

const CharLocationList = (props) =>{
    return (
        <ul className={classes["characters-list"]}>
          {props.residents.map((resident, index) => (
            <CharLocationItem id={props.id} key={index} url={resident} />
          ))}
        </ul>
      );
}

export default CharLocationList;