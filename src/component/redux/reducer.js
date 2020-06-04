function reducer(state = [], action){

    switch(action.type){
        case 'addingCourse':
            return[
                ...state,
                {
                    coursename: action.payload.coursename
                }
            ]

        case 'resetCourse':
            return state = [];

        default:
            return state;
    }
}