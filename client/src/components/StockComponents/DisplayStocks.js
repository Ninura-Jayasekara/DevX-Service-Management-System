import React, { useState, useEffect } from "react";
import { RingLoader } from "react-spinners";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";


function DisplayStocks() {
  const accessToken = sessionStorage.getItem("userToken");
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(false);

  const authAxios = axios.create({
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  useEffect(() => {
    setLoading(true);
  authAxios.get("/api/stock/fetch-stock").then((res) => {
    setStocks(res.data);
    console.log(res.data);
  });
  setTimeout(() => {
    setLoading(false);
  }, 1000);
}, []);


  return (
    <Container>
      {loading ? (
        <Wrap>
          <InputComponent>
            <div className="table-head">Spare Part Details</div>
          </InputComponent>
          <Loader>
            <RingLoader color="#36d7b7" loading={loading} />
          </Loader>
        </Wrap>
      ) : (
      <Wrap>
        <InputComponent>
          <div className="table-head">Spare Part Details</div>
        </InputComponent>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead sx={{ background: "#36454f" }}>
              <TableRow>
                <TableCell align="right">Item Code</TableCell>
                <TableCell align="right">Brand</TableCell>
                <TableCell align="right">Country</TableCell>
                <TableCell align="right">Spare Part</TableCell>
                <TableCell align="right">Dealer</TableCell>
                <TableCell align="right">Price (Rs.)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {stocks.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="right">{row.itemCode}</TableCell>
                  <TableCell align="right">{row.brand}</TableCell>
                  <TableCell align="right">{row.country}</TableCell>
                  <TableCell align="right">{row.sparePart}</TableCell>
                  <TableCell align="right">{row.dealerName}</TableCell>
                  <TableCell align="right">{row.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <ButtonGroup>
          <Link to="/stock/add">
            <button>Add</button>
          </Link>
          <Link to="/stock/update-delete">
            <button>Edit</button>
          </Link>
          <Link to="/stock-report">
            <button>Report</button>
          </Link>
        </ButtonGroup>
      </Wrap>
      )}
    </Container>
  );
}

export default DisplayStocks;

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

const ButtonGroup = styled.div`
  padding: 20px 0 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  button {
    cursor: pointer;
    padding: 10px;
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

const Loader = styled.div`
  display: flex;
  justify-content: center;
`;
