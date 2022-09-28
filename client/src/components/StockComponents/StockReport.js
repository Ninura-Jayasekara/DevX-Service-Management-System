import React, { useState, useEffect } from "react";
import axios from "axios";
import MaterialTable from "material-table";


export default function StockReport() {
  const [stock, setStock] = useState([]);
  

//function to get data
  useEffect(() => {
    function getData() {
        axios.get("/api/stock/fetch-stock").then((res) => {
            setStock(res.data);
            
        }).catch((error) => {
            alert(error.message);
        })
    }
    getData();


    }, [])

  return (

    <div>

    

  
      <div className="view" >
        <center>
        <h1 className="text-white">INVENTORY MANAGEMENT</h1>
        </center>
        <br></br><br></br>
        <center>
          <h5 className="text-white">STOCK DETAILS REPORT</h5>
        </center>
      <br></br>
      <div class="component-body">
        
      <div className="container-fluid">
        <div class = "d-flex justify-content-center px-auto">
          <MaterialTable style={{background:"#BBDEFB"}}
            title="Details of Inventory"
          
              columns={[
                {
                  title: "Item No",
                  field: "itemNo",
                  type: "string",
                },
                { title: "Stock No", 
                  field: "stockNo", 
                  type: "string" 
                },
                { title: "Category",
                  field: "category", 
                  type: "string" 
                },
                { title: "Name", 
                  field: "name", 
                  type: "string" 
                },
                { title: "Brand", 
                  field: "brand", 
                  type: "string" 
                },
                { title: "Date", 
                  field: "date", 
                  type: "string" 
                },
                { title: "Volume", 
                  field: "volume", 
                  type: "string" 
                },
                { title: "Quantity", 
                  field: "quantity", 
                  type: "number" 
                },      
                {
                  title: "Supplier Name",
                  field: "supplierName",
                  type: "string",
                },
                { title: "Buying Price", 
                  field: "buyingPrice", 
                  type: "number" },
                
              
          
          ]}
          data={inventory}
          options={{
            sorting: true,
            actionsColumnIndex: -1,
            exportButton: true,
          }}
        />
          </div>
      </div>
      </div>
    </div>
  </div>
  );
  
}