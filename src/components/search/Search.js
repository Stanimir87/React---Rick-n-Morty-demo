import { Fragment, useRef, useState } from "react";
import SearchList from "./SearchList";
import classes from './Search.module.css';

const Search = () => {
  const nameInputRef = useRef();
  const [char, setChar] = useState();
  const [err, setErr] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [info, setInfo] = useState({});


  async function searchCharHandler(event) {
    event.preventDefault();
    setIsLoading(true);
    const enteredName = nameInputRef.current.value;

    try {
      setErr(false);
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?name=${enteredName}`
      );
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const data = await response.json();

      setChar(data.results);
      setInfo(data.info);
    } catch {
      setErr('No such character');
      setIsLoading(false);
    }
    setIsLoading(false);
  }

  async function clickNextHandler() {
    setIsLoading(true);
    setErr(null);

    try{
      const response = await fetch(info.next);
      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const data = await response.json();

      setInfo(data.info);
      setChar(data.results);

    }catch{
      setErr(err.message);
    }
    setIsLoading(false);
  }

  async function clickPrevHandler() {
    setIsLoading(true);
    setErr(null);

    try{
      const response = await fetch(info.prev);
      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const data = await response.json();

      setInfo(data.info);
      setChar(data.results);

    }catch{
      setErr(err.message);
    }
    setIsLoading(false);
  }

  let content = <p></p>;

  if (char) {
    content = <SearchList characters={char} />;
  }

  if (err) {
    content = <p>{err}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <Fragment>
      
      <div className={classes.row}>
      <form onSubmit={searchCharHandler}>
        <div>
          <label className={classes.label} htmlFor="name">Search Characters by Name</label>
          <input type="text" id="name" required ref={nameInputRef}></input>
        </div>
        <button className={classes.btn} onClick={searchCharHandler} type="button">
          Search
        </button>
      </form></div>
      <section>{content}</section>
      <div className={classes.pagination}>
      {info.prev !== null && info.prev !== undefined && (
        <button onClick={clickPrevHandler}>Previous</button>
      )}
      {info.next && <button onClick={clickNextHandler}>Next</button>} 
      </div>     
    </Fragment>
  );
};

export default Search;
