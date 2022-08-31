import React from  "react";
import logo from "../Images/DevX-logo.png"


function Navbar() {
    return(
        <>

<nav class="navbar navbar-expand-lg navbar-dark bg-blue-800">

<div class="container">
<a class="navbar-brand" href="#">
      <img src={logo} alt="" width="65" height="40"/>
    </a>
    </div>
  
  <div class="nav justify-content-end container-fluid">
  
    
      <div class="navbar-nav">
        <a class="nav-link" href="#">Customer</a>
        <a class="nav-link" href="#">Service</a>
        <a class="nav-link" href="#">Stocks</a>
        <a class="nav-link" href="#">Payment</a>
      </div>
    </div>
  
</nav>

</>
  )
}

export default Navbar;