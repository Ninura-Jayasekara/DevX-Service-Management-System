import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";

function ViewPayments() {
  const accessToken = sessionStorage.getItem("userToken");
  const [payments, setPayments] = useState([]);

  const authAxios = axios.create({
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  authAxios.get("/api/payment/fetch-payments").then((res) => {
    setPayments(res.data);
    toast.success(" Details Fetched", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
    });
  });

  return (
    <Container>
      <Wrap>
        <InputComponent>
          <div className="table-head">View Payment Details</div>
        </InputComponent>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead sx={{ background: "#36454f" }}>
              <TableRow>
              <TableCell align="right">Service ID</TableCell>
                <TableCell align="right">Cutomer Name</TableCell>
                <TableCell align="right">Vehicle Number</TableCell>
                <TableCell align="right">Service Date</TableCell>
                <TableCell align="right">Payment(Rs.)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {payments.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="right">{row.serviceId}</TableCell>
                  <TableCell align="right">{row.customerName}</TableCell>
                  <TableCell align="right">{row.vehicleNumber}</TableCell>
                  <TableCell align="right">{row.serviceDate}</TableCell>
                  <TableCell align="right">{row.amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <ButtonGroup>
          <Link to="/add-payment">
            <button>Add</button>
          </Link>
          <Link to="/payment/edit">
            <button>Edit</button>
          </Link>
          <Link to="/payment/report">
            <button>Report</button>
          </Link>
        </ButtonGroup>
      </Wrap>
    </Container>
  );
}

export default ViewPayments;

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
