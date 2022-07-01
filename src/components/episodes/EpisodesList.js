import EpisodesItem from './EpisodesItem';
import classes from './EpisodesList.module.css';


function EpisodesList(props) {
  return (
    <ul className={classes["episodes-list"]}>
      {props.episodes.map((episode) => (
        <EpisodesItem
          key={episode.id}
          id={episode.id}
          title={episode.name}
          releaseDate={episode.air_date}
        />
      ))}
    </ul>
  );
}

export default EpisodesList;
