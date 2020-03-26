/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useContext, Fragment} from "react";
import Playlists from "../components/Playlists";
import Loader from "../components/Loader";
import {PlaylistsContext} from "../context/playlists/playlistsContext";

function Home() {
    const {loading, playlists, fetchPlaylists} = useContext(PlaylistsContext);
    useEffect(() => {
        fetchPlaylists();
    }, []);

    return (
        <Fragment>
            {loading ? <Loader/> : playlists.length ?
                <Playlists playlists={playlists}/>
                :
                <p className="text-center">You don't have playlists</p>
            }
        </Fragment>

    )
}

export default Home;