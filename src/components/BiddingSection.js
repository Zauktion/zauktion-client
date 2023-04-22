import { useState } from "react";
import styled from "styled-components";
import eth from "../assets/eth.svg";
import pepe from "../assets/pepe.png"
import StyledButton from "./Button";
import Web3 from "web3";
import StyledInput from "../components/Input";

let web3;
web3 = web3?.currentProvider || new Web3(window.ethereum);

const Container = styled.div`
  color: black;
`;

const LeftRightSplitContainer = styled.div`
  display: grid;
  grid-column-gap: 10%;
  grid-template-columns: 40% auto;
`;

const LeftContainer = styled.div`
  grid-column: 1;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  img {
    width: 400px;
  }
`;

const RightContainer = styled.div`
  grid-column: 2;
`;

const BiddingSection = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleBid = async (e) => {
    e.preventDefault();
    const block = await web3.eth.getAccounts();
    console.log(block);
  };

  return (
    <Container>
      <p style={{ color: "#F9DB6D", fontSize: "30px", fontWeight: "700" }}>
        {" "}
        I'm a Bidder{" "}
      </p>
      <p style={{ fontSize: "46px" }}> Ongoing Auction </p>
      <LeftRightSplitContainer>
        <LeftContainer>
          <img src={pepe} alt="temp pic" />
          <form method="post" onSubmit={handleBid}>
            <StyledInput name="bidPrice" onChange={handleChange} placeholder="Enter Bid Price"/>
            <StyledInput name="idSecret" onChange={handleChange} placeholder="Enter ID Secret"/>
            <StyledButton type="submit">Register</StyledButton>
          </form>
        </LeftContainer>
        <RightContainer>
          <p style={{ fontSize: "25px", fontWeight: "700" }}>Pepe Coin</p>
          <p>Bid Start Time / End Time (GTM 8+): Apr 23 14:00 / Apr 23 16:00</p>
          <p>Reveal start / end time (GTM 8+): Apr 16:00 / Apr 17:00</p>
          <p>Minimum Bid Price: Apr 16:00 / Apr 17:00</p>{" "}
        </RightContainer>
      </LeftRightSplitContainer>
    </Container>
  );
};

export default BiddingSection;
