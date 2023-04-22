import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar';
import styled from 'styled-components';

const PageContainer = styled.div`
  padding: 0em 8em;
  background-image: linear-gradient(#53286F, #ffffff);
  height: 100vh;
  color: white;
`

function App() {
    return (
      <PageContainer>
        <Navbar>

        </Navbar> 
      </PageContainer>
    )
}

export default App;
