import React from "react";
import Loader from "./Loader";
import Modal from "./Modal";
import {Link} from "react-router-dom";

function PlaylistList({playlists, loading, onRemove, onUpdate}) {

    return (
             <div className="row row-cols-1 row-cols-md-2">
                    {playlists.map((playlist, index) => {
                        return (
                            <div key={playlist.id} className="playlist">
                                <Link to={'/playlist/' + playlist.id}>
                                    <div className="col mb-4">
                                        <div className="card">
                                            <img src="./images/playlist_bg.jpg" className="card-img-top" alt="..."/>
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
                                                    onClick={(e) => {e.preventDefault(); onRemove(playlist.id);}}>Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                                <Modal id={playlist.id} title={playlist.title} modalTitle="Update playlist" onUpdate={onUpdate}/>
                            </div>
                            )
                    })
                    }
                </div>
    )
}

export default PlaylistList;