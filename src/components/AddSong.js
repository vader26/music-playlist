import React, {useState} from "react";
import * as firebase from "firebase";

function AddSong({addSong}) {
    const [songTitle, setSongTitle] = useState('');
    const [loading, setLoading] = useState(false);
    const [file, setFile] = useState(null);
    function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
        firebase.storage().ref().child('songs/' + file.name).put(file).then(function (snapshot) {
           snapshot.ref.getDownloadURL().then(downloadURL => {
               addSong(songTitle, downloadURL);
               setSongTitle('');
               setLoading(false);
           });
        })
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
                            placeholder="Type song title"
                            value={songTitle}
                            onChange={(e) => setSongTitle(e.target.value)}
                            required/>
                </div>
                <div className="custom-file mb-3">
                    <input type="file" className="custom-file-input" id="music-file" onChange={handleFile} required/>
                    <label className="custom-file-label" htmlFor="music-file">Choose file...</label>
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

export default AddSong;