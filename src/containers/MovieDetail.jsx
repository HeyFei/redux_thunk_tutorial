import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectMovieOptimize, removeSelectMovie } from "../redux/actions/movie";

const MovieDetail = () => {
  const dispatch = useDispatch();
  const { topId } = useParams();

  useEffect(() => {
    if (topId && topId !== "") dispatch(selectMovieOptimize(topId));
    return () => {
      dispatch(removeSelectMovie());
    };
  }, [topId])

  const movieDetail = useSelector((state) => state.movieDetail);
  const { image, title, director, writers, description } = movieDetail;

  return (
    <div className="ui grid container">
      {Object.keys(movieDetail).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={image} />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <a className="ui teal tag label">{director}</a>
                </h2>
                <h3 className="ui brown block header">{writers}</h3>
                <p>{description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default MovieDetail