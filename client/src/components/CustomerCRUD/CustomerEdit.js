import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Image from "../../assets/Customer.jpg";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import SearchIcon from "@mui/icons-material/Search";

function CustomerEdit() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Container>
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
                <input type="text" name="NIC" id="NIC" disabled />
              </div>
              <div>
                <label htmlFor="NIC">Name</label>
                <input type="text" name="NIC" id="NIC" disabled />
              </div>

              <div>
                <label htmlFor="NIC">DOB</label>
                <input type="text" name="NIC" id="NIC" disabled />
              </div>

              <div>
                <label htmlFor="NIC">Phone</label>
                <input type="text" name="NIC" id="NIC" disabled />
              </div>

              <div>
                <label htmlFor="NIC">Gender</label>
                <input type="text" name="NIC" id="NIC" disabled />
              </div>

              <div>
                <label htmlFor="NIC">Address</label>
                <input type="text" name="NIC" id="NIC" disabled />
              </div>
              <div>
                <label htmlFor="NIC">Email</label>
                <input type="text" name="NIC" id="NIC" disabled />
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
      height: 30px;
      border-radius: 15px;
      padding: 3px 12px;
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
  }
  input:last-child {
    background: #3cb043;
  }
  input:first-child {
    background: red;
  }
`;