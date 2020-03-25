import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom';
import * as firebase from "firebase";
import SongList from "../components/SongList";
import AddSong from "../components/AddSong";
import Loader from "../components/Loader";

function Playlist() {
    const {id} = useParams();
    const [songs, setSongs] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        fetchSongs(id);
    }, [id]);

    function fetchSongs(id) {
        firebase.database().ref('/playlists/' + id + '/songs').once('value').then(function (snapshot) {
            const data = snapshot.val();
            data && setSongs(Object.keys(data).map(key => {
                return {
                    id: key,
                    title: data[key].title,
                    src: data[key].src
                };
            }).reverse());
            setLoading(false);
        });
    }

    function addSong(title, src) {
        const newSongRef = firebase.database().ref('/playlists/' + id + '/songs').push();
        newSongRef.set({
            title,
            src
        }).then(() => {
            setSongs([{id: newSongRef.key, title, src}, ...songs]);
        })
    }

    function updateSong(songId, title) {
        firebase.database().ref('/playlists/' + id + '/songs/' + songId).update({title}).then(() => {
            setSongs(songs.map(song => song.id === songId ? {...song, title} : song));
        });
    }

    function deleteSong(songId) {
        firebase.database().ref('/playlists/' + id + '/songs/' + songId).remove().then(() => {
            setSongs(songs.filter(song => song.id !== songId));
        });
    }

    return (
        <div>
            <AddSong addSong={addSong}/>
            {loading ? <Loader/> : songs.length ?
                <SongList songs={songs} updateSong={updateSong} deleteSong={deleteSong}/>
                :
                <p className="text-center">You don't have songs</p>
            }

        </div>
    )
}

export default Playlist;