import * as actionType from './actionTypes';

export default function reducer(state = [], action){

    switch(action.type){
        case actionType.ADD_NEW_COURSE:
            // return[
            //     ...state,
            //     action.payload.coursename
            // ]
            return state.concat(action.payload.coursename)

        case actionType.DELETE_COURSE:
            
            const index = state.indexOf(action.payload.coursename);
            if (index > -1) {
              state.splice(index, 1);
            }
        
            break;

        case actionType.RESET_COURSE :
            return state = [];

        default:
            return state;
    }
}