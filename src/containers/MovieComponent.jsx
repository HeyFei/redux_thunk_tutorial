import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const MovieComponent = () => {
  const movies = useSelector((state) => state.movieList.movies);
  const renderList = movies.map((movie) => {
    const { id, title, image, rating, year } = movie;
    return (
      <div className="four wide column" key={id}>
        <Link to={`/movie/${id}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={image} alt={title} />
              </div>
              <div className="content">
                <div className="header">{title}</div>
                <div className="meta price">Rating: {rating}</div>
                <div className="meta">{year}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    )
  });

  return <>{renderList}</>
}

export default MovieComponent