import React from "react";
import Modal from "./Modal";

function Song({song, updateSong, deleteSong}) {
    return (
        <div>
            <div className="row p-3 song mb-3">
                <div className="col-md-6 col-12 d-flex align-items-center">
                    <h5>{song.title}</h5>
                </div>
                <div className="col-md-4 col-9 d-flex align-items-center">
                    <audio controls src={song.src}/>
                </div>
                <div className="col-2 d-flex align-items-center justify-content-end">
                    <div>
                        <button
                            className="btn btn-sm btn-success mr-1"
                            data-toggle="modal"
                            data-target={'#updateModal' + song.id}
                        >
                            <i className="fas fa-pen"/>
                        </button>
                        <button
                            className="btn btn-sm btn-danger"
                            onClick={() => deleteSong(song.id)}
                        >
                            <i className="fas fa-trash-alt"/>
                        </button>
                    </div>
                </div>
            </div>
            <Modal id={song.id} title={song.title} modalTitle="Update song" onUpdate={updateSong}/>
        </div>

    )
}

export default Song;