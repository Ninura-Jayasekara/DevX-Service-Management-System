import React,{ useState} from "react";
import axios from "axios";
import styled from "styled-components";
import { Link,useNavigate } from "react-router-dom";
import Payment from "../../assets/addpayment.jpg";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";


export default function AddPaymentDetails(){

    const accessToken = sessionStorage.getItem('userToken');
    const navigate = useNavigate();


    const [customerName, setCustomerName] = useState("");
    const [vehicleNumber, setVehicleNumber] = useState("");
    const [serviceDate, setServiceDate] = useState("");
    const [amount, setAmount] = useState("");
   
    const authAxios = axios.create({
      
      headers: {
          Authorization: `Bearer ${accessToken}`
      }
  })

    function sendData(e){
        e.preventDefault();
    
        const newPayment={
            customerName,
            vehicleNumber,
            serviceDate,
            amount
        }

        
        authAxios.post("/api/payment/add-payment",newPayment).then(()=>{
            alert("Payment Added")
            setCustomerName("");
            setVehicleNumber("");
            setServiceDate("");
            setAmount("");
            navigate("/viewpayment");

        }).catch((err)=>{
            alert(err)
        })
        }    

    return(

        <Container>
        <Wrap>
          <InputComponent>
            <div className="table-head">Add Payment Details</div>
            <InputGroup>
              <Link to="/viewpayment">
                <KeyboardReturnIcon style={{ color: "white" }} />
              </Link>
            </InputGroup>
          </InputComponent>
          <Form onSubmit={sendData}>
            <Input>
              <ImageWrapper src={Payment} />
              <InputWrapper>
                
                <div>
                  <label htmlFor="cusname">Customer Name</label>
                  <input type="text" id="cusName" 
                    placeholder="Enter customer name"
                    required 
                    value={customerName} onChange={(e)=>{

                        setCustomerName(e.target.value);

                    }}  />
                </div>
  
                <div>
                  <label htmlFor="vehiNo">Vehicle Number</label>
                  <input type="text" id="vehiNo" 
                    placeholder="Enter Vehicle Number" 
                    required 
                    value={vehicleNumber} onChange={(e)=>{

                        setVehicleNumber(e.target.value);

                    }}  />
                </div>
  
                <div>
                  <label htmlFor="date">Service Date</label>
                  <input type="date" id="date" 
                    placeholder="Enter service Date" 
                    required 
                    value={serviceDate} onChange={(e)=>{

                        setServiceDate(e.target.value);

                    }}  />
                </div>
  
                <div>
                  <label htmlFor="price">Payment (Rs.)</label>
                  <input type="text" id="price" 
                    placeholder="Enter payment" 
                    required 
                    value={amount} onChange={(e)=>{

                        setAmount(e.target.value);

                    }}  />
                </div>
               
                <ButtonGroup>
                  <input type="reset" value="Reset" />
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
