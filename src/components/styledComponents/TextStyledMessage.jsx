import styled, {css} from "styled-components";

const TextStyledMessage = styled.p`
    font-size: 1.2rem;
    padding: 1rem;
    font-weight: bold;

    justify-self: center;
    
    display: flex;
    align-items: center;
    text-align: center;
    ${({type}) => {
        if(type === "error"){
            return css`
                text-decoration: underline;
                text-decoration-color: red;
                text-decoration-thickness: 3px;
            `
        }
    }}
    svg{
        display: block;
        font-size: 3rem;
    }
`
export default TextStyledMessage;