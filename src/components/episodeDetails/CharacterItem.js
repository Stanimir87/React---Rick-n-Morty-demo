import { Fragment } from "react";
import {Link} from 'react-router-dom';
import classes from "./CharacterItem.module.css";



const CharacterItem = (props) => {

  const loc = props.location.url.slice(41);
  const org = props.origin.url.slice(41);

  return (
    <Fragment>
      <li className={classes.character}>
        <div className={classes.details}><p><strong>Name: </strong>{props.name}
        <br />
        <strong>Status:</strong> {props.status}
        <br />
        <strong>Species:</strong> {props.species}
        <br />    
        <strong>Gender: </strong>{props.gender}
        <br />    
        <strong>Origin:</strong><Link to={`/location/${org}`}> {props.origin.name}</Link>
        <br />
        <strong>Location: </strong><Link to={`/location/${loc}`}> {props.location.name}</Link>
        </p></div>
        <img src={props.img} alt='pic' />
      </li>
    </Fragment>
  );
};

export default CharacterItem;
