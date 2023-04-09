import styled from "styled-components";

function Loading() {
    return (
        <LoadingStyledComponent></LoadingStyledComponent>
    );
}

const LoadingStyledComponent = styled.div`
    position: relative;

    width: 64px;
    height: 64px;
    border-radius: 50%;

    border-left: 4px solid #00a2ff;

    &::before{
        content: "";

        position: absolute;
        background: white;
        width: 100%;
        height: 100%;
        
        border-radius: 50%;

        transform: scale(.8);
    }

    animation: spin .8s infinite;
    animation-timing-function: ease;

    @keyframes spin {
        0%{transform: rotate(0deg);}
        50%{transform:rotate(180deg);}
        100%{transform:rotate(360deg);}
    }
`

export default Loading;