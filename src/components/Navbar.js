import styled from "styled-components"
import logo from "../assets/ZauKtion.svg"
import StyledButton from "./Button"
import { useMetaMask } from "metamask-react"

const Container = styled.div`
    display:flex;
    justify-content: space-between;
    align-content: center;
    left: 0;
    top: 0;
    padding: 2em 0em;
    width: 100%;
    height: 6em;
    img{
        width: 10em;
    }
`

const Navbar = () =>{
    const {status, account, connect} = useMetaMask() 
    return (
        <Container>
            <img src={logo} alt="logo"/>
            {status === 'notConnected' && <StyledButton onClick={connect}>connect wallet</StyledButton>}
            {status === 'connected' && <StyledButton>{account}</StyledButton>} 
            {status === 'unavailable' && <StyledButton>MetaMask not available :(</StyledButton>}   
        </Container>
    )
}

export default Navbar