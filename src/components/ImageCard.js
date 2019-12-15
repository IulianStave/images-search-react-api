import React from 'react';

class ImageCard extends React.Component {
  // use Ref system to handle img
  constructor(props) {
    super(props);

    this.state = { spans: 0 };
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    // console.log(this.imageRef);
    // console.log(this.imageRef.current.clientHeight);
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    // when we get that height we use it to determine the img size 
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);
    this.setState({ spans })
  }

  render() {
    const { description, urls } = this.props.image;

    return (
      <div style ={{ gridRowEnd: `span ${this.state.spans}`}}>
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