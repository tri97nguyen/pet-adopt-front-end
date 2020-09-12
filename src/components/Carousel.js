import React from "react";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      active: 0,
    };
    this.handleIndexClick = this.handleIndexClick.bind(this);
  }

  handleIndexClick(e) {
    this.setState({
      active: e.target.dataset.index,
    });
  }

  static getDerivedStateFromProps({ media }) {
    let photos = ["http://placecorgi.com/600/600"];

    if (media.length) {
      console.log(`media is ${media}`);
      photos = media.map((obj) => obj.large);
    }
    return { photos };
  }

  render() {
    const { photos, active } = this.state;
    return (
      <div className="carousel">
        <img src={photos[active]} alt="animal" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            <img
              src={photo}
              key={photo}
              alt="animal thumbnail"
              onClick={this.handleIndexClick}
              data-index={index}
              className={index === active ? "active" : ""}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
