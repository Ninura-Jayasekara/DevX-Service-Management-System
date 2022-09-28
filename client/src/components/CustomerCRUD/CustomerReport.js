import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";

import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";

function CustomerReport() {
  const [values, setValues] = useState([]);
  const authAxios = axios.create({
    baseURL: "http://localhost:3001",
    // headers: {
    //   Authorization: `Bearer ${accessToken}`,
    // },
  });

  const createData = (name, calories, fat, carbs, protein) => {
    return { name, calories, fat, carbs, protein };
  };

  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];

  useEffect(() => {
    authAxios.get("/api/customer/view").then((res) => {
      setValues(res.data);
    });
  }, []);
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
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead sx={{ background: "#36454f" }}>
              <TableRow>
                <TableCell>NIC</TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">Address</TableCell>
                <TableCell align="right">Last&nbsp;Visit</TableCell>
                <TableCell align="right">No&nbsp;of&nbsp;Visit</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {values.map((val) => (
                <TableRow
                  key={val._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {val.NIC}
                  </TableCell>
                  <TableCell align="right">{val.Name}</TableCell>
                  <TableCell align="right">{val.Email}</TableCell>
                  <TableCell align="right">{val.Address}</TableCell>
                  <TableCell align="right">
                    {val.DateOfVisit.split("T")[0]}
                  </TableCell>
                  <TableCell align="right">{val.noOfVisit}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <ButtonGroup>
          <Link to="#">
            <button>Sort</button>
          </Link>
          <Link to="#">
            <button>Print</button>
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
