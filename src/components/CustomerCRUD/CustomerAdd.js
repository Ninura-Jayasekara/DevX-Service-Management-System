import React from "react";
import styled from "styled-components";

import Image from "../../assets/Customer.jpg";

function CustomerAdd() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hello");
  };
  return (
    <Container>
      <Wrap>
        <Head>
          <div className="table-head">Customer Registration</div>
        </Head>
        <Form onSubmit={handleSubmit}>
          <Input>
            <ImageWrapper src={Image} />
            <InputWrapper>
              <div>
                <label htmlFor="NIC">NIC</label>
                <input type="text" name="NIC" id="NIC" />
              </div>
              <div>
                <label htmlFor="NIC">Name</label>
                <input type="text" name="NIC" id="NIC" />
              </div>

              <div>
                <label htmlFor="NIC">DOB</label>
                <input type="text" name="NIC" id="NIC" />
              </div>

              <div>
                <label htmlFor="NIC">Phone</label>
                <input type="text" name="NIC" id="NIC" />
              </div>

              <div>
                <label htmlFor="NIC">Gender</label>
                <select>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>

              <div>
                <label htmlFor="NIC">Address</label>
                <input type="text" name="NIC" id="NIC" />
              </div>
              <div>
                <label htmlFor="NIC">Email</label>
                <input type="text" name="NIC" id="NIC" />
              </div>
              <ButtonGroup>
                <input type="reset" value="Reset" />
                <input type="submit" value="Submit" />
              </ButtonGroup>
            </InputWrapper>
          </Input>
        </Form>
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
  padding: 10px calc(0.5vw + 5px);
  background: #151e3d;
  border-radius: 12px;
  min-height: 50vh;
  width: 100%;
`;

const Head = styled.div`
  padding: 10px 0;

  div.table-head {
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
