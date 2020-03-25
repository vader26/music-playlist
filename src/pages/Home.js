import React, {useState, useEffect} from "react";
import PlaylistList from "../components/PlaylistList";
import AddPlaylist from "../components/AddPlaylist";
import * as firebase from "firebase";
import Loader from "../components/Loader";

function Home() {
    const [playlists, setPlaylists] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        fetchPlaylists();
    }, []);

    function fetchPlaylists() {
        firebase.database().ref('/playlists').once('value').then(function (snapshot) {
            const data = snapshot.val();
            data && setPlaylists(Object.keys(data).map(key => {
                return {
                    id: key,
                    title: data[key].title
                };
            }).reverse());
            setLoading(false);
        });
    }

    function addPlaylist(title) {
        const newPlaylistRef = firebase.database().ref('/playlists').push();
        newPlaylistRef.set({
            title
        }).then(() => {
            setPlaylists([{id: newPlaylistRef.key, title}, ...playlists]);
        })
    }

    function updatePlaylist(id, title) {
        firebase.database().ref('/playlists/' + id).update({title}).then(() => {
            setPlaylists(playlists.map(playlist => playlist.id === id ? {...playlist, title} : playlist));
        })
    }

    function deletePlaylist(id) {
        firebase.database().ref('/playlists/' + id).remove().then(() => {
            setPlaylists(playlists.filter(playlist => playlist.id !== id));
        });
    }

    return (
        <div>
            <AddPlaylist addPlaylist={addPlaylist}/>
            {loading ? <Loader/> : playlists.length ?
                <PlaylistList playlists={playlists} loading={loading} onRemove={deletePlaylist} onUpdate={updatePlaylist}/>
                :
                <p className="text-center">You don't have playlists</p>
            }
        </div>

    )
}

export default Home;