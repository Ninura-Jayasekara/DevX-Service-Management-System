import React, { useEffect, useState } from "react";
import axios from "axios";
import "chart.js/auto";
import { Pie, Bar } from "react-chartjs-2";
import styled from "styled-components";

const CustomerChartData = React.forwardRef((props, ref) => {
  const accessToken = sessionStorage.getItem("userToken");
  const date = new Date();
  const [noMale, setNoMale] = useState(0);
  const [noFemale, setNoFemale] = useState(0);
  const [activeMale, setActiveMale] = useState(0);
  const [activeFemale, setActiveFemale] = useState(0);

  const authAxios = axios.create({
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const state = {
    labels: ["Male", "Female"],

    datasets: [
      {
        label: "Patients",
        backgroundColor: ["#B21F00", "#C9DE00"],
        hoverBackgroundColor: ["#501800", "#4B5000"],
        data: [noMale, noFemale],
      },
    ],
  };

  const customerData = async (val) => {
    const male = await val.filter((val) => val.Gender === "Male");
    setNoMale(male.length);

    const noActiveMale = await male.filter(
      (val) =>
        date.getFullYear() == val.DateOfVisit.split("T")[0].split("-")[0] &&
        Math.abs(
          date.getMonth() - (val.DateOfVisit.split("T")[0].split("-")[1] - 1)
        ) <= 3
    );

    setActiveMale(noActiveMale.length);

    const female = await val.filter((val) => val.Gender === "Female");
    setNoFemale(female.length);

    const noActiveFemale = await female.filter(
      (val) =>
        date.getFullYear() == val.DateOfVisit.split("T")[0].split("-")[0] &&
        Math.abs(
          date.getMonth() - (val.DateOfVisit.split("T")[0].split("-")[1] - 1)
        ) <= 3
    );

    setActiveFemale(noActiveFemale.length);
  };

  useEffect(() => {
    authAxios.get("/api/customer/view").then((res) => {
      customerData(res.data);
    });
  }, []);
  return (
    <Chart ref={ref}>
      <div>
        <Pie
          options={{
            plugins: {
              title: {
                display: true,
                text: "Customer",
                fontSize: 20,
              },
              legend: {
                position: "top",
              },
            },
          }}
          data={state}
        />
      </div>
      <div>
        <Bar
          data={{
            labels: ["Active", "Non-Active"],
            datasets: [
              {
                label: "Male",
                data: [activeMale, noMale - activeMale],
                backgroundColor: "red",
                borderColor: "red",
                borderWidth: 0.5,
              },
              {
                label: "Female",
                data: [activeFemale, noFemale - activeFemale],
                backgroundColor: "yellow",
                borderColor: "yellow",
                borderWidth: 0.5,
              },
            ],
          }}
          // Height of graph
          // height={400}
          options={{
            maintainAspectRatio: false,
            plugins: {
              title: {
                display: true,
                text: "Customer",
                fontSize: 20,
              },
              legend: {
                labels: {
                  fontSize: 15,
                },
              },
            },
          }}
        />
      </div>
    </Chart>
  );
});

const Chart = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  // grid-gap: 10px;
  grid-auto-rows: max-content;

  @media (max-width: 960px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

export default CustomerChartData;
