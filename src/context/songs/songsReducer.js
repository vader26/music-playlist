import {SHOW_LOADER, FETCH_SONGS, ADD_SONG, UPDATE_SONG, DELETE_SONG} from "../types";

const handlers = {
    [SHOW_LOADER]: (state) => ({...state, loading: true}),
    [FETCH_SONGS]: (state, {payload}) => ({...state, songs: payload, loading: false}),
    [ADD_SONG]: (state, {payload}) => ({...state, songs: [payload, ...state.songs]}),
    [UPDATE_SONG]: (state, {payload}) => ({
        ...state,
        songs: state.songs.map(song => song.id === payload.id ? {...song, title: payload.title} : song)
    }),
    [DELETE_SONG]: (state, {payload}) => ({...state, songs: state.songs.filter(song => song.id !== payload)}),
    DEFAULT: state => state
};

export const songsReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT;
    return handle(state, action);
};