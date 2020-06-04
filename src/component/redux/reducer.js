export default function reducer(state = [], action){

    switch(action.type){
        case 'addingCourse':
            return state = state.concat(action.payload.coursename)

        case 'resetCourse':
            return state = [];

        default:
            return state;
    }
}