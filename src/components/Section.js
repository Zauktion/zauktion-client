import styled from "styled-components";
import dollar from "../assets/dollar.svg";
import eth from "../assets/eth.svg";

const Container = styled.div`
    padding: 3em 0em;
    margin-bottom: 10em;
    h1{
        font-size: 46px;
        font-weight: 400;
        line-height: 60px;
    }

    h3{
        font-size: 19px;
        font-weight: 400;
        line-height: 25px;
    }
`;

const Section = () => (
  <Container>
    <h1>
      An Auction System with <br/> 
      Privacy by Implementing <br/>
      ZERO KNOWLEDGE Proofs
    </h1>
    <h3>
      In this system, bidders and their bid prices will be hidden, <br/>
      ensuring that only the winning bidder and their bid amount will be revealed.
    </h3>
    <img style={{position:"absolute", left: "750px", top: "300px", width:"120px"}} src={dollar} alt="pic"/>
    <img style={{position:"absolute", left: "1000px", top: "600px", width:"120px"}} src={eth} alt="pic"/>
  </Container>
);

export default Section;
