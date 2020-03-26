import React, {useContext, useState} from "react";
import {useHistory} from "react-router-dom";
import {PlaylistsContext} from "../context/playlists/playlistsContext";
import * as firebase from "firebase";

function AddPlaylist() {
    const history = useHistory();
    const [playlistTitle, setPlaylistTitle] = useState('');
    const [loading, setLoading] = useState(false);
    const [file, setFile] = useState(null);
    const {addPlaylist} = useContext(PlaylistsContext);
    function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
        if (file) {
            firebase.storage().ref().child('images/' + file.name).put(file).then(function (snapshot) {
                snapshot.ref.getDownloadURL().then(downloadURL => {
                    addPlaylist(playlistTitle, downloadURL);
                    setPlaylistTitle('');
                    setLoading(false);
                    history.push('/');
                });
            })
        } else {
            addPlaylist(playlistTitle, 'https://firebasestorage.googleapis.com/v0/b/music-playlist-53e8c.appspot.com/o/images%2Fplaylist_bg.jpg?alt=media&token=ff35d39b-62ac-47b6-beca-4d1cef9a4784');
            setPlaylistTitle('');
            setLoading(false);
            history.push('/');
        }

    }

    function handleFile(e) {
        setFile(e.target.files[0]);
    }
    return (
        <form className="mb-5" onSubmit={handleSubmit}>
            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Type playlist title"
                    value={playlistTitle}
                    onChange={(e) => setPlaylistTitle(e.target.value)}
                    required/>
            </div>
            <div className="custom-file mb-3">
                <input type="file" className="custom-file-input" id="music-file" onChange={handleFile}/>
                <label className="custom-file-label" htmlFor="music-file">Choose playlist background image...</label>
            </div>
            <div className="form-group">
                <button className="btn btn-primary">
                    {loading ?
                        <span className="spinner-border spinner-border-sm mr-1"/> : null}
                    Add
                </button>
            </div>
        </form>
    )
}

export default AddPlaylist;