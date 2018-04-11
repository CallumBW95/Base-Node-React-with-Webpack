import React, { Component } from "react";
import ReactDOM from "react-dom";
import Slide from '../container/Slider'

class Slider extends Component {
  constructor() {
    super();
  }
  render() {
    const slides = [
      {
        backgroundImage: 'url(/src/img/1.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      },
      {
        backgroundImage: 'url(/src/img/2.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      },
      {
        backgroundImage: 'url(/src/img/3.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      },
    ];
    console.log(slides);
    return (
      <p>test</p>
      // <Slide />
      // <div className="slider">
      // {slides.map(
      //   (slide) => {
      //     return (
      //       <Slide style={slide} />
      //     )
      //   })
      // }
      // </div>
    )
  }
}
export default Slider;
const wrapper = document.getElementById("slider");
wrapper ? ReactDOM.render(<Slider />, wrapper) : false;
