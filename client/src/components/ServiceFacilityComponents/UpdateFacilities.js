import React,{useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import '../../Form.css';
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";

export default function UpdateFacilities(){

    const [facilityName, setFacilityName]= useState(null);
    const [facilityCost, setFacilityCost]= useState("");
    const [fId, setFId]= useState(null);

    useEffect(() =>{
        
        setFId(localStorage.getItem('ID'))
        setFacilityName(localStorage.getItem('Name'));
        setFacilityCost(localStorage.getItem('Cost'));

    }, [] );

    const updateAPIData = () => {
        axios.put(`api/facility/update/${fId}`, {
            facilityName,
            facilityCost
        })
    }

    
        

    return(
        <div>
        <div className="addFacilities">
            <form className="Form" style={{  background: "#151e3d"}}>
            <center>
                <h2 className="heading">UPDATE FACILITY COST</h2>
            </center><br></br>
            <Link to={"/facilities"}>
              <KeyboardReturnIcon id="addreturn" style={{ color: "white" }} />
        </Link> 

                <div  id="addfac"className="mb-3">
                    <label className="falabel" id="snlabel" for="facilityName"><b>Service Name</b></label>
                    <input type="text" className="form-control" id="facilityName" value={facilityName} readOnly
                    onChange={(e)=>{
                        setFacilityName(e.target.value);
                    }}/>
                </div>

                <div id="addfac" className="mb-3">
                    <label className="falabel" id="sclabel" for="facilityCost"><b>Service Facility Cost (Rs)</b></label>
                    <input type="Number" className="form-control" id="facilityCost" value={facilityCost}
                    onChange={(e)=>{
                        setFacilityCost(e.target.value);
                    }}/>
                </div>
                <Link to={"/facilities"}><button type="submit" id="btnsubmit" className="btn btn-primary" onClick={()=>{updateAPIData();}}><b>UPDATE</b></button></Link>

            </form>
        </div>
        </div>

    )
}