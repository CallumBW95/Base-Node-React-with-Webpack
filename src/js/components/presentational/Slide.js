import React, { Component } from 'react';
import PropTypes from "prop-types";

const Slide = ({style}}) => {
  <div style={style} className="slide"></div>
}

Slide.propTypes = {
  style: PropTypes.array
};
export default Slide;
