import * as TYPE from '../constants/ActionTypes';

export default function  (state = [], action) {
    console.log(action);
    switch (action.type) {
        case TYPE.ADD_LIST:
            return [
                ...state,
                action.payload
            ]
        case TYPE.GET_LISTS:
            return state
        default:
            return state
    }
}