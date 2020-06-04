import * as actionType from './actionTypes';

export default function reducer(state = [], action){

    switch(action.type){
        case actionType.ADD_NEW_COURSE:
            return state = state.concat(action.payload.coursename)

        case actionType.RESET_COURSE :
            return state = [];

        default:
            return state;
    }
}