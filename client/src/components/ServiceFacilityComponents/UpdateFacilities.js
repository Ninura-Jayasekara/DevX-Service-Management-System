import React,{useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { Link } from "react-router-dom";
import '../../Form.css';

export default function UpdateFacilities(){

    const [facilityName, setFacilityName]= useState(null);
    const [facilityCost, setFacilityCost]= useState("");
    const [fId, setFId]= useState(null);

    const navigate = useNavigate();

    useEffect(() =>{
        
        setFId(localStorage.getItem('ID'))
        setFacilityName(localStorage.getItem('Name'));
        setFacilityCost(localStorage.getItem('Cost'));

    }, [] );

    // const updateAPIData = () => {
    //     axios.put(`api/facility/update/${fid}`, {
    //         facilityName,
    //         facilityCost,
    //     })
    //     window.location="/facilities";
    

    const onSubmit = async (e) => {
        e.preventDefault();
    
        const newFacility = {
            facilityName,
            facilityCost,
        };
        console.log(newFacility)
    
              await axios
                .put(`/api/facility/update/${fId}`, newFacility)
                .then(() => {
                  alert("Service Facility Cost Updated Successfully");
                  navigate("/service");
                })
                .catch((err) => {
                  alert(err);
                });
            };



    return(
        <div>
        <div className="addFacilities">
            <form className="Form" style={{  background: "#151e3d"}}>
            <center>
            <h2 className="heading">UPDATE FACILITY COST</h2>
            </center><br/>
            <Link to={"/service"}>
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
                    <input type="number" className="form-control" id="facilityCost" value={facilityCost}
                    onChange={(e)=>{
                        setFacilityCost(e.target.value);
                    }}/>
                </div>
                <button type="submit" id="btnsubmit" className="btn btn-primary" onClick={(e) => { if (window.confirm('Select "OK" If You Want To Update the Service Facility Cost')) onSubmit(e)}}><b>UPDATE</b></button>

            </form>
        </div>
        </div>

    )
}