import React from "react";
import styled from "styled-components";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";

import background from "./assets/background.jpg";

function App() {
  return (
    <Container bgImage={background}>
      <Navbar />
      <Home />
      <Footer />
    </Container>
  );
}

export default App;

const Container = styled.div`
  min-height:100vh;
  position: relative;
  min-width: 300px;
  &:before {
      background: ${(props) =>
        `url(${props.bgImage}) center center / cover no-repeat fixed`};
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      z-index: -1;
`;
