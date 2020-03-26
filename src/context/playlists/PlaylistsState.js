import React, {useReducer} from "react";
import {PlaylistsContext} from './playlistsContext';
import {playlistsReducer} from './playlistsReducer';
import * as firebase from "firebase";
import {SHOW_LOADER, FETCH_PLAYLISTS, ADD_PLAYLIST, UPDATE_PLAYLIST, DELETE_PLAYLIST} from '../types'

export const PlaylistsState = ({children}) => {
    const initialState = {
        playlists: [],
        loading: false
    };
    const [state, dispatch] = useReducer(playlistsReducer, initialState);

    const showLoader = () => dispatch({type: SHOW_LOADER});

    function fetchPlaylists() {
        showLoader();
        firebase.database().ref('/playlists').once('value').then(function (snapshot) {
            const data = snapshot.val();
            dispatch({
                type: FETCH_PLAYLISTS,
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

    function addPlaylist(title ,src) {
        const newPlaylistRef = firebase.database().ref('/playlists').push();
        newPlaylistRef.set({
            title,
            src
        }).then(() => {
            dispatch({
                type: ADD_PLAYLIST,
                payload: {id: newPlaylistRef.key, title, src}
            });
        })
    }

    function updatePlaylist(id, title) {
        firebase.database().ref('/playlists/' + id).update({title}).then(() => {
            dispatch({
                type: UPDATE_PLAYLIST,
                payload: {id, title}
            });
        })
    }

    function deletePlaylist(id) {
        firebase.database().ref('/playlists/' + id).remove().then(() => {
            dispatch({
                type: DELETE_PLAYLIST,
                payload: id
            });
        });
    }

    return (
        <PlaylistsContext.Provider value={{
            showLoader, fetchPlaylists, addPlaylist, updatePlaylist, deletePlaylist,
            loading: state.loading,
            playlists: state.playlists
        }}>
            {children}
        </PlaylistsContext.Provider>
    )
};