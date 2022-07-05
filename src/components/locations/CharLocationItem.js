import { Fragment} from "react";
import classes from "./CharLocationItem.module.css";

const CharLocationItem = (props) => {


  return (
    <Fragment>
      <li className={classes.character}>
        <h3>Name: {props.name}</h3>
        <h3>Status: {props.status}</h3>
        <h3>Species: {props.species}</h3>
        <h3>Gender: {props.gender}</h3>
        <h3>Origin: {props.origin.name}</h3>
        <h3>Location: {props.location.name}</h3>
        <img src={props.img} alt='pic' />
      </li>
    </Fragment>
  );
};

export default CharLocationItem;
