import { ActionTypes } from "../contants/action_types";

const initialState = {
    movies: [],
};

export const movieList = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_MOVIES:
            return { ...state, movies: payload };
        default:
            return state;
    }
};

export const movieDetail = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionTypes.SELECTED_MOVIE:
            return { ...state, ...payload };
        case ActionTypes.REMOVE_SELECTED_MOVIE:
            return {};
        default:
            return state;
    }
};

export default function (state = initialState, { type, payload }) {
    switch (type) {
        case ActionTypes.SET_MOVIES:
            return { ...state, movies: payload };
        case ActionTypes.SELECTED_MOVIE:
            return { ...state, ...payload };
        case ActionTypes.REMOVE_SELECTED_MOVIE:
            return {};
        default:
            return state;
    }
};