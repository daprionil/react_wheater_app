import FormWheater from "../components/FormWheater";
import CardHomeDetailWheater from "../components/CardHomeDetailWheater";
import styled from "styled-components";
import { useState } from "react";

function Home() {
    const [loading, setLoading] = useState(false);

    return (
        <HomeStyled>
            <h3>Busca el Clima de Tu Ciudad</h3>
            <SectionSearchWheater>
                <FormWheater changeLoading={setLoading}/>
                <CardHomeDetailWheater loading={loading}/>
            </SectionSearchWheater>
        </HomeStyled>
    );
}

const HomeStyled = styled.div`
    & h3:nth-child(1){
        text-align: center;
        padding: 10px;
    }
`;
const SectionSearchWheater = styled.div`
    min-height: 350px;
    @media (max-width: 512px) {
        grid-template-columns: 1fr;
    }
    display: grid;
    grid-template-columns: 1fr 1fr;
`;

export default Home;