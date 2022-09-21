import { Fragment, useState, useEffect, useCallback } from "react";
import EpisodesList from "./EpisodesList";
import classes from './AllEpisodesList.module.css';

const AllEpisodesList = (props) => {
  const [episodes, setEpisodes] = useState([]);
  const [info, setInfo] = useState({})
  const [isLoading, setIsLoading] = useState();
  const [error, setError] = useState(null);

  const fetchEpisodesHandler = useCallback(async() => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("https://rickandmortyapi.com/api/episode");
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const data = await response.json();

      setInfo(data.info);
      setEpisodes(data.results);
    } catch {
      setError(error.message);
    }
    setIsLoading(false);
  },[])

  useEffect(() => {
    fetchEpisodesHandler();
  }, [fetchEpisodesHandler]);

  async function clickNextHandler() {
    setIsLoading(true);
    setError(null);

    try{
      const response = await fetch(info.next);
      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const data = await response.json();

      setInfo(data.info);
      setEpisodes(data.results);

    }catch{
      setError(error.message);
    }
    setIsLoading(false);
  }

  async function clickPrevHandler() {
    setIsLoading(true);
    setError(null);

    try{
      const response = await fetch(info.prev);
      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const data = await response.json();

      setInfo(data.info);
      setEpisodes(data.results);

    }catch{
      setError(error.message);
    }
    setIsLoading(false);
  }




  let content = <p>No episodes found!</p>;

  if (episodes.length > 0) {
    content = <EpisodesList episodes={episodes} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <Fragment>

      <section>{content}</section>
      <div className={classes.pagination}>
      {info.prev!== null && info.prev !== undefined && <button onClick={clickPrevHandler} >Previous</button>}
      {info.next && <button  onClick={clickNextHandler} >Next</button>}
      </div>
    </Fragment>
  );
};

export default AllEpisodesList;
