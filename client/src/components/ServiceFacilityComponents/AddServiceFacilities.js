import React, { useState } from "react";
import axios from "axios";
import "../../../src/Form.css";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
//import styled from "styled-components";
//import {toast, ToastContainer} from 'react-toastify';
import { Link } from "react-router-dom";

export default function AddServiceFacilities() {
  const [facilityName, setFacilityName] = useState("");
  const [facilityCost, setFacilityCost] = useState("");

  function sendData(e) {
    e.preventDefault();

    const newFacility = {
      facilityName,
      facilityCost,
    };

    axios
      .post("/api/facility/add", newFacility)
      .then(() => {
        alert("New Service Facility is Added to the System");
        setFacilityName("");
        setFacilityCost("");
        window.location = "/facilities";
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div>
      <div className="addFacilities">
        <form
          className="Form"
          onSubmit={sendData}
          style={{ background: "#151e3d" }}
        >
          <center>
            <h2 className="heading">ADD SERVICE FACILITY</h2>
          </center>
          <br></br>
          <Link to="/viewfacilities">
            <KeyboardReturnIcon id="addreturn" style={{ color: "white" }} />
          </Link>
          <div id="addfac" className="mb-3">
            <label className="falabel" id="snlabel" for="facilityName">
              <b>Service Name</b>
            </label>
            <input
              type="text"
              className="form-control"
              id="facilityName"
              placeholder="Type Service Facility Name"
              required
              onChange={(e) => {
                setFacilityName(e.target.value);
              }}
            />
          </div>

          <div id="addfac" className="mb-3">
            <label className="falabel" id="sclabel" for="facilityCost">
              <b>Service Facility Cost (Rs)</b>
            </label>
            <input
              type="Number"
              className="form-control"
              id="facilityCost"
              placeholder="200"
              required
              onChange={(e) => {
                setFacilityCost(e.target.value);
              }}
            />
          </div>
          <button type="submit" id="btnsubmit" className="btn btn-primary">
            <b>SUBMIT</b>
          </button>
        </form>
      </div>
    </div>
  );
}
