import EpisodeDetails from "../components/episodeDetails/EpisodeDetails";
import { useParams } from "react-router-dom";

const EpisodeDetailsPage = (props) => {
  const params = useParams();

  return <EpisodeDetails id={params.id} />;
};

export default EpisodeDetailsPage;
