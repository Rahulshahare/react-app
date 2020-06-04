export default function reducer(state = 0, action){
    switch(action.type){
        case'INCREASE':
            return state + 1;
        case'DECREASE':
            if(state >= 1){
                return state - 1;
            }else{
                return state;
            }
        default: 
            return state;
    }
}