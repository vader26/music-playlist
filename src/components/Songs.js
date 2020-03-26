import React, {Fragment} from "react";
import Song from "./Song";

function Songs({songs}) {
    return (
        <Fragment>
            {songs.map(s => {
                const song = {
                    id: s.id,
                    title: s.title,
                    src: s.src
                };
                return (
                    <Song song={song} key={song.id}/>
                )
            })}
        </Fragment>
    )
}

export default Songs;