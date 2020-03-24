import React from "react";
import PlaylistList from "../components/PlaylistList";
import AddPlaylist from "../components/AddPlaylist";

function Home() {
    const playlists = [
        {
            title: 'Playlist1'
        },
        {
            title: 'Playlist2'
        },
        {
            title: 'Playlist3'
        },
        {
            title: 'Playlist4'
        },
        {
            title: 'Playlist5'
        },
        {
            title: 'Playlist6'
        },

    ];

    return (
        <div>
            <AddPlaylist/>
            <PlaylistList playlists={playlists}/>
        </div>

    )
}

export default Home;