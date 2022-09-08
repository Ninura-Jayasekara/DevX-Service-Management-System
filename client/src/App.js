import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";

import Navbar from "./components/Navbar";
import LargeFooter from "./components/LargeFooter";
import Home from "./components/Home";

import background from "./assets/background.jpg";
import CustomerDetails from "./components/CustomerCRUD/CustomerDetails";
import CustomerAdd from "./components/CustomerCRUD/CustomerAdd";
import CustomerEdit from "./components/CustomerCRUD/CustomerEdit";
import CustomerDelete from "./components/CustomerCRUD/CustomerDelete";
import CustomerReport from "./components/CustomerCRUD/CustomerReport";
import CustomerChart from "./components/CustomerCRUD/CustomerChart";
import SearchParts from "./components/StockComponents/searchParts";
import Login from "./components/Login/Login";
import AddSpareParts from "./components/StockComponents/AddSpareParts";
import DisplayStocks from "./components/StockComponents/DisplayStocks";
import AddCardDetails from "./components/PaymentComponents/AddCardDetails";

function App() {
  return (
    <Router>
      <Container bgImage={background}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/customer" element={<CustomerDetails />}></Route>
          <Route path="/customer/add" element={<CustomerAdd />}></Route>
          <Route path="/customer/edit" element={<CustomerEdit />}></Route>
          <Route path="/customer/delete" element={<CustomerDelete />}></Route>
          <Route path="/customer/report" element={<CustomerReport />}></Route>
          <Route path="/customer/chart" element={<CustomerChart />}></Route>

          <Route path="/stock" element={<SearchParts />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/add-stocks" element={<AddSpareParts />}></Route>
          <Route path="/fetch-stocks" element={<DisplayStocks />}></Route>

          <Route path="/add-card" element={<AddCardDetails />}></Route>
        </Routes>
        <LargeFooter />
      </Container>
    </Router>
  );
}

export default App;

const Container = styled.div`
  min-height: 100vh;
  position: relative;
  min-width: 300px;
  &:before {
    background: ${(props) =>
      `url(${props.bgImage}) center center / cover no-repeat fixed`};
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: -2;
  }
`;
