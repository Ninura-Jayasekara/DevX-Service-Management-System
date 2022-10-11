import React, { useRef } from "react";
import { Link } from "react-router-dom";
import ReactToPrint from "react-to-print";
import "chart.js/auto";
import styled from "styled-components";

import CustomerChartData from "./CustomerChartData";

import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";

function CustomerChart() {
  const componentRef = useRef();

  return (
    <Container>
      <Wrap>
        <InputComponent>
          <div className="table-head">Customer Chart</div>
          <InputGroup>
            <ReactToPrint
              bodyClass="print"
              pageStyle="A3"
              trigger={() => (
                <ButtonGroup>
                  <input type="submit" value="Print" />
                </ButtonGroup>
              )}
              content={() => componentRef.current}
            />
            <Link to="/customer/report">
              <KeyboardReturnIcon style={{ color: "white" }} />
            </Link>
          </InputGroup>
        </InputComponent>
        <CustomerChartData ref={componentRef} />
      </Wrap>
    </Container>
  );
}

export default CustomerChart;

const Container = styled.main`
  min-height: calc(100vh);
  padding: 60px calc(3vw) 0px;
  overflow-x: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrap = styled.div`
  margin: 10px 0;
  padding: 10px calc(0.5vw + 5px);
  background: #151e3d;
  border-radius: 12px;
  width: 100%;
  min-height: 50vh;
  max-width: 75vw;

  @media (max-width: 1320px) {
    max-width: 80vw;
  }
`;
const InputComponent = styled.div`
  display: flex;
  padding: 10px 0;
  div.table-head {
    flex: 1;
    text-transform: uppercase;
    font-size: 20px;
    position: relative;

    &:after {
      position: absolute;
      content: "";
      bottom: 0px;
      left: 0;
      width: 40px;
      height: 2px;
      background: #733635;
    }
  }

  @media (max-width: 570px) {
    flex-direction: column;
    div.table-head {
      margin: 0 auto 10px;

      &:after {
        display: none;
      }
    }
  }
`;
const InputGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  input {
    border-radius: 5px;
    color: #f5f5f5;
    font-size: 16px;
    padding: 6px;
    outline: none;
    border: none;
    background: #404040;
    transition: all 0.3s ease 0s;

    &:focus {
      box-shadow: 0 0 0 2px #909090;
    }
  }
`;
const ButtonGroup = styled.span`
  display: flex;
  margin: 0 12px;
  justify-content: space-around;

  input {
    width: 100px;
    height: 35px;
    border-radius: 15px;
    background: #3cb043;
  }
`;
