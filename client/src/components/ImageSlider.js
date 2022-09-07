import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Car1 from "../assets/car-1.jpg";
import Car2 from "../assets/car-2.jpg";
import Car3 from "../assets/car-3.jpg";
import Car4 from "../assets/car-4.jpg";
import Car5 from "../assets/car-5.jpg";

function ImageSlider() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Carousel {...settings}>
      <Wrap>
        <img src={Car1} alt="Pressure Checking" />
      </Wrap>
      <Wrap>
        <img src={Car2} alt="Wheel Alignment" />
      </Wrap>
      <Wrap>
        <img src={Car3} alt="Manual Car Washing" />
      </Wrap>
      <Wrap>
        <img src={Car4} alt="Automatic Car Washing" />
      </Wrap>
      <Wrap>
        <img src={Car5} alt="Group Photo" />
      </Wrap>
    </Carousel>
  );
}

export default ImageSlider;

const Carousel = styled(Slider)`
  padding: 24px 0;

  ul li button {
    &:before {
      color: rgb(150, 150, 171);
      font-size: 10px;
    }
  }

  li.slick-active button:before {
    color: white;
  }
  .slick-list {
    overflow: visible;
  }
  button.slick-arrow {
    display: none;
    &:before {
      display: none;
    }
  }
`;

const Wrap = styled.div`
  cursor: pointer;
  padding: 0 12px;
  img {
    border: 2px solid transparent;
    border-radius: 2px;
    width: 100%;
    max-height: 500px;
    object-fit: cover;
    z-index: 1;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;

    &:hover {
      border: 2px solid rgba(249, 249, 249, 0.8);
    }
  }
`;
