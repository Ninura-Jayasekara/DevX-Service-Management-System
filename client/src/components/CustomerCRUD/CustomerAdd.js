import React, { useRef, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Customer from "../../assets/Customer.jpg";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import PersonIcon from "@mui/icons-material/Person";
import ClearIcon from "@mui/icons-material/Clear";
import TokenIcon from "@mui/icons-material/Token";
import PhoneIcon from "@mui/icons-material/Phone";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import WcIcon from "@mui/icons-material/Wc";
import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function CustomerAdd() {
  const accessToken = sessionStorage.getItem("userToken");

  const [values, setValues] = useState({
    NIC: "",
    Name: "",
    DOB: new Date().toLocaleDateString("en-CA"),
    Phone: "",
    Gender: "",
    Address: "",
    Email: "",
    noOfVisit: "1",
    DateOfVisit: new Date().toLocaleDateString("en-CA"),
  });

  const authAxios = axios.create({
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const inputNIC = useRef();
  const inputName = useRef();
  const inputPhone = useRef();
  const inputAddress = useRef();
  const inputEmail = useRef();
  const inputDOB = useRef();
  const inputGender = useRef();

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const resetValue = () => {
    inputAddress.current.value = "";
    values.Address = "";
    inputEmail.current.value = "";
    values.Email = "";
    inputNIC.current.value = "";
    values.NIC = "";
    inputPhone.current.value = "";
    values.Phone = "";
    inputName.current.value = "";
    values.Name = "";
    inputGender.current.value = "";
    values.Gender = "";
    inputDOB.current.value = new Date().toLocaleDateString("en-CA");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    authAxios
      .post("/api/customer/add", values)
      .then((res) => {
        toast.success(res.data.msg, {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
        });
        resetValue();
      })
      .catch((e) => {
        console.log(e);
        toast.warning(e.response.data, {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
        });
      });
  };
  return (
    <Container>
      <ToastContainer />
      <Wrap>
        <InputComponent>
          <div className="table-head">Customer Registeration</div>
          <InputGroup>
            <Link to="/customer">
              <KeyboardReturnIcon style={{ color: "white" }} />
            </Link>
          </InputGroup>
        </InputComponent>
        <form onSubmit={handleSubmit}>
          <Input>
            <ImageWrapper src={Customer} />
            <InputWrapper>
              <div>
                <label htmlFor="NIC">NIC</label>
                <div className="input-group">
                  <TokenIcon className="left" />
                  <input
                    type="text"
                    name="NIC"
                    id="NIC"
                    ref={inputNIC}
                    value={values.NIC}
                    placeholder="970893342v"
                    minLength={10}
                    maxLength={11}
                    required
                    onChange={handleChange}
                  />
                  <ClearIcon
                    className="right"
                    onClick={() => {
                      inputNIC.current.focus();
                      inputNIC.current.value = "";
                      values.NIC = "";
                    }}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="Name">Name</label>
                <div className="input-group">
                  <PersonIcon className="left" />
                  <input
                    type="text"
                    name="Name"
                    id="Name"
                    placeholder="John Smith"
                    minLength={2}
                    required
                    ref={inputName}
                    value={values.Name}
                    onChange={handleChange}
                  />
                  <ClearIcon
                    className="right"
                    onClick={() => {
                      inputName.current.focus();
                      inputName.current.value = "";
                      values.Name = "";
                    }}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="DOB">DOB</label>
                <div className="input-group">
                  <CalendarMonthIcon className="left" />
                  <input
                    type="date"
                    name="DOB"
                    id="DOB"
                    required
                    ref={inputDOB}
                    defaultValue={values.DOB}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="Phone">Phone</label>
                <div className="input-group">
                  <PhoneIcon className="left" />
                  <input
                    type="text"
                    placeholder="0775645645"
                    pattern="(?:7|0|(?:\+94))[0-9]{9,10}$"
                    minLength={9}
                    maxLength={10}
                    required
                    name="Phone"
                    id="Phone"
                    ref={inputPhone}
                    value={values.Phone}
                    onChange={handleChange}
                  />
                  <ClearIcon
                    className="right"
                    onClick={() => {
                      inputPhone.current.focus();
                      inputPhone.current.value = "";
                      values.Phone = "";
                    }}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="Gender">Gender</label>
                <div className="input-group">
                  <WcIcon className="left" />
                  <select
                    name="Gender"
                    id="Gender"
                    ref={inputGender}
                    value={values.Gender}
                    required
                    onChange={handleChange}
                  >
                    <option value="" disabled selected>
                      None
                    </option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                  <KeyboardArrowDownIcon className="right" />
                </div>
              </div>

              <div>
                <label htmlFor="Address">Address</label>
                <div className="input-group">
                  <HomeIcon className="left" />
                  <input
                    type="text"
                    name="Address"
                    id="Address"
                    required
                    placeholder="No: 88/1, Princess Gate, Colombo-12"
                    ref={inputAddress}
                    value={values.Address}
                    onChange={handleChange}
                  />
                  <ClearIcon
                    className="right"
                    onClick={() => {
                      inputAddress.current.focus();
                      inputAddress.current.value = "";
                      values.Address = "";
                    }}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="Email">Email</label>
                <div className="input-group">
                  <EmailIcon className="left" />
                  <input
                    type="email"
                    name="Email"
                    placeholder="abc@gmail.com"
                    id="Email"
                    required
                    ref={inputEmail}
                    value={values.Email}
                    onChange={handleChange}
                  />
                  <ClearIcon
                    className="right"
                    onClick={() => {
                      inputEmail.current.focus();
                      inputEmail.current.value = "";
                      values.Email = "";
                    }}
                  />
                </div>
              </div>
              <ButtonGroup>
                <input
                  type="button"
                  value="Reset"
                  onClick={() => {
                    resetValue();
                  }}
                />
                <input type="submit" value="Submit" />
              </ButtonGroup>
            </InputWrapper>
          </Input>
        </form>
      </Wrap>
    </Container>
  );
}

export default CustomerAdd;

const Container = styled.main`
  min-height: calc(100vh);
  padding: 60px calc(3vw) 0px;
  overflow-x: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrap = styled.div`
  padding: 5px calc(0.5vw);
  margin: 5px;
  background: #151e3d;
  border-radius: 12px;
  min-height: 50vh;
  width: 100%;
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

const Input = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const InputWrapper = styled.div`
  padding: 20px;
  border-left: 2px dashed black;
  display: flex;
  flex-direction: column;
  div {
    display: flex;
    flex-direction: column;

    label {
      margin: 6px 0 6px;
    }

    input,
    select {
      outline: none;
      border: none;
      appearance: none;
      width: 100%;
      height: 30px;
      padding: 3px 12px;
      padding-left: 40px;

      &:focus {
        border-bottom: 1px solid white;
      }
    }
    .input-group {
      display: block;
      position: relative;
      overflow: hidden;
      border-radius: 50px;

      .left {
        position: absolute;
        height: 100%;
        margin-left: 5px;
        top: 0;
        bottom: 0;
        left: 0;
        color: black;
        border-right: 1px solid black;
      }
      .right {
        position: absolute;
        height: 100%;
        margin-right: 10px;
        top: 0;
        bottom: 0;
        right: 0;
        color: black;
      }
    }
  }

  @media (max-width: 600px) {
    padding: 0 20px;
    margin: 10px;
    border: none;
    border-top: 2px dashed black;
  }
`;

const ImageWrapper = styled.img`
  display: flex;
  justify-self: flex-start;
  align-self: center;
  border-radius: 10px;
  width: 95%;
  height: 100%;
  object-fit: cover;
  @media (max-width: 600px) {
    justify-self: center;
  }
`;

const ButtonGroup = styled.span`
  margin: 12px 0;
  display: flex;
  justify-content: space-around;

  input {
    width: 100px;
    height: 30px;
    border-radius: 15px;
  }
  input:last-child {
    background: #3cb043;
  }
  input:first-child {
    background: red;
  }
`;
