import { BsThermometerSnow, BsThermometerHalf } from 'react-icons/bs';
import { GiThermometerHot } from 'react-icons/gi';

import styled from "styled-components";
function ViewWheater({wheater}) {
    const changeTimeToCen = (nTime) => parseInt(nTime - 273);
    const wheaterIcon = (temp) => {
        const temp_real = changeTimeToCen(temp);
        
        if(temp_real <= 0){
            return (
                <BsThermometerSnow />
            )
        }else if(temp_real < 15){
            return (
                <BsThermometerHalf />
            )
        }else {
            return (
                <GiThermometerHot />
            )
        }
    }
    return (
        <ComponentStyledViewWheater wheater={wheater}>
            <h2>{wheater.name}
                <span>{wheater.sys.country}</span>
            </h2>
            <div className="top_wheater">
                <h3>{changeTimeToCen(wheater.main.temp)}</h3>
                {
                    wheaterIcon(wheater.main.temp)
                }

            </div>
            <div className="other_info">
                <p><span>{changeTimeToCen(wheater.main.temp_max)}°</span>temp. max</p>
                <p><span>{changeTimeToCen(wheater.main.temp_min)}°</span>temp. min</p>
            </div>
        </ComponentStyledViewWheater>
    );
}

const ComponentStyledViewWheater = styled.div`
    padding: 10px 0;
    text-align: center;

    --temp-color: ${({wheater:{main:{temp}}}) => {
        const temp_real = temp - 273;
        if(temp_real <= 0){
            return '#9cb8d3'
        }else if(temp_real < 15){
            return '#57c7e9'
        }else {
            return '#ff8615'
        }
    }};

    h2{
        background: linear-gradient(.1turn, #f7f7f7 30%, var(--temp-color));
        box-shadow: 2px 2px 0 var(--temp-color);
        border-radius: 10px;
        padding: 5px 10px;
        margin: 2px;
        span{
            padding-left: 5px;
            font-size: 0.7rem;
        }
    }
    & .top_wheater{
        background-color: var(--temp-color);
        font-size: 2rem;
        border-bottom: 12px solid rgba(0,0,0,0.1);
        margin: 10px auto;
        border-radius: 50%;

        width: 100px;
        height: 100px;

        display: flex;
        justify-content: center;
        align-items: center;

        position: relative;
        h3{
            font-size: 140%;
        }
        svg{
            position: absolute;
            top: 0;
            right: 0;
            background: white;
            padding: 5px;
            font-size: 2rem;
            border-radius: 50%;
            box-shadow: 0 1px 5px black;
        }
    }
    & .other_info{
        border-top: 3px solid var(--temp-color);
        padding: 10px;
        
        display: grid;
        grid-template-columns: 1fr;
        justify-content: center;
        gap: 20px;
        
        p{
            display: flex;
            justify-content: center;
            align-items: center;
            
            gap: 10px;
            font-weight: bold;
            span{
                background: rgba(0,0,0,0.1);
                border-radius: 50%;
                padding: 5px 9px;
                margin-right: 5px;
            }
        }
    }
`
export default ViewWheater;