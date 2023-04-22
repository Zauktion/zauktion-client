import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar';
import Section from './components/Section';
import styled from 'styled-components';
import BiddingSection from './components/BiddingSection';

const PageContainer = styled.div`
  padding: 0em 8em;
  background-image: linear-gradient(#53286F, #ffffff);
  height: 200vh;
  color: white;
`

function App() {
    return (
      <PageContainer>
        <Navbar/>
        <Section/> 
        <BiddingSection/>
      </PageContainer>
    )
}

export default App;
