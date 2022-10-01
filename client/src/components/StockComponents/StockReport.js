import React, { useState, useEffect } from "react";
import axios from "axios";
import MaterialTable from "material-table";
import {Link} from "react-router-dom";
import {
  TableContainer,
  Table,
  Paper,
} from "@mui/material";
import styled from "styled-components";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";


export default function StockReport() {

  const accessToken = sessionStorage.getItem('userToken');

  const [stock, setStock] = useState([]);

  const authAxios = axios.create({
      
    headers: {
        Authorization: `Bearer ${accessToken}`
    }
})
  

//function to get data
  useEffect(() => {
    function getData() {
        authAxios.get("/api/stock/fetch-stock").then((res) => {
          console.log(res.data)
            setStock(res.data);
            
        }).catch((error) => {
            alert(error.message);
        })
    }
    getData();


    }, [])

  return (
  
<Container>
      <Wrap>
        <InputComponent>
          <div className="table-head">Stock Report</div>
          <InputGroup>
              <Link to="/fetch-stocks">
                <KeyboardReturnIcon style={{ color: "white" }} />
              </Link>
            </InputGroup>
        </InputComponent>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
        
          <MaterialTable title="Details of Stocks"
              columns={[
                {
                  title: "Item Code",
                  field: "itemCode",
                  type: "string",
                },
                { title: "Brand", 
                  field: "brand", 
                  type: "string" 
                },
                { title: "Country",
                  field: "country", 
                  type: "string" 
                },
                { title: "Dealer", 
                  field: "dealerName", 
                  type: "string" 
                },
                { title: "Spare Part", 
                  field: "sparePart", 
                  type: "string" 
                },
                { title: "Price", 
                  field: "price", 
                  type: "string" 
                }
          ]}
          data={stock}
          options={{
            sorting: true,
            actionsColumnIndex: -1,
            exportButton: true,
          }}
        />
        </Table>
          </TableContainer>
  </Wrap>
  </Container>
  ); 
}

const Container = styled.main`
  min-height: calc(100vh);
  padding: 60px calc(3vw) 0px;
  overflow-x: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrap = styled.div`
  padding: 10px calc(0.5vw + 5px);
  background: #151e3d;
  border-radius: 12px;
  width: 100%;
  min-height: 50vh;
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




