import styled from "styled-components";

const Button = styled.button`
    padding: 10px;
    border-radius: 10px;
    font-weight: bold;

    background: ${({color}) => color};
    color: white;
    box-shadow: 0 1px 5px rgba(0,0,0,0.3);
    border: none;

    cursor: pointer;
`


export default Button;