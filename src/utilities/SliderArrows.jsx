import React from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <FaChevronRight
      fill="white"
      size={40}
      className={className}
      style={{ ...style }} // Customize the style as needed
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <FaChevronLeft
      fill="white"
      size={40}
      className={className}
      style={{ ...style }} // Customize the style as needed
      onClick={onClick}
    />
  );
};

export { NextArrow, PrevArrow };
