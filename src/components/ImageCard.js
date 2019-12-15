import React from 'react';

class ImageCard extends React.Component {
  // use Ref system to handle img
  constructor(props) {
    super(props);

    this.imageRef = React.createRef();
  }

  render() {
    const { description, urls } = this.props.image;

    return (
      <div>
        <img
          ref={this.imageRef}
          alt={description}
          src={urls.regular}
        />
      </div>
    );
  }
}

export default ImageCard;