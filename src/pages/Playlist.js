/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useContext} from "react";
import Songs from "../components/Songs";
import AddSong from "../components/AddSong";
import Loader from "../components/Loader";
import {SongsContext} from "../context/songs/songsContext";

function Playlist() {
    const {loading, songs, fetchSongs} = useContext(SongsContext);
    useEffect(() => {
        fetchSongs();
    }, []);

    return (
        <div>
            <AddSong/>
            {loading ? <Loader/> : songs.length ?
                <Songs songs={songs}/>
                :
                <p className="text-center">You don't have songs</p>
            }

        </div>
    )
}

export default Playlist;