import React from "react";
import styled from "styled-components";
import ImageSlider from "./ImageSlider";
import background from "../assets/background.jpg";

function Home() {
  return (
    <Container back={background}>
      <ImageSlider />
    </Container>
  );
}

export default Home;

const Container = styled.main`
  min-height: calc(100vh - 60px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow-x: hidden;

  &:before {
    background: ${(props) =>
      `url(${props.back}) center center / cover no-repeat fixed`};
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: -1;
  }
`;
