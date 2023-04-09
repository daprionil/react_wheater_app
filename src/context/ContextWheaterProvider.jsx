import React, { createContext, useReducer } from 'react'
import reducerWheater from './reducerWheater';
//=-----CreateContext-------=
export const contextWheater = createContext();

//=------- InitialState For Reducer-------=
const initialState = {};

//=-----Generate Component Provider Wheater-------=
function ContextWheaterProvider({children}) {
    const [stateWheater, dispatchWheaterState] = useReducer(reducerWheater,initialState)

    return (
        <contextWheater.Provider value={[stateWheater,dispatchWheaterState]}>
            {children}
        </contextWheater.Provider>
    );
}

export default ContextWheaterProvider;