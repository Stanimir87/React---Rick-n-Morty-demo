import { Fragment } from 'react';
import classes from './SearchItem.module.css';

const SearchItem = (props) =>{
    return <Fragment>
        <li className={classes.search}>
            <p>Name: {props.name}</p>
            <p>Status: {props.status}</p>
            <p>Species: {props.species}</p>
            <p>Gender: {props.gender}</p>
            <p>Origin: {props.origin}</p>
            <p>Location: {props.location}</p>
            <img src={props.img} alt='pic'></img>
        </li>
    </Fragment>
}

export default SearchItem;