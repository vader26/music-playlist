import React, {useContext} from "react";
import Modal from "./Modal";
import {Link} from "react-router-dom";
import {PlaylistsContext} from "../context/playlists/playlistsContext";

function Playlists({playlists}) {
    const {updatePlaylist, deletePlaylist} = useContext(PlaylistsContext);
    return (
             <div className="row row-cols-1 row-cols-md-3">
                    {playlists.map(playlist => {
                        return (
                            <div key={playlist.id} className="playlist">
                                <Link to={'/playlist/' + playlist.id}>
                                    <div className="col mb-4">
                                        <div className="card">
                                            <img src={playlist.src} className="card-img-top" alt="..." height="200px"/>
                                            <div className="card-body">
                                                <h5 className="card-title">{playlist.title}</h5>
                                                <button
                                                    type="button"
                                                    className="btn btn-success mr-1"
                                                    data-toggle="modal"
                                                    data-target={'#updateModal' + playlist.id}
                                                    onClick={e => e.preventDefault()}
                                                >
                                                    Update
                                                </button>
                                                <button
                                                    className="btn btn-danger"
                                                    onClick={(e) => {e.preventDefault(); deletePlaylist(playlist.id);}}>Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                                <Modal id={playlist.id} title={playlist.title} modalTitle="Update playlist" onUpdate={updatePlaylist}/>
                            </div>
                            )
                    })
                    }
                </div>
    )
}

export default Playlists;