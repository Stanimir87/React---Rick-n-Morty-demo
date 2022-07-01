import classes from './EpisodesItem.module.css';
import {Link} from 'react-router-dom';
import { Fragment } from 'react';


const EpisodesItem = (props) => {
  return (
    <Fragment>
    <li className={classes.episode}>
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      <br/>
      <Link className={classes.btn} to={`/episode/${props.id}`}>Details</Link>
    </li>
    
    </Fragment>
  );
};

export default EpisodesItem;
