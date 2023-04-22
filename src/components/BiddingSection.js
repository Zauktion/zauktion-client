import { useState } from "react";
import styled from "styled-components";
import eth from "../assets/eth.svg";
import StyledButton from "./Button";

const Container = styled.div`
  color: black;
`;

const LeftRightSplitContainer = styled.div`
  display: grid;
`;

const LeftContainer = styled.div`
  grid-column: 1;
`;

const RightContainer = styled.div`
  grid-column: 2;
`;



const BiddingSection = () => {
    
const [inputs, setInputs] = useState({})

const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

const handleBid = (e) =>{
    e.preventDefault();
    console.log(inputs)
}

  return (
    <Container>
      <p style={{ color: "#F9DB6D", fontSize: "30px", fontWeight: "700" }}>
        {" "}
        I'm a Bidder{" "}
      </p>
      <p style={{fontSize: "46px" }}> Ongoing Auction </p>
      <LeftRightSplitContainer>
        <LeftContainer>
            <img src={eth}/>
            <form method="post" onSubmit = {handleBid}>
                <input name="bidPrice" onChange={handleChange}/>
                <input name="idSecret" onChange={handleChange}/>
                <StyledButton type="submit">Register</StyledButton>
            </form>
        </LeftContainer>
        <RightContainer>Right </RightContainer>
      </LeftRightSplitContainer>
    </Container>
  );
};

export default BiddingSection;
