import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import picture from "../../assets/Logo_login.png";
//import picture from "../../assets/5364424.png";

import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import styled from "styled-components";

const Login = () => {
	const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");
    const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:3001/api/admin/login";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data);
            navigate("/add-stocks");
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

	return (
        <Container>
        <Wrap>
          <InputComponent>
            <div className="table-head">Admin Login</div>
            <InputGroup>
              <Link to="/">
                <KeyboardReturnIcon style={{ color: "white" }} />
              </Link>
            </InputGroup>
          </InputComponent>
          <Form onSubmit={handleSubmit}>
            <Input>
              <ImageWrapper src={picture} />
              <InputWrapper>
                <div>
                  <label htmlFor="Email">Email</label>
                  <input type="email" name="email" placeholder="Email" onChange={handleChange} value={data.email} required />
                </div>
                <div>
                  <label htmlFor="Password">Password</label>
                  <input type="password" name="password" placeholder="Password" onChange={handleChange} value={data.password} required />
                </div>
                <ButtonGroup>
                  <input type="submit" value="Login" />
                </ButtonGroup>
              </InputWrapper>
            </Input>
          </Form>
        </Wrap>
      </Container>
    );
  }

export default Login;

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
  width: 75%;
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