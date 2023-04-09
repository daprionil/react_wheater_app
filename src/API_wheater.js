import { useState } from 'react';
import { getUrlApi } from './ENVIROMENT_data';
export async function getWheater(country,city){
    try {
        const res = await fetch(getUrlApi(country,city));
        const data = await res.json();

        return data;
    } catch (error) {
        console.log(error);
    }
}