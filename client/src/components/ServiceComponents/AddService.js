import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../../src/Form.css"


export default function AddService() {

    const [vNo, setVNo] = useState("");
    const [cusName, setCusName] = useState("");
    const [entryDate, setEntryDate] = useState("");
    const [handoverDate, setHandoverDate] = useState("");
    const [description, setDescription] = useState("");


    const [facilities, setFacilities] = useState([]);
    const [totalCost, setTotalCost] = useState(0);

    //(?=.*[-]).{10,}


    useEffect(() => {
        //fetching all facilities from the database
        function getFacilities() {
            let total = 0;

            axios.get("api/service/facilities").then((res) => {

                console.log(res);
                res.data.forEach((e) => {
                    total = total + e.facilityCost;
                })
                setTotalCost(total);
                setFacilities(res.data);
            }).catch((err) => {
                alert(err.message);
            })

        }
        getFacilities();
    }, [])



    function sendData(e) {
        e.preventDefault();

        const newService = {
            vNo,
            cusName,
            entryDate,
            handoverDate,
            description,
            totalCost
        }

        axios.post("/api/service/add", newService).then(() => {
            alert("New Service is Added to the System")
            window.location = "/service";
        }).catch((err) => {
            alert(err)
        })
    }

    return (
        <div>
            <div className="addService">
                <form className="Form2" onSubmit={(e) => { if (window.confirm('Select "OK" If You Want To Confirm The Reservation'))sendData(e)}} style={{ background: "#151e3d" }}>

                    <center>
                        <h2 className="heading">SERVICE RESERVATION</h2>
                    </center>
                    <br></br>
                    <br></br><br></br>

                    <div className="row" >
                        <div className="col">
                            <label forhtml="vNo" className="col-sm-2 col-form-label" id="slabel" ><b>Vehicle No</b></label>
                        </div>
                        <div className="col" style={{ marginRight: "200px" }}>
                            <input type="text" className="form-control" id="vNo" placeholder="WP ABC-1234" required
                                minLength={10} maxLength={11}
                                onChange={(e) => {
                                    setVNo(e.target.value);
                                }} />
                        </div>
                    </div>
                    <br></br>

                    <div className="row" >
                        <div className="col">
                            <label forhtml="cusName" className="form-label" id="slabel"><b>Customer Name</b></label>
                        </div>
                        <div className="col" style={{ marginRight: "200px" }}>
                            <input type="text" className="form-control" id="cusName" placeholder="Enter Your Name" required
                                onChange={(e) => {
                                    setCusName(e.target.value);
                                }} />
                        </div>
                    </div>
                    <br></br>

                    <div className="row">
                        <div className="col">
                            <label for="entryDate" className="form-label" id="slabel"><b>Entry Date</b></label>
                        </div>
                        <div className="col" style={{ marginRight: "200px" }}>
                            <input type="date" className="form-control" id="entryDate" placeholder="11-08-2021" required
                                minLength={10} maxLength={10}
                                onChange={(e) => {
                                    setEntryDate(e.target.value);
                                }} />
                        </div>
                    </div>
                    <br></br>

                    <div className="row">
                        <div className="col">
                            <label for="handoverDate" className="form-label" id="slabel"><b>Handover Date</b></label>
                        </div>
                        <div className="col" style={{ marginRight: "200px" }}>
                            <input type="date" className="form-control" id="handoverDate" placeholder="12-08-2021" required
                                minLength={10} maxLength={10}
                                onChange={(e) => {
                                    setHandoverDate(e.target.value);
                                }} />
                        </div>
                    </div><br></br>
                    <div className="row">
                        <div className="col">
                            <label for="description" className="form-label" id="slabel"><b>Description</b></label>
                        </div>
                        <div className="col" style={{ marginRight: "200px" }}>
                            <input type="text" className="form-control" id="description" placeholder="Type Which Items Do You Want"
                                onChange={(e) => {
                                    setDescription(e.target.value);
                                }} />
                        </div>
                    </div>
                    <br></br>
                    <center>
                        <h3>SERVICE FACILITIES</h3>
                    </center>
                    <div className="mb-3">
                        {
                            facilities.map(function (facilities) {
                                return (

                                    <div className="row">
                                        <div className="col">
                                            <label style={{ marginLeft: "200px", marginTop: "20px" }}><b>{facilities.facilityName}</b></label>
                                        </div>
                                        <center>
                                            <div className="col">
                                                <label style={{ width: "250px", marginTop: "-25px" }} className="form-control" id="facilityCost"><center>{facilities.facilityCost}</center></label>
                                            </div>
                                        </center>
                                    </div>
                                )
                            })
                        }
                    </div><br></br>
                    <div className="row">
                        <div className="col">
                            <label for="totalCost" id="slabel"><b>Total Service Cost (Rs)</b></label>
                        </div>
                        <div className="col" style={{ marginRight: "200px" }}>
                            <input type="text" className="form-control" id="totalCost" value={totalCost} readOnly/>
                        </div>
                    </div>
                    <button type="submit" id="btnpay" className="btn btn-primary"><b>PROCEED PAYMENT</b></button>


                </form>
            </div>
        </div>
    )
}
