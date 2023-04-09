import { addNewWheater } from "../context/createActions";

import { useContext, useState } from "react";
import styled from "styled-components";
import { contextWheater } from "../context/ContextWheaterProvider";
import { getWheater } from "../API_wheater";

function FormWheater({changeLoading}) {
    const [,dispatchWheater] = useContext(contextWheater)
    const [errors, setErrors] = useState([]);

    //Procesa la Solitiud del Formulario
    const handleSubmitFormWheater = async e => {
        e.preventDefault();
        
        //Get Values from Form
        const values = {
            ciudad:e.target['city'].value.trim().toLowerCase(),
        };
        
        //Validate Errors
        const arrayErrors = validateErrors(values);
        setErrors(arrayErrors);

        //If doesn't exist a error
        if(!arrayErrors.length){
            changeLoading(true);

            const wheaterValue = await getWheater(values.ciudad);

            changeLoading(false)

            dispatchWheater(addNewWheater(wheaterValue));
        }
    }

    const validateErrors = (values) => Object.entries(values).filter(
        ([,value]) => {
            return value === ""
        }
    );

    return (
        <ComponentFormStyled onSubmit={handleSubmitFormWheater}>
            <input type="text" name="city" placeholder="Ciudad"/>
            <input type="submit" value="aceptar" />
            {
                errors.map(([base],i) => (
                    <ComponentError key={i} strong={base}>Debes completar la Información para</ComponentError>
                ))
            }
        </ComponentFormStyled>
    );
}

const ComponentFormStyled = styled.form`
    align-self: flex-start;
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;

    padding: 2rem;
    & input{
        border-radius: 10px;
        box-shadow: 0 1px 5px rgba(0,0,0,0.3);
        background:none;
        border: none;
        outline: none;
        width: 100%;
        padding: 10px 15px;
        &[type="submit"]{
            font-weight: bold;

            justify-self: center;

            cursor: pointer;
            background: #e4e4e4;
            transition: all .3s ease-out;
            width: fit-content;
            &:hover{
                background: rgb(0, 153, 255);
            }
        }
    }
`
const ComponentError = styled.p`
    padding: 5px 7px;
    background: red;
    border-radius: 10px;
    color: white;

    &::after{
        content: "${({strong}) => strong}";
        color: black;
        padding-left: 5px;
        font-weight: bold;
    }
`
export default FormWheater;