import React from "react";
import "./thumbnail.styles.css";

const Thumbnail = ({ imgUrl, handleClick, index }) => {
  return (
    <div className="thumbnail">
      <img src={imgUrl} alt="" onClick={handleClick} data-index={index} />
    </div>
  );
};
export default Thumbnail;
