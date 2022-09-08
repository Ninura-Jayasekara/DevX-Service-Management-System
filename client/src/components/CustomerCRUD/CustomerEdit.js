import React, { useRef, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Image from "../../assets/Customer.jpg";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import EditIcon from "@mui/icons-material/Edit";
import TokenIcon from "@mui/icons-material/Token";
import PhoneIcon from "@mui/icons-material/Phone";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import WcIcon from "@mui/icons-material/Wc";
import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";

function CustomerEdit() {
  const [values, setValues] = useState({
    NIC: "",
    Name: "",
    Date: "",
    Phone: "",
    Gender: "Male",
    Address: "",
    Email: "",
  });

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  const inputNIC = useRef();
  const inputName = useRef();
  const inputPhone = useRef();
  const inputAddress = useRef();
  const inputEmail = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Container>
      <ToastContainer />
      <Wrap>
        <InputComponent>
          <div className="table-head">Customer Registeration</div>
          <InputGroup>
            <SearchIcon sx={{ marginRight: "5px" }} />
            <input type="text" placeholder="Search" />
            <Link to="/customer">
              <KeyboardReturnIcon
                style={{ color: "white", marginLeft: "5px" }}
              />
            </Link>
          </InputGroup>
        </InputComponent>
        <Form onSubmit={handleSubmit}>
          <Input>
            <ImageWrapper src={Image} />
            <InputWrapper>
              <div>
                <label htmlFor="NIC">NIC</label>
                <div className="input-group">
                  <TokenIcon className="left" />
                  <input
                    type="text"
                    name="NIC"
                    id="NIC"
                    disabled
                    ref={inputNIC}
                    onChange={handleChange}
                  />
                  <EditIcon
                    className="right"
                    onClick={() => {
                      inputNIC.current.getAttribute("disabled") == null
                        ? inputNIC.current.setAttribute("disabled", "")
                        : inputNIC.current.removeAttribute("disabled");
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
                    disabled
                    ref={inputName}
                  />
                  <EditIcon
                    className="right"
                    onClick={() => {
                      inputName.current.getAttribute("disabled") == null
                        ? inputName.current.setAttribute("disabled", "")
                        : inputName.current.removeAttribute("disabled");
                    }}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="DOB">DOB</label>
                <div className="input-group">
                  <CalendarMonthIcon className="left" />
                  <input type="date" name="DOB" id="DOB" />
                </div>
              </div>
              <div>
                <label htmlFor="Phone">Phone</label>
                <div className="input-group">
                  <PhoneIcon className="left" />
                  <input
                    type="text"
                    name="Phone"
                    id="Phone"
                    disabled
                    ref={inputPhone}
                  />
                  <EditIcon
                    className="right"
                    onClick={() => {
                      inputPhone.current.getAttribute("disabled") == null
                        ? inputPhone.current.setAttribute("disabled", "")
                        : inputPhone.current.removeAttribute("disabled");
                    }}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="Gender">Gender</label>
                <div className="input-group">
                  <WcIcon className="left" />
                  <select name="Gender" id="Gender">
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
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
                    disabled
                    ref={inputAddress}
                  />
                  <EditIcon
                    className="right"
                    onClick={() => {
                      inputAddress.current.getAttribute("disabled") == null
                        ? inputAddress.current.setAttribute("disabled", "")
                        : inputAddress.current.removeAttribute("disabled");
                    }}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="Email">Email</label>
                <div className="input-group">
                  <EmailIcon className="left" />
                  <input
                    type="text"
                    name="Email"
                    id="Email"
                    disabled
                    ref={inputEmail}
                  />
                  <EditIcon
                    className="right"
                    onClick={() => {
                      inputEmail.current.getAttribute("disabled") == null
                        ? inputEmail.current.setAttribute("disabled", "")
                        : inputEmail.current.removeAttribute("disabled");
                    }}
                  />
                </div>
              </div>
              <ButtonGroup>
                <input type="submit" value="Yes, Update" />
              </ButtonGroup>
            </InputWrapper>
          </Input>
        </Form>
      </Wrap>
    </Container>
  );
}

export default CustomerEdit;

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
const Form = styled.form``;

const Input = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-gap: 20px;
`;

const InputWrapper = styled.div`
  padding: 20px 0;
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
      width: 100%;
      height: 30px;
      border-radius: 15px;
      padding: 3px 12px;
      padding-left: 40px;
    }
    .input-group {
      display: block;
      position: relative;

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
        margin-right: 5px;
        top: 0;
        bottom: 0;
        right: 0;
        color: black;
        border-left: 1px solid black;
      }
    }
  }
`;

const ImageWrapper = styled.img`
  width: 100%;
  height: fit-content;
  object-fit: cover;
`;

const ButtonGroup = styled.span`
  margin: 12px 0;
  display: flex;
  justify-content: space-around;

  input {
    width: 100px;
    height: 30px;
    border-radius: 15px;
    background: #3cb043;
  }
`;
