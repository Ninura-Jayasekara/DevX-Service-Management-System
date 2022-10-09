import React, { useEffect, useState } from "react";
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

import SearchIcon from "@mui/icons-material/Search";

function CustomerDetails() {
  const accessToken = sessionStorage.getItem("userToken");

  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState([]);
  const [filterData, setFilterData] = useState([]);

  const authAxios = axios.create({
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const handleFilter = (e) => {
    const searchData = e.target.value;
    const newFilter = values.filter((val) =>
      val.NIC.slice(0, searchData.length).includes(searchData)
    );
    setFilterData(newFilter);
  };

  useEffect(() => {
    setLoading(true);
    authAxios.get("/api/customer/view").then((res) => {
      setValues(res.data);
      setFilterData(res.data);
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
            <div className="table-head">Customer Details</div>
          </InputComponent>
          <Loader>
            <RingLoader color="#36d7b7" loading={loading} />
          </Loader>
        </Wrap>
      ) : (
        <Wrap>
          <InputComponent>
            <div className="table-head">Customer Details</div>
            <InputGroup>
              <SearchIcon />
              <input type="text" placeholder="Search" onChange={handleFilter} />
            </InputGroup>
          </InputComponent>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead sx={{ background: "#36454f" }}>
                <TableRow>
                  <TableCell>NIC</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Phone&nbsp;Number</TableCell>
                  <TableCell>Address</TableCell>
                  <TableCell>Date</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filterData
                  ? filterData.map((value) => (
                      <TableRow
                        key={value.NIC}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {value.NIC}
                        </TableCell>
                        <TableCell>{value.Name}</TableCell>
                        <TableCell>{value.Email}</TableCell>
                        <TableCell>{value.Phone}</TableCell>
                        <TableCell>{value.Address}</TableCell>
                        <TableCell>{value.DOB.split("T")[0]}</TableCell>
                      </TableRow>
                    ))
                  : null}
              </TableBody>
            </Table>
          </TableContainer>
          <ButtonGroup>
            <Link to="add">
              <button>Add</button>
            </Link>
            <Link to="edit">
              <button>Edit</button>
            </Link>
            <Link to="delete">
              <button>Delete</button>
            </Link>
            <Link to="report">
              <button>Report</button>
            </Link>
          </ButtonGroup>
        </Wrap>
      )}
    </Container>
  );
}

export default CustomerDetails;

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

const Loader = styled.div`
  display: flex;
  justify-content: center;
`;
