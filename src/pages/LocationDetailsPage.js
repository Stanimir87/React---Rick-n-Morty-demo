import LocationDetails from "../components/locations/LocationDetails";
import { useParams } from "react-router-dom";

const LocationDetailsPage = () => {
  const params = useParams();
  
  return <LocationDetails id={params.id} />;
};

export default LocationDetailsPage;
