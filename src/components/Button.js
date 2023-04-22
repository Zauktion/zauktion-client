import styled from "styled-components";

const StyledButton = styled.button`
    outline: none;
    display: inline-block;
    padding: 1em 2em;
    width: fit-content;
    height: fit-content;
    color: black;
    font-size: 14px;
    font-weight: 700;
    align-self: center;
    background-image: linear-gradient(to right, #348380, #F9DB6D);
    border-radius: 4px 4px 4px 20px;
    border: none;
    &:hover{
        opacity: 0.9;
    }
`
export default StyledButton