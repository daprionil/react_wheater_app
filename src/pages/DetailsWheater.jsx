import styled from "styled-components";

import { useContext } from "react";
import { contextWheater } from "../context/ContextWheaterProvider";

import TextStyledMessage from "../components/styledComponents/TextStyledMessage";
import Button from "../components/styledComponents/Button";
import { useNavigate } from "react-router-dom";
import ViewWheater from "../components/ViewWheater";
function DetailsWheater() {
    const [wheater] = useContext(contextWheater);
    const navigate = useNavigate();

    return (
        <ComponentDetails>
            {
                Object.values(wheater).length ?
                    wheater.cod !== "404" ?
                        <>
                            <h2>El Clima en {wheater.name}</h2>
                            <SectionDetails>
                                <ViewWheater wheater={wheater} />
                                <OtherDetailsWheater>
                                    <ul>
                                        <li><strong>Temp. Sensación Real:</strong> {parseInt(wheater.main.feels_like - 273)}°</li>
                                        <li><strong>Humedad:</strong> {wheater.main.humidity}%</li>
                                        <li><strong>Nubosidad:</strong> {wheater.clouds.all}%</li>
                                        <li><strong>Velocidad del Viento:</strong> {wheater.wind.speed} Km/h</li>
                                    </ul>
                                </OtherDetailsWheater>
                            </SectionDetails>
                        </>
                    : <TextStyledMessage type="error">Ups! No encuentramos la Ciudad que Estás Buscando </TextStyledMessage>
                :
                    <div style={{textAlign:"center"}}>
                        <TextStyledMessage >Animate a Buscar el Clima de Tu Ciudad</TextStyledMessage>
                        <Button onClick={() => navigate('/')} color="#00b7ff">Consultar Clima</Button>
                    </div>
            }
        </ComponentDetails>
    );
}

const ComponentDetails = styled.div`
    min-height: 400px;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
`;
const SectionDetails = styled.div`
    @media (max-width:512px) {
        grid-template-columns: 1fr;
    }
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
`;

const OtherDetailsWheater = styled.div`
    padding: 0 5px;
    ul{
        height: 100%;
        display: grid;
        grid-template-columns: 1fr;
        align-items: center;

        text-align: center;
        li{
            padding: 10px 5px;
            margin: 2px 0;
            list-style: none;
            border-radius: 5px;
            box-shadow: 0 0 5px rgba(0,0,0,0.2);
        }
    }
`
export default DetailsWheater;