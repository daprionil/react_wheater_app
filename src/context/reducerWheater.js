import { ADD_NEW_WHEATER } from "./actionTypes";

//=-----------Reducer to UseReducer Wheater----------=
const reducerWheater = function(state, {type,payload}){
    const actionReducer = ({
        [`${ADD_NEW_WHEATER}`]: () => {
            return {...payload}
        }
    })[type]
    return actionReducer ? actionReducer() : state;
}

export default reducerWheater;