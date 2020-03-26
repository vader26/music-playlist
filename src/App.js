import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Playlist from "./pages/Playlist";
import {PlaylistsState} from "./context/playlists/PlaylistsState";
import {SongsState} from "./context/songs/SongsState";
import AddPlaylist from "./pages/AddPlaylist";

function App() {
  return (
      <Router>
        <Navbar/>
        <div className="container mt-5">
          <Switch>
              <Route path='/' exact>
                  <PlaylistsState>
                      <Home/>
                  </PlaylistsState>
              </Route>
              <Route path='/playlist/add'>
                  <PlaylistsState>
                      <AddPlaylist/>
                  </PlaylistsState>
              </Route>
              <Route path='/playlist/:id'>
                <SongsState>
                    <Playlist/>
                </SongsState>
              </Route>
          </Switch>
        </div>
      </Router>
  )
}

export default App;
