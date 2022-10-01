import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ReactToPrint from "react-to-print";
import CustomerReportData from "./CustomerReportData";

import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";

function CustomerReport() {
  const componentRef = useRef();
  const [isSort, setIsSort] = useState(true);

  return (
    <Container>
      <Wrap>
        <InputComponent>
          <div className="table-head">Customer Report</div>
          <InputGroup>
            <Link to="/customer">
              <KeyboardReturnIcon style={{ color: "white" }} />
            </Link>
          </InputGroup>
        </InputComponent>
        <CustomerReportData ref={componentRef} isSort={isSort} />
        <ButtonGroup>
          <Link to="#">
            <button onClick={() => setIsSort(!isSort)}>Sort</button>
          </Link>
          <Link to="#">
            <ReactToPrint
              trigger={() => <button>Print</button>}
              content={() => componentRef.current}
            />
          </Link>
          <Link to="/customer/chart">
            <button>Chart</button>
          </Link>
        </ButtonGroup>
      </Wrap>
    </Container>
  );
}

export default CustomerReport;

const Container = styled.main`
  min-height: calc(100vh);
  padding: 60px calc(3vw) 0px;
  overflow-x: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrap = styled.div`
  padding: 10px calc(0.5vw + 5px);
  background: #151e3d;
  border-radius: 12px;
  width: 100%;
  min-height: 50vh;
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
const ButtonGroup = styled.div`
  padding: 6px 0 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  button {
    cursor: pointer;
    padding: 5px;
    margin: 0 3px;
    background: #404040;
    border: none;
    border-radius: 5px;
    transition: all 0.3s ease 0s;

    &:hover {
      box-shadow: 0 0 0 2px #909090;
    }
  }
`;
