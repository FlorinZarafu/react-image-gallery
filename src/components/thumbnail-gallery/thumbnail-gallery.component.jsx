import React from "react";
import "./thumbnail-gallery.styles.css";
import ActiveThumbnailWindow from "../active-thumbnail-window/active-thumbnail-window.component";
import ThumbnailGrid from "../thumbnail-grid/thumbnail-grid.component";
import axios from "axios";

class ThumbnailGallery extends React.Component {
  state = {
    thumbnails: [],
    activeIndex: 0,
  };
  componentDidMount() {
    axios
      .get(
        `https://gist.githubusercontent.com/DZuz14/56b7f363e9787fb4c0240eb145bc2b9f/raw/e0b67d18352704d155929b7e27e0dae08cc383b6/data.json`
      )
      .then((res) => {
        this.setState({
          thumbnails: res.data.thumbnails,
        });
      });
  }
  renderThumbnails = () => {
    const { thumbnails, activeIndex } = this.state;
    if (thumbnails.length) {
      return (
        <>
          <ActiveThumbnailWindow activeThumbnail={thumbnails[activeIndex]} />
          <ThumbnailGrid
            handleClick={this.handleClick}
            thumbnails={thumbnails}
          />
        </>
      );
    }
  };
  renderText = () => {
    const { thumbnails, activeIndex } = this.state;
    if (thumbnails.length) {
      return (
        <>
          <h3>{thumbnails[activeIndex].title}</h3>
          <p>{thumbnails[activeIndex].bodyText}</p>
        </>
      );
    }
  };
  handleClick = (e) => {
    const newActiveIndex = e.target.getAttribute("data-index");
    console.log(newActiveIndex);
    this.setState({
      activeIndex: newActiveIndex,
    });
  };
  render() {
    // const { thumbnails } = this.state;
    return (
      <div className="thumbnail-gallery">
        {/* left */}
        <div style={{ flex: 1 }}>{this.renderThumbnails()}</div>
        {/* right */}
        <div style={{ flex: 1, padding: "40px" }}>{this.renderText()}</div>
      </div>
    );
  }
}
export default ThumbnailGallery;
