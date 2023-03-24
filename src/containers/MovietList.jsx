import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setMoviesOptimize } from "../redux/actions/movie";
import MovieComponent from "./MovieComponent";

const MovietList = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setMoviesOptimize());
    }, []);

    return (
        <div className="ui grid container">
            <MovieComponent />
        </div>
    )
}

export default MovietList