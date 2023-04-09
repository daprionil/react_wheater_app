import { useContext } from "react";
import styled, { css } from "styled-components";

import {FcSearch} from 'react-icons/fc';

import { contextWheater } from "../context/ContextWheaterProvider";

import Loading from "./Loading";
import ViewWheater from './ViewWheater';
import TextStyledMessage from './styledComponents/TextStyledMessage';

function CardHomeDetailWheater({loading}) {
    const [wheater] = useContext(contextWheater);
    return (
        <ComponentCardStyled>
            {
                loading ? 
                    <Loading />
                : wheater.cod !== "404" ?
                    wheater.name ?
                        <ViewWheater wheater={wheater}/>
                    :
                    <TextStyledMessage >
                        No has consultado el Clima, Animate!!
                        <FcSearch />
                    </TextStyledMessage>
                :
                    <TextStyledMessage type="error">
                        La ciudad que Intentas Consultar no es Válida
                    </TextStyledMessage>
            }
        </ComponentCardStyled>
    );
}

const ComponentCardStyled = styled.div`
    background: #e7e7e7;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export default CardHomeDetailWheater;