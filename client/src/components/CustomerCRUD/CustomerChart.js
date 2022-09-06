import React from "react";
import { Link } from "react-router-dom";
import "chart.js/auto";
import { Pie, Bar } from "react-chartjs-2";
import styled from "styled-components";

import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";

function CustomerChart() {
  const state = {
    labels: ["Male", "Female"],

    datasets: [
      {
        label: "Patients",
        backgroundColor: ["#B21F00", "#C9DE00"],
        hoverBackgroundColor: ["#501800", "#4B5000"],
        // noFeeds: isConsulted{true}
        // noApp: isConsulted{false}
        data: [12, 5],
      },
    ],
  };
  return (
    <Container>
      <Wrap>
        <InputComponent>
          <div className="table-head">Customer Chart</div>
          <InputGroup>
            <Link to="/customer/report">
              <KeyboardReturnIcon style={{ color: "white" }} />
            </Link>
          </InputGroup>
        </InputComponent>
        <Chart>
          <div>
            <Pie
              options={{
                title: {
                  display: true,
                  text: "Customer",
                  fontSize: 20,
                },
                legend: {
                  display: true,
                  position: "right",
                },
              }}
              data={state}
            />
          </div>
          <div>
            <Bar
              data={{
                // Name of the variables on x-axies for each bar
                labels: ["Active", "Non-Active", "Active", "Non-Active"],
                datasets: [
                  {
                    // Label for bars
                    label: "Customers",
                    // Data or value of your each variable
                    data: [8, 4, 3, 2],
                    // Color of each bar
                    backgroundColor: ["red", "red", "yellow", "yellow"],
                    // Border color of each bar
                    borderColor: ["red", "red", "yellow", "yellow"],
                    borderWidth: 0.5,
                  },
                ],
              }}
              // Height of graph
              height={400}
              options={{
                maintainAspectRatio: false,
                scales: {
                  yAxes: [
                    {
                      ticks: {
                        // The y-axis value will start from zero
                        beginAtZero: true,
                      },
                    },
                  ],
                },
                legend: {
                  labels: {
                    fontSize: 15,
                  },
                },
              }}
            />
          </div>
        </Chart>
      </Wrap>
    </Container>
  );
}

export default CustomerChart;

const Container = styled.main`
  min-height: calc(100vh);
  padding: 60px calc(3vw) 0px;
  overflow-x: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrap = styled.div`
  margin: 10px 0;
  padding: 10px calc(0.5vw + 5px);
  background: #151e3d;
  border-radius: 12px;
  width: 100%;
  min-height: 50vh;
  max-width: 75vw;

  @media (max-width: 1320px) {
    max-width: 80vw;
  }
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
const Chart = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-gap: 10px;
  grid-auto-rows: max-content;

  @media (max-width: 960px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;
