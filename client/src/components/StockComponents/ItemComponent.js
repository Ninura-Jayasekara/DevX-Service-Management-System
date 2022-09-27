import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import {Row,Col} from "reactstrap";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import EditIcon from "@mui/icons-material/Edit";


  
  export default function UpdateAndDelete() {
    
  //brand country dealer price

    const [itemCode, setItemCode] = useState('');
    const [brand, setBrand] = useState('');
    const [country, setCountry] = useState('');
    const [dealer, setDealer] = useState('');
    const [sparePart, setSparePart] = useState('');
    const [price, setPrice] = useState('');

    const [isEdit, setIsEdit] = useState(false);
    
    const [input, setInput] = useState('');
    const accessToken = sessionStorage.getItem("userToken");


  const authAxios = axios.create({
    headers: {
      Authorization: `Bearer ${accessToken}`,
    }
});
  
    
  
    const  loadStockDetails = async () => {
      await authAxios.get(`/api/stock/search?q=${input}`).then((res) => {

        setItemCode(res.data.stocks.itemCode);
        setBrand(res.data.stocks.brand);
        setCountry(res.data.stocks.country);
        setDealer(res.data.stocks.dealerName);
        setSparePart(res.data.stocks.sparePart);
        setPrice(res.data.stocks.price);
        
        
      }).catch((err) => {
        alert(err.message)
      })
    };

    //creting a method for update selling price

    const onSubmit = async (e) => {
        e.preventDefault();
    
        const newprice = {
            price
        };
        console.log(newprice)
    
              await authAxios
                .put(`/api/stock/update/${itemCode}`, newprice)
                .then(() => {
                  alert("Price updated Successfully");
                  window.location.reload(true);
                })
                .catch((err) => {
                  alert(err);
                });
            };


//creting a method for delete items

      const  onDelete = async () => {
      
              await authAxios
                .delete(`/api/stock/delete/${itemCode}`)
                .then(() => {
                  window.alert('Do you want to delete the selected item?')
                  alert("Item Deleted Successfully");
                  window.location.reload(true);
                })
                .catch((err) => {
                  alert(err);
                });
            };


    
  

  return (

<Container>
      <Wrap>
        <InputComponent>
          <div className="table-head">Search Spare Parts And Price</div>
          <InputGroup>
            <SearchIcon onClick={loadStockDetails} />
            <input type="text" id="input" value={input}   placeholder="Search" 
            onChange={(e)=>{

                setInput(e.target.value);

              }}/>
          </InputGroup>
        </InputComponent>
        <br></br><br></br>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead sx={{ background: "#36454f" }}>
              <TableRow>
                <TableCell align="right">Item Code</TableCell>
                <TableCell align="right">Brand</TableCell>
                <TableCell align="right">Country</TableCell>
                <TableCell align="right">Dealer</TableCell>
                <TableCell align="right">Spare Part</TableCell>
                <TableCell align="right">Price (Rs.)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                    <TableCell align="right">{itemCode}</TableCell>
                  <TableCell align="right">{brand}</TableCell>
                  <TableCell align="right">{country}</TableCell>
                  <TableCell align="right">{dealer}</TableCell>
                  <TableCell align="right">{sparePart}</TableCell>
                  <TableCell align="right">
                            <input
                            type="text"
                            name="part"
                            id="part"
                            value={price}
                            onChange={(e) => {
                                setPrice(e.target.value);
                                }}
                        />
                        
                        <EditIcon
                            className="right"
                        
                            onClick={() => {
                                setIsEdit(true);
                            }}
                        />
                        
                    </TableCell>
                </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <ButtonGroup>
                <input type="submit" value="Update" onClick={onSubmit}/>
                <input type="submit" value="Delete" onClick={onDelete}/>
        </ButtonGroup>
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

const ButtonGroup = styled.div`
  padding: 6px 0 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  button {
    cursor: pointer;
    padding: 5px;
    margin: 0 3px;
    background: #404040;
    border: none;
    border-radius: 5px;
    transition: all 0.3s ease 0s;

    &:hover {
      box-shadow: 0 0 0 2px #909090;
    }
  }
`;


