import React from "react";
import "./active-thumbnail-window.styles.css";

const ActiveThumbnailWindow = ({ activeThumbnail }) => {
  console.log(activeThumbnail);
  return (
    <div className="active-thumbnail">
      <img src={activeThumbnail.imgUrl} alt="" />
    </div>
  );
};
export default ActiveThumbnailWindow;
