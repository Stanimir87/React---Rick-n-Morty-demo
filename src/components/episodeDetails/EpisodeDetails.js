import { Fragment, useCallback, useEffect, useState } from "react";
import CharacterList from "./CharacterList";
import classes from './EpisodeDetails.module.css';

const EpisodeDetails = (props) => {
  const [error, setError] = useState();
  const [episode, setEpisode] = useState();

  const getEpisode = useCallback(async () => {
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/episode/${props.id}`
      );
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const data = await response.json();
      setEpisode(data);
    } catch {
      setError(error.message);
    }
  }, []);


  useEffect(() => {
    getEpisode();
  }, [getEpisode]);

  if (!episode) {
    return <p>Loading...</p>;
  }

  console.log(episode);

  return (
    <Fragment>
      <div className={classes.details}><p><strong>Name:</strong>{episode.name}</p>
      <p><strong>Air Date:</strong>{episode.air_date}</p>
      <p><strong>Episode:</strong>{episode.episode}</p></div>
      <CharacterList characters={episode.characters} />
    </Fragment>
  );
};

export default EpisodeDetails;
