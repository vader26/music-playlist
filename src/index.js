import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBv-oyhYjCqzoQpOmxvJoIRl_TpgG0vdHE",
    authDomain: "music-playlist-53e8c.firebaseapp.com",
    databaseURL: "https://music-playlist-53e8c.firebaseio.com",
    projectId: "music-playlist-53e8c",
    storageBucket: "music-playlist-53e8c.appspot.com",
    messagingSenderId: "653290300461",
    appId: "1:653290300461:web:311e4a495ac4d0f756c4a4"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
