import React, {useState, useEffect} from "react";
import "../../Form.css";
import axios from "axios";
import jspdf from "jspdf";
import "jspdf-autotable"
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { Link } from "react-router-dom";

export default function GenerateReport() {

    const [allData,setAllData] = useState([]);
    const [filteredData,setFilteredData] = useState([]);

 
    useEffect(() => {
        function getServices(){
            axios("/api/service/").then(response => {
                setAllData(response.data);
                setFilteredData(response.data);
            }).catch(error => {
                alert(error.message);
            })
        }
        getServices();
    }, [])

    const handleSearch = (event) =>{
    
        let value = event.target.value.toLowerCase();
        let result = [];
        console.log(value);

        result = allData.filter((data) => {
             return data.entryDate.search(value) != -1;
        });
        setFilteredData(result);
    }

        //generate report pdf code

        const generatePDF = tickets => {

            const doc = new jspdf();
            const tableColumn = ["Vehicle No", "Customer Name", "Entry Date", "Handover Date","Description","Total (Rs)"];
            const tableRows = [];
        
            tickets.map(ticket => {
                const ticketData = [
                    ticket.vNo,
                    ticket.cusName,
                    ticket.entryDate,
                    ticket.handoverDate,
                    ticket.description,
                    ticket.totalCost
                
                ];
                tableRows.push(ticketData);
            })
            doc.text("Monthly Service Report", 14, 15).setFontSize(12);
            
            // right down width height
            doc.autoTable(tableColumn, tableRows, { styles: { fontSize: 8, }, startY: 35 });
            doc.save('Monthly_Service_Report.pdf');
        };

        return (
            <div>
              <div className="view">
                <br />
                <div className="card" style={{ background: "#151e3d" }}>
                  <center>
                    <h2 className="text-white">GENERATE SERVICE REPORT</h2>
                  </center>
                  &nbsp;&nbsp;&nbsp; 
                  <Link to="/service" style={{ marginTop: "10px" }}>
            <KeyboardReturnIcon id="addreturn1" style={{ color: "white" }} />
          </Link>        
                    <div>
                        <label className="search"><h5><b>Search</b></h5></label>
                                <input id="search" type="month" onChange={(event) =>handleSearch(event)} />
                    </div>
                    <div className="card container d-flex justify-content-center" style={{ marginTop: "20px" }}>
                        
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                <th >Vehicle No</th>
                                <th >Customer</th>
                                <th >Entry Date</th>
                                <th >Handover Date</th>
                                <th >Description</th>
                                <th >Total (Rs)</th>
                                </tr>
                            </thead>

                            <tbody>
                                {filteredData.map((value)=>{
                                    return(
                                        <tr> 
                                            <td>{value.vNo}</td> 
                                            <td>{value.cusName}</td> 
                                            <td>{value.entryDate}</td>
                                            <td>{value.handoverDate}</td>
                                            <td>{value.description}</td>
                                            <td>{value.totalCost}</td>
                                        </tr>
                                    )
                                    })
                                    }
                            </tbody>
                        </table>
                    </div>
                    <center>
                <button type="print" id="btnprint"  style={{background:"#2f3e54"}} className="btn btn-primary" onClick={() => generatePDF(filteredData)}>GENERATE REPORT</button>
                </center>
                </div>
              </div>
            </div>
          );
}

