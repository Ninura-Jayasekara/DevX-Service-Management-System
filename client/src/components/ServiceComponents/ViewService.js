import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../Form.css";
import axios from "axios";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";

export default function ViewFacilities() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    //fetching all services from the database
    function getData() {
      axios
        .get("/api/service/")
        .then((res) => {
          setServices(res.data);
        })
        .catch((e) => {
          alert(e.message);
        });
    }
    getData();
  }, []);

  return (
    <div>
      <div className="view">
        <br />
        <div className="card" style={{ background: "#151e3d" }}>
          <center>
            <h2 className="text-white">RESERVATIONS</h2>
          </center>
          <br /><br></br>
          <Link to="/service">
            <KeyboardReturnIcon id="addreturn" style={{ color: "white" }} />
          </Link>
          <table
            class="table table-hover"
            style={{ color: "black", background: "white" }}
          >
            <thead>
              <tr style={{ color: "black", background: "#36454f" }}>
                <th class="text-center" scope="col">
                Vehicle No
                </th>
                <th class="text-center" scope="col">
                  Customer
                </th>
                <th class="text-center" scope="col">
                 Entry Date
                </th>
                <th class="text-center" scope="col">
                  Handover Date
                </th>
                <th class="text-center" scope="col">
                  Description
                </th>
                <th class="text-center" scope="col">
                  Total (Rs)
                </th>
              </tr>
            </thead>
            <tbody>
              {services.map(function (services) {
                return (
                  <tr>
                    <td class="text-center">{services.vNo} </td>
                    <td class="text-center">{services.cusName} </td>
                    <td class="text-center">{services.entryDate} </td>
                    <td class="text-center">{services.handoverDate} </td>
                    <td class="text-center">{services.descriptione} </td>
                    <td class="text-center">{services.totalCost} </td>
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