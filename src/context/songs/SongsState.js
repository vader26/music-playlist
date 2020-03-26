import React, {useReducer} from "react";
import {SongsContext} from './songsContext';
import {songsReducer} from './songsReducer';
import * as firebase from "firebase";
import {SHOW_LOADER, FETCH_SONGS, ADD_SONG, UPDATE_SONG, DELETE_SONG} from '../types'
import {useParams} from "react-router-dom";

export const SongsState = ({children}) => {
    const {id} = useParams();
    const initialState = {
        songs: [],
        loading: false
    };
    const [state, dispatch] = useReducer(songsReducer, initialState);

    const showLoader = () => dispatch({type: SHOW_LOADER});

    function fetchSongs() {
        showLoader();
        firebase.database().ref('/playlists/' + id + '/songs').once('value').then(function (snapshot) {
            const data = snapshot.val();
            dispatch({
                type: FETCH_SONGS,
                payload: data ? Object.keys(data).map(key => {
                    return {
                        id: key,
                        title: data[key].title,
                        src: data[key].src
                    };
                }).reverse() : []
            });
        });
    }

    function addSong(title, src) {
        const newSongRef = firebase.database().ref('/playlists/' + id + '/songs').push();
        newSongRef.set({
            title,
            src
        }).then(() => {
            dispatch({
                type: ADD_SONG,
                payload: {id: newSongRef.key, title, src}
            });
        })
    }

    function updateSong(songId, title) {
        firebase.database().ref('/playlists/' + id + '/songs/' + songId).update({title}).then(() => {
            dispatch({
                type: UPDATE_SONG,
                payload: {id: songId, title}
            });
        });
    }

    function deleteSong(songId) {
        firebase.database().ref('/playlists/' + id + '/songs/' + songId).remove().then(() => {
            dispatch({
                type: DELETE_SONG,
                payload: songId
            });
        });
    }

    return (
        <SongsContext.Provider value={{
            showLoader, fetchSongs, addSong, updateSong, deleteSong,
            loading: state.loading,
            songs: state.songs
        }}>
            {children}
        </SongsContext.Provider>
    )
};