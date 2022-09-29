import React from "react";
import styled from "styled-components";
import Error from "../assets/error.png";

function PageNotFound() {
  return (
    <Container>
      <Content>
        <ImageWrapper src={Error} />
        <div>
          The page you are looking for might have been removed had its name
          changed or is temporarily unavailable.
        </div>
      </Content>
      <button>Home Page</button>
    </Container>
  );
}

const Container = styled.main`
  min-height: calc(100vh);
  padding: 60px calc(3.5vw + 5px) 0px;
  overflow-x: hidden;
`;

const Content = styled.div`
  margin: 50px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ImageWrapper = styled.img`
  width: 50%;
  height: fit-content;
  filter: drop-shadow(8px 8px 10px gray);
  object-fit: cover;
`;

export default PageNotFound;
