import React, { useState } from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    //  todo will solve this thing after learing hooks */
    this.state = { spans: 0 };
    this.imgRef = React.createRef();
  }

  componentDidMount() {
    // console.log(this.imgRef);
    this.imgRef.current.addEventListener("load", this.setSpans);
    // console.log(this.imgRef.current.clientHeight);
  }

  setSpans = () => {
    const height = this.imgRef.current.clientHeight;

    const spans = Math.ceil(height / 150);

    this.setState({ spans });
    console.log(spans);
  };

  getSpans = () => {
    return this.state.spans;
  };

  render() {
    // console.log(this.props);

    return (
      <img
        ref={this.imgRef}
        src={this.props.img}
        // style={{ gridRowEnd: `span ${this.state.spans}` }}
        alt={this.props.alt}
      />
    );
  }
}
// const ImageCard = (props) => {
//   const [spans, setSpans] = useState();

//   const
// }

export default ImageCard;
