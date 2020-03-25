import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Playlist from "./pages/Playlist";

function App() {
  return (
      <Router>
        <Navbar/>
        <div className="container mt-5">
          <Switch>
            <Route path='/' exact>
              <Home/>
            </Route>
            <Route path='/playlist/:id'>
                <Playlist/>
            </Route>
          </Switch>
        </div>
      </Router>
  )
}

export default App;
