import * as actionType from './actionTypes';

export default function UserReducer(state = [], action){

    switch(action.type){
        case actionType.ADD_NEW_USER:
            return state = action.payload.user

        default: return state
    }

}