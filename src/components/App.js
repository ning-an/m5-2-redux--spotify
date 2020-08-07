import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { useDispatch } from "react-redux";

import GlobalStyle from "./GlobalStyles";
import ArtistRoute from "./ArtistRoute";
import {
  requestAccessToken,
  receiveAccessToken,
  receiveAccessTokenError,
} from "../action";

const DEFAULT_ARTIST_ID = "6eUKZXaKkcviH0Ku9w2n3V";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestAccessToken());
    fetch("/spotify_access_token")
      .then((res) => res.json())
      .then((data) => dispatch(receiveAccessToken(data.access_token)))
      .catch(() => dispatch(receiveAccessTokenError()));
  }, []);

  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/artists/:id">
            <ArtistRoute />
          </Route>
          <Route exact path="/">
            <Redirect to={`/artists/${DEFAULT_ARTIST_ID}`} />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
