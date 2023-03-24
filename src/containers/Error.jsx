import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="ui grid container">
        <h2>404. Sorry, the page you tried cannot be found </h2>
        <Link to="./" className="btn">
          BACK HOME
        </Link>
    </div>
  );
};

export default Error;
