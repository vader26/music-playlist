import React from "react";

function AddPlaylist() {
    return (
        <form className="mb-5">
            <div className="form-row">
                <div className="col">
                    <input type="text" className="form-control" placeholder="Type playlist title"/>
                </div>
                <div className="col-auto">
                    <button className="btn btn-primary">Add</button>
                </div>
            </div>
        </form>
    )
}

export default AddPlaylist;