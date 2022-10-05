import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../Form.css";
import axios from "axios";

export default function ViewFacilities() {
  const [facilities, setFacilities] = useState([]);

  useEffect(() => {
    //fetching all facilities from the database
    function getData() {
      axios
        .get("api/facility/")
        .then((res) => {
          setFacilities(res.data);
        })
        .catch((e) => {
          alert(e.message);
        });
    }
    getData();
  }, []);

  const setData = (facilities) => {
    let { _id, facilityName, facilityCost } = facilities;
    localStorage.setItem("ID", _id);
    localStorage.setItem("Name", facilityName);
    localStorage.setItem("Cost", facilityCost);
  };

  const deleteFacilities = (fId) => {
    axios
      .delete(`/api/facility/delete/${fId}`)
      .then(() => {
        alert("Deleted Successfully");
        window.location.reload(false);
      })
      .catch((e) => {
        alert(e.message);
      });
  };

  return (
    <div>
      <div className="view">
        <br />

        <div className="card" style={{ background: "#151e3d" }}>
          <center>
            <h2 className="text-white">DISPLAY SERVICE FACILITIES</h2>
          </center>
          <br />
          <table
            class="table table-hover"
            style={{ color: "black", background: "white" }}
          >
            <thead>
              <tr style={{ color: "black", background: "#36454f" }}>
                <th class="text-center" scope="col">
                  Service Facility Name
                </th>
                <th class="text-center" scope="col">
                  Service Facility Cost (Rs)
                </th>
                <th class="text-center" scope="col">
                  UPDATE
                </th>
                <th class="text-center" scope="col">
                  DELETE
                </th>
              </tr>
            </thead>
            <tbody>
              {facilities.map(function (facilities) {
                return (
                  <tr>
                    <td class="text-center">{facilities.facilityName} </td>
                    <td class="text-center">{facilities.facilityCost} </td>

                    <td class="text-center">
                      <Link to={"/service/update"}>
                        <button
                          className="btn btn-primary btn-sm"
                          style={{ background: "#2f3e54", width: "100px" }}
                          onClick={() => setData(facilities)}
                        >
                          <b>EDIT</b>
                        </button>
                      </Link>
                    </td>
                    <td class="text-center">
                      <button
                        className="btn btn-primary btn-sm"
                        style={{ background: "#2f3e54", width: "100px" }}
                        onClick={() => deleteFacilities(facilities._id)}
                      >
                        <b>DELETE</b>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <Link to={"/service/addfacilities"}>
            <button type="submit" id="btnadd" className="btn btn-primary">
              <b>ADD SERVICE FACILITY</b>
            </button>
          </Link >
          <Link to={"/service/services"}>
          <button type="submit" id="btnview" className="btn btn-primary">
            <b>VIEW RESERVATIONS</b>
          </button>
          </Link>
          <button type="submit" id="btnreport" className="btn btn-primary">
            <b>GENERATE SERVICE REPORT</b>
          </button>
        </div>
      </div>
    </div>
  );
}
