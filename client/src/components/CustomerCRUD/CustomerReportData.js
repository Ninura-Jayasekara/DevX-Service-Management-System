import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { RingLoader } from "react-spinners";
import axios from "axios";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";

const CustomerReportData = React.forwardRef((props, ref) => {
  const accessToken = sessionStorage.getItem("userToken");
  const [values, setValues] = useState([]);
  const [loading, setLoading] = useState(false);
  const authAxios = axios.create({
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const sort = (val) => {
    props.isSort
      ? val.sort(
          (a, b) =>
            new Date(a.DateOfVisit).getTime() -
            new Date(b.DateOfVisit).getTime()
        )
      : val.sort(
          (a, b) =>
            new Date(b.DateOfVisit).getTime() -
            new Date(a.DateOfVisit).getTime()
        );
  };

  useEffect(() => {
    setLoading(true);
    authAxios.get("/api/customer/view").then((res) => {
      setValues(res.data);
    });
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading ? (
        <Loader>
          <RingLoader color="#36d7b7" loading={loading} />
        </Loader>
      ) : (
        <TableContainer component={Paper} ref={ref}>
          {props.isSort ? sort(values) : sort(values)}
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead sx={{ background: "#36454f" }}>
              <TableRow>
                <TableCell>NIC</TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">Address</TableCell>
                <TableCell align="right">Last&nbsp;Visit</TableCell>
                <TableCell align="right">No&nbsp;of&nbsp;Visit</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {values.map((val) => (
                <TableRow
                  key={val._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {val.NIC}
                  </TableCell>
                  <TableCell align="right">{val.Name}</TableCell>
                  <TableCell align="right">{val.Email}</TableCell>
                  <TableCell align="right">{val.Address}</TableCell>
                  <TableCell align="right">
                    {val.DateOfVisit.split("T")[0]}
                  </TableCell>
                  <TableCell align="right">{val.noOfVisit}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
});

const Loader = styled.div`
  display: flex;
  justify-content: center;
`;

export default CustomerReportData;
