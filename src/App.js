import "./App.css";

import Navbar from "./components/Navbar";
import Section from "./components/Section";
import styled from "styled-components";
import BiddingSection from "./components/BiddingSection";
import { Toaster } from "react-hot-toast";

const PageContainer = styled.div`
  padding: 0em 8em;
  background-image: linear-gradient(#53286f, #ffffff);
  height: 200vh;
  color: white;
`;

function App() {
  return (
    <PageContainer>
      <Toaster />
      <Navbar />
      <Section />
      <BiddingSection />
    </PageContainer>
  );
}

export default App;
