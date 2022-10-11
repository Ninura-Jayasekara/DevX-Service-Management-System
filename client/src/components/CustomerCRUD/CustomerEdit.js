import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Image from "../../assets/Customer.jpg";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import EditIcon from "@mui/icons-material/Edit";
import ClearIcon from "@mui/icons-material/Clear";
import TokenIcon from "@mui/icons-material/Token";
import PhoneIcon from "@mui/icons-material/Phone";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import WcIcon from "@mui/icons-material/Wc";
import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
import ManIcon from "@mui/icons-material/Man";
import WomanIcon from "@mui/icons-material/Woman";

function CustomerEdit() {
  const accessToken = sessionStorage.getItem("userToken");
  const [values, setValues] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [isDOBEdit, setIsDOBEdit] = useState(false);
  const [formData, setFormData] = useState({
    _id: "",
    NIC: "",
    Name: "",
    DOB: "",
    Phone: "",
    Gender: "None",
    Address: "",
    Email: "",
    noOfVisit: "",
    DateOfVisit: new Date().toLocaleDateString("en-CA"),
  });
  const inputSearch = useRef();
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
    if (searchData === "") {
      setFilterData([]);
    } else {
      setFilterData(newFilter);
    }
  };

  const clearInput = () => {
    setFilterData([]);
    inputSearch.current.value = "";
  };

  const handleChange = (event) => {
    setFormData((data) => ({
      ...data,
      [event.target.name]: event.target.value,
    }));
  };

  const inputName = useRef();
  const inputPhone = useRef();
  const inputAddress = useRef();
  const inputEmail = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData._id !== "") {
      formData.noOfVisit = String(Number(formData.noOfVisit) + 1);
      authAxios
        .put(`/api/customer/update/${formData._id}`, formData)
        .then((res) => {
          toast.success("Update Succesful", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
          });
          setValues(
            values.map((val, i) =>
              val._id === formData._id ? (val[i] = formData) : val
            )
          );
        })
        .catch((e) => {
          toast.error("Update Failed", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
          });
        });
    } else {
      toast.error("Search Something", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
      });
    }
  };

  useEffect(() => {
    authAxios.get("/api/customer/view").then((req, res) => {
      setValues(req.data);
    });
  }, []);
  return (
    <Container>
      <ToastContainer />
      <Wrap>
        <InputComponent>
          <div className="table-head">Update Customer</div>
          <InputGroup>
            {filterData.length === 0 ? (
              <SearchIcon sx={{ marginRight: "5px" }} />
            ) : (
              <ClearIcon sx={{ marginRight: "5px" }} onClick={clearInput} />
            )}
            <input
              type="text"
              placeholder="Search"
              ref={inputSearch}
              onChange={handleFilter}
            />
            <Link to="/customer">
              <KeyboardReturnIcon
                style={{ color: "white", marginLeft: "5px" }}
              />
            </Link>
            {filterData.length !== 0 && (
              <DataList>
                {filterData.map((val) => (
                  <DataResult
                    key={val._id}
                    onClick={() => {
                      setFormData({
                        _id: val._id,
                        NIC: val.NIC,
                        Name: val.Name,
                        DOB: val.DOB.split("T")[0],
                        Email: val.Email,
                        Address: val.Address,
                        Phone: val.Phone,
                        Gender: val.Gender,
                        noOfVisit: val.noOfVisit,
                        DateOfVisit: new Date().toLocaleDateString("en-CA"),
                      });
                      clearInput();
                    }}
                  >
                    <div>
                      {val.Gender === "Male" ? (
                        <ManIcon
                          sx={{
                            height: "40px",
                            width: "40px",
                          }}
                        />
                      ) : (
                        <WomanIcon
                          sx={{
                            height: "40px",
                            width: "40px",
                          }}
                        />
                      )}
                    </div>
                    <div>{val.NIC}</div>
                    <div>{val.Name}</div>
                  </DataResult>
                ))}
              </DataList>
            )}
          </InputGroup>
        </InputComponent>
        <form onSubmit={handleSubmit}>
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
                    value={formData.NIC}
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
                    value={formData.Name}
                    ref={inputName}
                    onChange={handleChange}
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
                  <input
                    type="date"
                    name="DOB"
                    disabled
                    value={formData.DOB}
                    id="DOB"
                  />
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
                    value={formData.Phone}
                    ref={inputPhone}
                    onChange={handleChange}
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
                  <input
                    type="text"
                    name="Gender"
                    disabled
                    value={formData.Gender}
                    id="Gender"
                  />
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
                    value={formData.Address}
                    ref={inputAddress}
                    onChange={handleChange}
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
                    value={formData.Email}
                    ref={inputEmail}
                    onChange={handleChange}
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
        </form>
      </Wrap>
    </Container>
  );
}

export default CustomerEdit;

const Container = styled.main`
  z-index: 1;
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
  position: relative;
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

    input {
      outline: none;
      border: none;
      width: 100%;
      height: 30px;
      border-radius: 15px;
      padding: 3px 12px;
      padding-left: 40px;
      color: black;
    }
    .input-group {
      display: block;
      position: relative;
      border-radius: 15px;
      overflow: hidden;

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
    background: #3cb043;
  }
`;

const DataList = styled.div`
  z-index: 5;
  position: absolute;
  top: 40px;
  right: 0;
  left: -40px;
  width: 300px;
  height: 200px;
  background: white;
  overflow: hidden;
  overflow-y: auto;
  box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;
`;

const DataResult = styled.div`
  cursor: pointer;
  width: 100%;
  height: 50px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  align-items: center;
  color: white;
  background: black;
  div:first-child {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    grid-row: 1 / span 3;
  }
  div:nth-child(2) {
    grid-column: 2 / span 4;
  }
  div:last-child {
    grid-column: 2 / span 4;
  }
`;
