import { imbdOptions, fetchData } from "../../utils/fetchData";
import { ActionTypes } from "../contants/action_types";

export const setMovies = () => async (dispatch) => {
    const response = await fetchData("https://imdb-top-100-movies.p.rapidapi.com/", imbdOptions);
    dispatch({ type: ActionTypes.SET_MOVIES, payload: response });
};

export const selectMovie = (topId) => async (dispatch) => {
    const response = await fetchData(`https://imdb-top-100-movies.p.rapidapi.com/${topId}`, imbdOptions);
    dispatch({ type: ActionTypes.SELECTED_MOVIE, payload: response });
}

export const setMoviesOptimize = () => (dispatch) => {
    return fetchData(`https://imdb-top-100-movies.p.rapidapi.com/`, imbdOptions).then(
        (response) => {
            dispatch({
                type: ActionTypes.SET_MOVIES,
                payload: response
            });

            return Promise.resolve();
        },
        (error) => {
            return Promise.reject();
        }
    )
}

export const selectMovieOptimize = (topId) => (dispatch) => {
    return fetchData(`https://imdb-top-100-movies.p.rapidapi.com/${topId}`, imbdOptions).then(
        (response) => {
            dispatch({
                type: ActionTypes.SELECTED_MOVIE,
                payload: response
            });

            return Promise.resolve();
        },
        (error) => {
            return Promise.reject();
        }
    )
}

export const removeSelectMovie = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_MOVIE,
    };
};