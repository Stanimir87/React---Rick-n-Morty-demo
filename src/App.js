import { Route, Switch } from "react-router-dom";
import Layout from "./Layout/Layout";
import AllEpisodes from "./pages/AllEpisodes";
import EpisodeDetailsPage from "./pages/EpisodeDetailsPage";
import Login from "./pages/Login";
import Welcome from "./pages/Welcome";
import NameContextProvider from "./store/NameCtxProvider";
import LocationDetailsPage from "./pages/LocationDetailsPage";
import LocationContextProvider from "./store/LocationContextprovider";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <NameContextProvider>
      <LocationContextProvider>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Welcome />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/episodes" exact>
            <AllEpisodes />
          </Route>
          <Route path="/episode/:id" exact>
            <EpisodeDetailsPage />
          </Route>
          <Route path="/location/:id" >
            <LocationDetailsPage />
          </Route>
          <Route path="/search" >
            <SearchPage />
          </Route>
        </Switch>
      </Layout>
      </LocationContextProvider>Ф
    </NameContextProvider>
  );
}

export default App;
