import React from "react";

function PlaylistList({playlists}) {

    return (
        <div className="row row-cols-1 row-cols-md-2">
            {playlists.map(playlist => {
                return (
                    <div className="col mb-4">
                        <div className="card">
                            <img src="./images/playlist_bg.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{playlist.title}</h5>
                                <button className="btn btn-success mr-1">Update</button>
                                <button className="btn btn-danger">Delete</button>
                            </div>
                        </div>
                    </div>)
            })
            }
        </div>
    )
}

export default PlaylistList;