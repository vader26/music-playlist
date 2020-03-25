import React from "react";
import Song from "./Song";

function SongList({songs, updateSong, deleteSong}) {
    return (
        <div>
            {songs.map(s => {
                const song = {
                    id: s.id,
                    title: s.title,
                    src: s.src
                };
                return (
                    <Song song={song} updateSong={updateSong} deleteSong={deleteSong} key={song.id}/>
                )
            })}
        </div>
    )
}

export default SongList;