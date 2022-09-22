import { Route, Switch } from "react-router-dom";
import Layout from "./Layout/Layout";
import AllEpisodes from "./pages/AllEpisodes";
import EpisodeDetailsPage from "./pages/EpisodeDetailsPage";
import Login from "./pages/Login";
import Welcome from "./pages/Welcome";
import NameContextProvider from "./store/NameCtxProvider";
import LocationDetailsPage from "./pages/LocationDetailsPage";
import SearchPage from "./pages/SearchPage";
import UnknownLocationPage from "./pages/UknownLocationPage";

function App() {
  return (
    <NameContextProvider>
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
          <Route path="/location/" exact>
            <UnknownLocationPage />
          </Route>
          <Route path="/location/:id" >
            <LocationDetailsPage />
          </Route>
          <Route path="/search" >
            <SearchPage />
          </Route>
        </Switch>
      </Layout>
    </NameContextProvider>
  );
}

export default App;
