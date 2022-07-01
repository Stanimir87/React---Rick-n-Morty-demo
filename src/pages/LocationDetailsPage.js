import LocationDetails from "../components/locations/LocationDetails";
import { useParams } from "react-router-dom";

const LocationDetailsPage = (props) => {
  const params = useParams();
  console.log(params);
  return <LocationDetails id={params.id} />;
};

export default LocationDetailsPage;
