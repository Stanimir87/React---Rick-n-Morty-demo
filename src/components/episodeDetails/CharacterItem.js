import { Fragment } from "react";
import {Link} from 'react-router-dom';
import classes from "./CharacterItem.module.css";



const CharacterItem = (props) => {

  return (
    <Fragment>
      <li className={classes.character}>
        <div className={classes.details}><p><strong>Name: </strong>{props.name}
        <br />
        <strong>Status:</strong> {props.status}
        <br />
        <strong>Species:</strong> {props.species}
        <br />        
        <strong>Origin:</strong><Link to={`/location/${props.origin.name}`}> {props.origin.name}</Link>
        <br />
        <strong>Gender: </strong>{props.gender}
        <br />
        <strong>Location: </strong><Link to={`/location/${props.location.name}`}> {props.location.name}</Link>
        </p></div>
        <img src={props.img} alt='pic' />
      </li>
    </Fragment>
  );
};

export default CharacterItem;
