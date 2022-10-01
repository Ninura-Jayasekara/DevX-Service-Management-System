import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";

import Navbar from "./components/Navbar";
import LargeFooter from "./components/LargeFooter";
import Home from "./components/Home";

import background from "./assets/background.jpg";
// IT20260224 - Insaf N. M.
import Customer from "./components/CustomerCRUD/Customer";
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

import CustomerFacility from "./components/ServiceFacilityComponents/CustomerFacility";
import AddServiceFacilities from "./components/ServiceFacilityComponents/AddServiceFacilities";
import ViewFacilities from "./components/ServiceFacilityComponents/ViewFacilities";
import UpdateFacilities from "./components/ServiceFacilityComponents/UpdateFacilities";
<<<<<<< HEAD
import AddService from "./components/ServiceComponents/AddService";
=======

>>>>>>> d63e96031dbe073fcd07e1ed255a48119bb37cd0
import AddCardDetails from "./components/PaymentComponents/AddCardDetails";
import AddPaymentDetails from "./components/PaymentComponents/AddPaymentDetails";
import ViewPayments from "./components/PaymentComponents/ViewPaymentDetails";
import UpdateAndDelete from "./components/StockComponents/ItemComponent";
import StockReport from "./components/StockComponents/StockReport";

import PageNotFound from "./components/PageNotFound";

function App() {
  const accessToken = sessionStorage.getItem("userToken");
  return (
    <Router>
      <Container bgImage={background}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          {accessToken === null ? (
            <>
              <Route path="/customer" element={<Customer />}></Route>
              <Route path="/facilities" element={<CustomerFacility />}></Route>
              <Route path="/stock" element={<SearchParts />}></Route>
            </>
          ) : (
            <>
              <Route path="/customer" element={<CustomerDetails />}></Route>
              <Route path="/customer/add" element={<CustomerAdd />}></Route>
              <Route path="/customer/edit" element={<CustomerEdit />}></Route>
              <Route
                path="/customer/delete"
                element={<CustomerDelete />}
              ></Route>
              <Route
                path="/customer/report"
                element={<CustomerReport />}
              ></Route>
              <Route path="/customer/chart" element={<CustomerChart />}></Route>
              {/* Mishan */}
              <Route path="/facilities" element={<ViewFacilities />}></Route>
              <Route
                path="/facilities/add"
                element={<AddServiceFacilities />}
              ></Route>
              <Route path="/update/:fId" element={<UpdateFacilities />}></Route>

              {/* Ninura */}
              <Route path="/stock" element={<DisplayStocks />}></Route>
              <Route path="/stock/add" element={<AddSpareParts />}></Route>
              <Route
                path="/stock/update-delete"
                element={<UpdateAndDelete />}
              ></Route>
            </>
          )}

          <Route path="/login" element={<Login />}></Route>
<<<<<<< HEAD
          <Route path="/add-stocks" element={<AddSpareParts />}></Route>
          <Route path="/fetch-stocks" element={<DisplayStocks />}></Route>
          <Route path="/update-delete" element={<UpdateAndDelete />}></Route>
          <Route path="/stock-report" element={<StockReport />}></Route>
=======
>>>>>>> 0ebe5c23ef77ccdcdf69f50629c3d3759b6739ab

<<<<<<< HEAD
          <Route path="/addfacilities" element={<AddServiceFacilities />}></Route>
          <Route path="/facilities" element={<ViewFacilities />}></Route>
          <Route path="/update/:fId" element={<UpdateFacilities />}></Route>
          <Route path="/addservice" element={<AddService />}></Route>
=======
          {/* <Route path="/stock" element={<SearchParts />}></Route>
          <Route path="/stock/add" element={<AddSpareParts />}></Route>
          <Route path="/stock/view" element={<DisplayStocks />}></Route>
          <Route
            path="/stock/update-delete"
            element={<UpdateAndDelete />}
          ></Route> */}
>>>>>>> d63e96031dbe073fcd07e1ed255a48119bb37cd0

          <Route path="/add-card" element={<AddCardDetails />}></Route>
          <Route path="/add-payment" element={<AddPaymentDetails />}></Route>
          <Route path="/viewpayment" element={<ViewPayments />}></Route>

          <Route path="/*" element={<PageNotFound />} />
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
