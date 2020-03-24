import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from "./components/Navbar";
import PlaylistList from "./components/PlaylistList";
import Home from "./pages/Home";

function App() {
  return (
      <Router>
        <Navbar/>
        <div className="container mt-5">
          <Switch>
            <Route path='/'>
              <Home/>
            </Route>
          </Switch>
        </div>
      </Router>
  )
}

export default App;
