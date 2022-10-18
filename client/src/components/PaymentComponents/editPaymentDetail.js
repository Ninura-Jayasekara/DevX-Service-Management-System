import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
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
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import UpdateIcon from "@mui/icons-material/Update";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";

export default function EditPayment() {
  const [serviceId, setServiceId] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [serviceDate, setServiceDate] = useState("");
  const [amount, setAmount] = useState("");
  const [input, setInput] = useState("");

  const [readOnly, setreadOnly] = useState(true);
  const navigate = useNavigate();

  const accessToken = sessionStorage.getItem("userToken");

  const authAxios = axios.create({
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const loadPaymentDetails = async () => {
    await authAxios
      .get(`/api/payment/search?q=${input}`)
      .then((res) => {
        setServiceId(res.data.payments.serviceId)
        setCustomerName(res.data.payments.customerName);
        setVehicleNumber(res.data.payments.vehicleNumber);
        setServiceDate(res.data.payments.serviceDate);
        setAmount(res.data.payments.amount);
        console.log(res.data)
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  //set readonly
  const activate = () => {
    setreadOnly(false);
  };

  //update selling price function

  const onSubmit = async (e) => {
    e.preventDefault();

    const newAmount = {
      amount,
    };
    console.log(newAmount);

    await authAxios
      .patch(`/api/payment/update/${serviceId}`, newAmount)
      .then(() => {
        alert("Price updated Successfully");
        navigate("/payment");
        window.location.reload(true);
      })
      .catch((err) => {
        alert(err);
      });
  };

  //delete items functions

  const onDelete = async () => {
    await authAxios
      .delete(`/api/payment/delete/${serviceId}`)
      .then(() => {
        window.alert("Do you want to delete the selected payment?");
        alert("Payment Deleted Successfully");
        navigate("/payment");
        window.location.reload(true);
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <Container>
      <Wrap>
        <InputComponent>
          <div className="table-head">Update And Delete Payment</div>
          <InputGroup>
            <SearchIcon onClick={loadPaymentDetails} />
            <input
              type="text"
              id="input"
              value={input}
              placeholder="Search"
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
          </InputGroup>
          <InputGroup>
            <Link to="/payment">
              <KeyboardReturnIcon style={{ color: "white" }} />
            </Link>
          </InputGroup>
        </InputComponent>
        <br></br>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead sx={{ background: "#36454f" }}>
              <TableRow>
                <TableCell align="right">Customer Name</TableCell>
                <TableCell align="right">vehicle Number</TableCell>
                <TableCell align="right">Service Date</TableCell>
                <TableCell align="right">Payment (Rs.)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="right">{customerName}</TableCell>
                <TableCell align="right">{vehicleNumber}</TableCell>
                <TableCell align="right">{serviceDate}</TableCell>
                <TableCell align="right">
                  <input
                    type="number"
                    name="amount"
                    id="amount"
                    value={amount}
                    readOnly={readOnly}
                    onChange={(e) => {
                      setAmount(e.target.value);
                    }}
                  />

                  <EditIcon className="right" onClick={activate} />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <ButtonGroup>
          <Button
            variant="outlined"
            color="success"
            onClick={onSubmit}
            startIcon={<UpdateIcon />}
          >
            Update
          </Button>
          <Button
            variant="outlined"
            color="error"
            onClick={onDelete}
            startIcon={<DeleteIcon />}
          >
            Delete
          </Button>
        </ButtonGroup>
      </Wrap>
    </Container>
  );
}

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
