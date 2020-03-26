import {SHOW_LOADER, FETCH_PLAYLISTS, ADD_PLAYLIST, UPDATE_PLAYLIST, DELETE_PLAYLIST} from "../types";

const handlers = {
    [SHOW_LOADER]: (state) => ({...state, loading: true}),
    [FETCH_PLAYLISTS]: (state, {payload}) => ({...state, playlists: payload, loading: false}),
    [ADD_PLAYLIST]: (state, {payload}) => ({...state, playlists: [payload, ...state.playlists]}),
    [UPDATE_PLAYLIST]: (state, {payload}) => ({
        ...state,
        playlists: state.playlists.map(playlist => playlist.id === payload.id ? {...playlist, title: payload.title} : playlist)
    }),
    [DELETE_PLAYLIST]: (state, {payload}) => ({...state, playlists: state.playlists.filter(playlist => playlist.id !== payload)}),
    DEFAULT: state => state
};

export const playlistsReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT;
    return handle(state, action);
};