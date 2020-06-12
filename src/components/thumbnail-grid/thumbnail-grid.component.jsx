import React from "react";
import "./thumbnail-grid.styles.css";
import Thumbnail from "../thumbnail/thumbnail.component";

const ThumbnailGrid = ({ thumbnails, handleClick }) => {
  console.log(thumbnails);
  return (
    <div className="thumbnail-grid">
      {thumbnails.map((thumbnail, i) => (
        <Thumbnail
          key={thumbnail.imgUrl}
          imgUrl={thumbnail.imgUrl}
          handleClick={handleClick}
          index={i}
        />
      ))}
    </div>
  );
};
export default ThumbnailGrid;
