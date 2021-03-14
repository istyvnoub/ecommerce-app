import React from "react";

export default function Rating(props) {
  const { rating, numRevies } = props;
  return (
    <div className="rating">
      <span>
        <i className="fa fa-start"></i>
      </span>
      <span>
        <i className="fa fa-start"></i>
      </span>
      <span>
        <i className="fa fa-start"></i>
      </span>
      <span>
        <i className="fa fa-start"></i>
      </span>
    </div>
  );
}
