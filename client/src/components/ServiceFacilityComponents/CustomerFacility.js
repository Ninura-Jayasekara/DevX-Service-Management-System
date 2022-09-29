import React, { useState, useEffect } from "react";
import "../../Form.css";
import axios from "axios";

function CustomerFacility() {
  const [facilities, setFacilities] = useState([]);

  useEffect(() => {
    axios
      .get("api/facility/")
      .then((res) => {
        setFacilities(res.data);
      })
      .catch((e) => {
        alert(e.message);
      });
  }, []);
  return (
    <div>
      <div className="view">
        <center>
          <h2 className="text-white">SERVICE MANAGEMENT</h2>
        </center>
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
              </tr>
            </thead>
            <tbody>
              {facilities.map(function (facilities) {
                return (
                  <tr>
                    <td class="text-center">{facilities.facilityName} </td>
                    <td class="text-center">{facilities.facilityCost} </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CustomerFacility;
