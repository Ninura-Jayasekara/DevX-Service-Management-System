import React,{ useState} from "react";
import axios from "axios";
import styled from "styled-components";
import 'react-toastify/dist/ReactToastify.css';
import { Link ,useNavigate } from "react-router-dom";
import Stock from "../../assets/addparts.jpg";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";


export default function AddSpareParts(){

    const accessToken = sessionStorage.getItem('userToken');
    const navigate = useNavigate();

    const [itemCode, setItemCode] = useState("");
    const [brand, setBrand] = useState("");
    const [country, setCountry] = useState("");
    const [dealerName, setDealerName] = useState("");
    const [sparePart, setSparePart] = useState("");
    const [price, setPrice] = useState("");
   
    const authAxios = axios.create({
      
      headers: {
          Authorization: `Bearer ${accessToken}`
      }
  })

  const handleReset = () => {
    setItemCode('');
    setBrand('');
    setCountry('');
    setDealerName('');
    setSparePart('');
    setPrice('');
  };
 
    function sendData(e){
        e.preventDefault();

      
    
        const newPart={
            itemCode,
            brand,
            country,
            dealerName,
            sparePart,
            price
        }

        
        authAxios.post("/api/stock/",newPart).then(()=>{
          alert("successful")
            setItemCode("");
            setBrand("");
            setCountry("");
            setDealerName("");
            setSparePart("");
            setPrice("");
            navigate("/fetch-stocks");

        }).catch((err)=>{
            alert(err)
        })
        }    

    return(

        <Container>
        <Wrap>
          <InputComponent>
            <div className="table-head">Add Spare Part</div>
            <InputGroup>
              <Link to="/fetch-stocks">
                <KeyboardReturnIcon style={{ color: "white" }} />
              </Link>
            </InputGroup>
          </InputComponent>
          <Form onSubmit={sendData}>
            <Input>
              <ImageWrapper src={Stock} />
              <InputWrapper>
                <div>

                  {/* <label htmlFor="ItemCode">Item Code</label>
                  <input type="text" id="itemCode" 
                    placeholder="Enter Item Code" 
                    minLength={5} maxLength={20}  
                    required 
                    value={itemCode} onChange={(e)=>{

                        setItemCode(e.target.value);

                    }}  /> */}

                  <label htmlFor="itemCode">Item Code</label>

                  <select id="itemCode" defaultValue="Select Item Code" value={itemCode}
                          onChange={(e) => setItemCode(e.target.value)}>

                            <option value= "Add">Choose Spare Part Name for the Item Code</option>
                            <option value= "Engine-Oil-001">Honda Engine oil 4l</option> 
                            <option value = "Engine-Oil-002">Toyota Engine oil 4l </option>
                            <option value = "Engine-Oil-003">Honda Engine oil 1l </option>
                            <option value = "Engine-Oil-004">Toyota Engine oil 1l </option>
                            <option value = "Brake-Pad-001">Honda Brake Pad </option>
                            <option value = "Brake-Pad-002">Toyota Brake Pad </option>
                            <option value = "Brake-Pad-003">Kia Brake Pad </option>
                            <option value = "Brake-Oil-001">Honda Brake oil 1l </option>
                            <option value = "Brake-Oil-002">Toyota Brake oil 1l </option>
                   
                  </select>
                
                </div>
                <div>
                  <label htmlFor="Brand">Brand</label>
                  <input type="text" id="brand" 
                    placeholder="Enter Item Brand" 
                    minLength={5} maxLength={20}  
                    required 
                    value={brand} onChange={(e)=>{

                        setBrand(e.target.value);

                    }}  />
                </div>
  
                <div>
                  <label htmlFor="Country">Country</label>
                  <input type="text" id="country" 
                    placeholder="Enter Manufactured Country" 
                    minLength={5} maxLength={20}  
                    required 
                    value={country} onChange={(e)=>{

                        setCountry(e.target.value);

                    }}  />
                </div>
  
                <div>
                  <label htmlFor="Dealer">Dealer</label>
                  <input type="text" id="dealer" 
                    placeholder="Enter Item Dealer" 
                    minLength={5} maxLength={30}  
                    required 
                    value={dealerName} onChange={(e)=>{

                        setDealerName(e.target.value);

                    }}  />
                </div>
  
                <div>
                  <label htmlFor="Part">Spare Part</label>
                  <input type="text" id="part" 
                    placeholder="Enter Spare Part" 
                    minLength={8} maxLength={20}  
                    required 
                    value={sparePart} onChange={(e)=>{

                        setSparePart(e.target.value);

                    }}  />
                </div>
  
                <div>
                  <label htmlFor="price">Selling Price (Rs.)</label>
                  <input type="text" id="price" 
                    placeholder="Enter Selling Price" 
                    required 
                    value={price} onChange={(e)=>{

                        setPrice(e.target.value);

                    }}  />
                </div>
               
                <ButtonGroup>
                  <input type="reset" value="Reset" onClick={handleReset} />
                  <input type="submit" value="Submit" />
                </ButtonGroup>
              </InputWrapper>
            </Input>
          </Form>
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
  min-height: 50vh;
  width: 100%;
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

const Form = styled.form``;

const Input = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-gap: 20px;
`;

const InputWrapper = styled.div`
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  div {
    display: flex;
    flex-direction: column;

    label {
      margin: 6px 0 6px;
    }

    input,
    select {
      outline: none;
      border: none;
      height: 30px;
      border-radius: 15px;
      padding: 3px 12px;
    }
  }
`;

const ImageWrapper = styled.img`
  width: 100%;
  height: fit-content;
  object-fit: cover;
`;

const ButtonGroup = styled.span`
  margin: 12px 0;
  display: flex;
  justify-content: space-around;

  input {
    width: 100px;
    height: 30px;
    border-radius: 15px;
  }
  input:last-child {
    background: #3cb043;
  }
  input:first-child {
    background: red;
  }
`;
