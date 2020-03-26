import React, {useContext, useState} from "react";
import {PlaylistsContext} from "../context/playlists/playlistsContext";

function AddPlaylist() {
    const [playlistTitle, setPlaylistTitle] = useState('');
    const {addPlaylist} = useContext(PlaylistsContext);
    function handleSubmit(e) {
        e.preventDefault();
        addPlaylist(playlistTitle);
        setPlaylistTitle('');

    }
    return (
        <form className="mb-5" onSubmit={handleSubmit}>
            <div className="form-row">
                <div className="col">
                    <input type="text" className="form-control" placeholder="Type playlist title" value={playlistTitle} onChange={(e) => setPlaylistTitle(e.target.value)}/>
                </div>
                <div className="col-auto">
                    <button className="btn btn-primary">Add</button>
                </div>
            </div>
        </form>
    )
}

export default AddPlaylist;